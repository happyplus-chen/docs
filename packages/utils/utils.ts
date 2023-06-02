import { computed } from 'vue'

type AnyObj = { [k: string]: any }

// 从目标对象获取指定属性
export function getIncludeAttrs(keys: string[], target: AnyObj) {
  const obj = {} as AnyObj
  keys.forEach((key) => {
    const value = target[key]
    if (value !== undefined) obj[key] = value
  })
  return obj
}

// 从目标对象排除指定属性
export function getExcludeAttrs(keys: string[], target: AnyObj) {
  const obj: AnyObj = {}
  for (const key in target) {
    if (!keys.includes(key)) obj[key] = target[key]
  }
  return obj
}

export function guid() {
  return 'xxxxxxxx'.replace(/[x]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function modelRef<T, K extends keyof T>(model: T, colName: K) {
  return computed<T[K]>({
    get(): T[K] {
      return model[colName]
    },
    set(val: T[K]) {
      model[colName] = val
    }
  })
}

type treeNode = { children?: treeNode[]; [k: string]: any }
export function getFlatArray<T>(columns: treeNode[]): T[] {
  return columns.reduce((result, v) => {
    return result.concat(
      Array.isArray(v.children) && v.children.length > 0 ? getFlatArray(v.children) : v
    )
  }, [] as any)
}

// 获取文件类型
export function getFileTypeByUrl(url: string) {
  const a = url.split('.').pop()
  const b = a ? a.split('?')[0] : ''
  const suffix = b.toLocaleLowerCase()
  if (['png', 'jpg', 'jpeg', 'bmp', 'gif', 'svg'].includes(suffix)) return 'img'
  if (['mp4', 'ogg', 'webm'].includes(suffix)) return 'video'
  if (['mp3', 'wav', 'ogg'].includes(suffix)) return 'audio'
}

// 动态添加css
export const dynamicStyleRule = function (id: string, styleRule: string | null) {
  const styleId = 'dynamic-style-' + id
  let styleElement = document.getElementById(styleId) as HTMLStyleElement
  if (styleElement && styleElement.parentNode) {
    styleElement.parentNode.removeChild(styleElement)
  }
  if (typeof styleRule == 'string') {
    styleElement = document.createElement('style')
    styleElement.id = styleId
    styleElement.type = 'text/css'
    document.getElementsByTagName('head')[0].appendChild(styleElement)
    styleElement.appendChild(document.createTextNode(styleRule))
  }
}

export const isObject = (val: any) => val !== null && typeof val === 'object'

export const getNsObj = (obj: any, names: string | any[]): any => {
  const arr = Array.isArray(names) ? names : names.split('.')
  const curkey = arr.shift()
  const curObj = obj[curkey]

  if (isObject(curObj) && arr.length) {
    return getNsObj(curObj, arr)
  }

  return curObj
}

// 对象数组根据key去重
export function unique(arr: AnyObj[], key: string): AnyObj[] {
  const newArr: AnyObj[] = []
  const keys: string[] = []
  arr.forEach((item) => {
    const index = keys.indexOf(item[key])
    if (index === -1) {
      keys.push(item[key])
      newArr.push(item)
    }
  })
  return newArr
}

export const isNullOrEmpty = (value) =>
  value === null || value === undefined || (typeof value === 'string' && value.trim().length === 0)
