
import mockjs from 'mockjs';
import { pathToRegexp } from 'path-to-regexp';
import mockIndex from '../../../mock/index'
import mockTable from '../../../mock/table'

const Mock: any = mockjs

const __param2Obj__ = (url) => {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse('{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}');
}
const __XHR2ExpressReqWrapper__ = (handle) => {
  return function (options) {
    let result = null;
    if (typeof handle === 'function') {
      const { body, type, url, headers } = options;
      let b = body;
      try {
        b = JSON.parse(body);
      }
      catch { }
      result = handle({
        method: type,
        body: b,
        query: __param2Obj__(url),
        headers,
      });
    }
    else {
      result = handle;
    }
    return Mock.mock(result);
  };
}
function __setupMock__(timeout = 0) {
  timeout &&
    Mock.setup({
      timeout,
    });
}


const createProdMockServer = (mockList) => {
  if ((import.meta as any).env.MODE !== 'development') {

    for (const { url, method, response, timeout } of mockList) {
      __setupMock__(timeout);
      Mock.mock(pathToRegexp(url, undefined, { end: false }), method || 'get', __XHR2ExpressReqWrapper__(response));
    }
  }
}


createProdMockServer([...mockIndex, ...mockTable]);