export const filterConfig = {
  SAP_T001W: {
    dialogTitle: '工厂选择',
    formItems: [
      {
        filterId: 1364865805721602,
        tabId: 1364865805721601,
        showType: '1',
        rowIdx: 1,
        inputLength: 160,
        filterName: '工厂代码',
        sqlAttribute: 'WERKS',
        sqlOperator: 'like',
        sqlValueNo: 'FACT_NO',
        idxSeq: 1,
        onlyValue: '0',
        tableNo: 'T001W',
        upperType: '1'
      },
      {
        filterId: 1364865805721603,
        tabId: 1364865805721601,
        showType: '1',
        rowIdx: 1,
        inputLength: 160,
        filterName: '工厂名称',
        sqlAttribute: 'NAME1',
        sqlOperator: 'like',
        sqlValueNo: 'FACT_NAME',
        idxSeq: 2,
        onlyValue: '0',
        tableNo: 'T001W',
        upperType: '2'
      }
    ],
    tableColumns: [
      {
        columnId: 1368172373729280,
        tabId: 1364865805721601,
        columnName: '工厂地址',
        columnNo: 'FACT_ADDR',
        columnLength: 100,
        idxSeq: 3,
        showType: '1',
        tableNo: 'T001W'
      },
      {
        columnId: 1364865805721604,
        tabId: 1364865805721601,
        columnName: '工厂代码',
        columnNo: 'FACT_NO',
        columnLength: 100,
        idxSeq: 1,
        showType: '1',
        tableNo: 'T001W'
      },
      {
        columnId: 1364865805721605,
        tabId: 1364865805721601,
        columnName: '工厂名称',
        columnNo: 'FACT_NAME',
        columnLength: 100,
        idxSeq: 2,
        showType: '1',
        tableNo: 'T001W'
      }
    ]
  },
  P_PROJECT_DEFINE: {
    dialogTitle: '项目选择',
    formItems: [
      {
        filterId: 1365971576897539,
        tabId: 1365971576897537,
        showType: '1',
        rowIdx: 1,
        inputLength: 160,
        filterName: '项目名称',
        sqlAttribute: 'PROJECT_NAME',
        sqlOperator: 'like',
        sqlValueNo: 'PROJECT_NAME',
        idxSeq: 1,
        onlyValue: '0',
        tableNo: 'P_PROJECT_DEFINE',
        upperType: '2'
      },
      {
        filterId: 1366406771802112,
        tabId: 1365971576897537,
        showType: '1',
        rowIdx: 1,
        inputLength: 160,
        filterName: '工厂代码',
        sqlAttribute: 'FACT_NO',
        sqlOperator: '=',
        sqlValueNo: 'FACT_NO',
        idxSeq: 1,
        onlyValue: '0',
        tableNo: 'P_PROJECT_DEFINE',
        upperType: '1'
      },
      {
        filterId: 1365971576897540,
        tabId: 1365971576897537,
        showType: '1',
        rowIdx: 1,
        inputLength: 160,
        filterName: '项目描述',
        sqlAttribute: 'PROJECT_DESC',
        sqlOperator: 'like',
        sqlValueNo: 'PROJECT_DESC',
        idxSeq: 2,
        onlyValue: '0',
        tableNo: 'P_PROJECT_DEFINE',
        upperType: '2'
      },
      {
        filterId: 1365971576897538,
        tabId: 1365971576897537,
        showType: '1',
        rowIdx: 1,
        inputLength: 160,
        filterName: '项目编号',
        sqlAttribute: 'PROJECT_NO',
        sqlOperator: '=',
        sqlValueNo: 'PROJECT_NO',
        idxSeq: 1,
        onlyValue: '0',
        tableNo: 'P_PROJECT_DEFINE',
        upperType: '1'
      }
    ],
    tableColumns: [
      {
        columnId: 1365971576897545,
        tabId: 1365971576897537,
        columnName: '项目名称',
        columnNo: 'PROJECT_NAME',
        columnLength: 120,
        idxSeq: 3,
        showType: '1',
        tableNo: 'P_PROJECT_DEFINE'
      },
      {
        columnId: 1365971576897546,
        tabId: 1365971576897537,
        columnName: '项目编号',
        columnNo: 'PROJECT_NO',
        columnLength: 120,
        idxSeq: 2,
        showType: '1',
        tableNo: 'P_PROJECT_DEFINE'
      },
      {
        columnId: 1365978258669568,
        tabId: 1365971576897537,
        columnName: '项目描述',
        columnNo: 'PROJECT_DESC',
        columnLength: 120,
        idxSeq: 4,
        showType: '1',
        tableNo: 'P_PROJECT_DEFINE'
      },
      {
        columnId: 1365971576897543,
        tabId: 1365971576897537,
        columnName: '工厂代码',
        columnNo: 'FACT_NO',
        columnLength: 120,
        idxSeq: 1,
        showType: '1',
        tableNo: 'P_PROJECT_DEFINE'
      }
    ]
  },
  P_FACTMAT_MC_USER: {
    dialogTitle: '用户选择',
    formItems: [
      {
        filterId: 1370088839348227,
        tabId: 1370088839348225,
        showType: '1',
        rowIdx: 1,
        inputLength: 160,
        filterName: '工厂代码',
        sqlAttribute: 'FACT_NO',
        sqlOperator: '=',
        sqlValueNo: 'FACT_NO',
        idxSeq: 1,
        onlyValue: '0',
        tableNo: 'P_FACTMAT_PARAMS_MC',
        upperType: '1'
      },
      {
        filterId: 1370089440485376,
        tabId: 1370088839348225,
        showType: '1',
        rowIdx: 1,
        inputLength: 160,
        filterName: '工号',
        sqlAttribute: 'USER_NO',
        sqlOperator: 'like',
        sqlValueNo: 'USER_NO',
        idxSeq: 2,
        onlyValue: '0',
        tableNo: 'P_FACTMAT_PARAMS_MC',
        upperType: '1'
      },
      {
        filterId: 1370088839348226,
        tabId: 1370088839348225,
        showType: '1',
        rowIdx: 3,
        inputLength: 160,
        filterName: '物控员',
        sqlAttribute: 'USER_NAME',
        sqlOperator: 'like',
        sqlValueNo: 'USER_NAME',
        idxSeq: 3,
        onlyValue: '0',
        tableNo: 'P_FACTMAT_PARAMS_MC',
        upperType: '1'
      }
    ],
    tableColumns: [
      {
        columnId: 1370088839356416,
        tabId: 1370088839348225,
        columnName: '物控员',
        columnNo: 'USER_NAME',
        columnLength: 60,
        idxSeq: 3,
        showType: '1',
        tableNo: 'P_FACTMAT_PARAMS_MC'
      },
      {
        columnId: 1370088839356417,
        tabId: 1370088839348225,
        columnName: '工号',
        columnNo: 'USER_NO',
        columnLength: 60,
        idxSeq: 2,
        showType: '1',
        tableNo: 'P_FACTMAT_PARAMS_MC'
      },
      {
        columnId: 1370088839356418,
        tabId: 1370088839348225,
        columnName: '工厂代码',
        columnNo: 'FACT_NO',
        columnLength: 60,
        idxSeq: 1,
        showType: '1',
        tableNo: 'P_FACTMAT_PARAMS_MC'
      }
    ]
  }
}

export const selectPopDatas = {
  SAP_T001W: {
    list: [
      {
        FACT_ADDR: '辽宁省沈阳市沈北新区沈北路20-3号-6',
        FACT_NO: '0004',
        FACT_NAME: '合肥比亚迪盛世新景汽车销售有限公司',
        WERKS: '0004'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '1000',
        FACT_NAME: '比亚迪股份总公司工厂',
        WERKS: '1000'
      },
      {
        FACT_ADDR: '宝龙比亚迪内：正大门直行100米',
        FACT_NO: '1001',
        FACT_NAME: '后勤比亚迪股份工厂',
        WERKS: '1001'
      },
      {
        FACT_ADDR: '宝龙比亚迪内：正大门直行100米',
        FACT_NO: '1002',
        FACT_NAME: '后勤精密制造工厂',
        WERKS: '1002'
      },
      {
        FACT_ADDR: '葵涌镇延安路1号比亚迪工业园 A-6#厂房 2楼',
        FACT_NO: '1003',
        FACT_NAME: '比亚迪半导体股份有限公司后勤微电子工厂',
        WERKS: '1003'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '10Z0',
        FACT_NAME: '中研院公共工厂',
        WERKS: '10Z0'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '10Z1',
        FACT_NAME: '中研院应用材料工厂',
        WERKS: '10Z1'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '10Z2',
        FACT_NAME: '中研院金属材料工厂',
        WERKS: '10Z2'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '10Z3',
        FACT_NAME: '中研院导光膜工厂',
        WERKS: '10Z3'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '2000',
        FACT_NAME: '一部股份数字能源工厂',
        WERKS: '2000'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '2001',
        FACT_NAME: '三部(股份)总公司工厂',
        WERKS: '2001'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '2002',
        FACT_NAME: '二部PACK工厂(停用)',
        WERKS: '2002'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '2003',
        FACT_NAME: '四部LCD工厂',
        WERKS: '2003'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '2004',
        FACT_NAME: '镍镉电池工厂',
        WERKS: '2004'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '200N',
        FACT_NAME: '一部数字能源无价值工厂',
        WERKS: '200N'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '2010',
        FACT_NAME: '消费电池比亚迪股份Pack工厂',
        WERKS: '2010'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路',
        FACT_NO: '2011',
        FACT_NAME: '一部精密组件工厂',
        WERKS: '2011'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路',
        FACT_NO: '2016',
        FACT_NAME: '一部比亚迪股份金属工厂',
        WERKS: '2016'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇',
        FACT_NO: '2019',
        FACT_NAME: '一部深圳充电器厂（停用）',
        WERKS: '2019'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路',
        FACT_NO: '201N',
        FACT_NAME: '一部精密组件无价值工厂',
        WERKS: '201N'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '2031',
        FACT_NAME: '四部TP工厂',
        WERKS: '2031'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '2032',
        FACT_NAME: '四部无价值工厂',
        WERKS: '2032'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '2033',
        FACT_NAME: '四部新产品工厂',
        WERKS: '2033'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '3000',
        FACT_NAME: '消费电池深圳锂电SZB工厂',
        WERKS: '3000'
      },
      {
        FACT_ADDR: '宝龙比亚迪内：正大门直行100米的右边 葵涌：A-6#厂房',
        FACT_NO: '3001',
        FACT_NAME: '深圳锂电总公司工厂',
        WERKS: '3001'
      },
      {
        FACT_ADDR: '宝龙比亚迪内：正大门直行100米',
        FACT_NO: '3002',
        FACT_NAME: '锂电池总公司工厂',
        WERKS: '3002'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '3003',
        FACT_NAME: '七部包装材料(吸塑)工厂',
        WERKS: '3003'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '3004',
        FACT_NAME: '弗迪精工比亚迪锂电新材料产品部',
        WERKS: '3004'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '3005',
        FACT_NAME: '二部深圳锂电M&E工厂',
        WERKS: '3005'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '3006',
        FACT_NAME: '二部深圳锂电NPS工厂',
        WERKS: '3006'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '3007',
        FACT_NAME: '二部深圳锂电无价值工厂',
        WERKS: '3007'
      },
      {
        FACT_ADDR: '深圳市',
        FACT_NO: '3008',
        FACT_NAME: '二部深圳PVS工厂',
        WERKS: '3008'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
        FACT_NO: '300N',
        FACT_NAME: '七部无价值工厂',
        WERKS: '300N'
      },
      {
        FACT_ADDR: '1号 龙岗区宝龙工业城宝坪路',
        FACT_NO: '3021',
        FACT_NAME: '二部精密模具工厂',
        WERKS: '3021'
      },
      {
        FACT_ADDR: '深圳市龙岗区龙岗街道宝龙工业城宝荷路3001号',
        FACT_NO: '30L0',
        FACT_NAME: '二部深圳锂电CPF工厂',
        WERKS: '30L0'
      },
      {
        FACT_ADDR: '深圳市龙岗区龙岗街道宝龙工业城宝荷路3001号',
        FACT_NO: '30L1',
        FACT_NAME: '二部深圳锂电M&E工厂',
        WERKS: '30L1'
      },
      {
        FACT_ADDR: '深圳市龙岗区龙岗街道宝龙工业城宝荷路3001号',
        FACT_NO: '30L2',
        FACT_NAME: '二部深圳锂电ASC工厂',
        WERKS: '30L2'
      },
      {
        FACT_ADDR: '深圳市龙岗区龙岗街道宝龙工业城宝荷路3001号',
        FACT_NO: '30L3',
        FACT_NAME: '二部深圳锂电CQB工厂',
        WERKS: '30L3'
      },
      {
        FACT_ADDR: '深圳市龙岗区龙岗街道宝龙工业城宝荷路3001号',
        FACT_NO: '30L4',
        FACT_NAME: '二部深圳锂电BMS工厂',
        WERKS: '30L4'
      },
      {
        FACT_ADDR: '深圳市龙岗区龙岗街道宝龙工业城宝荷路3001号',
        FACT_NO: '30L5',
        FACT_NAME: '二部深圳锂电QHB工厂',
        WERKS: '30L5'
      },
      {
        FACT_ADDR: '深圳市龙岗区龙岗街道宝龙工业城宝荷路3001号',
        FACT_NO: '30L6',
        FACT_NAME: '二部深圳锂电SHD上海研发中心',
        WERKS: '30L6'
      },
      {
        FACT_ADDR: '深圳市龙岗区龙岗街道宝龙工业城宝荷路3001号',
        FACT_NO: '30L7',
        FACT_NAME: '二部深圳锂电SZD深圳研发中心',
        WERKS: '30L7'
      },
      {
        FACT_ADDR: '深圳市龙岗区宝坪路1号',
        FACT_NO: '30X0',
        FACT_NAME: '储能及新型电池深圳锂电NPS工厂',
        WERKS: '30X0'
      },
      {
        FACT_ADDR: '深圳市坪山新区坑梓街道秀沙路5号',
        FACT_NO: '30X1',
        FACT_NAME: '储能及新型电池深圳锂电SVB工厂',
        WERKS: '30X1'
      },
      {
        FACT_ADDR: '1号 深圳市龙岗区宝龙工业城宝坪路',
        FACT_NO: '3300',
        FACT_NAME: '三部空调无价值工厂(停用）',
        WERKS: '3300'
      },
      {
        FACT_ADDR: '1号 深圳市龙岗区宝龙工业城宝坪路',
        FACT_NO: '3301',
        FACT_NAME: '一部金属厂CNC',
        WERKS: '3301'
      },
      {
        FACT_ADDR: '1号 深圳市龙岗区宝龙工业城宝坪路',
        FACT_NO: '3302',
        FACT_NAME: '一部FPC工厂',
        WERKS: '3302'
      },
      {
        FACT_ADDR: '1号 深圳市龙岗区宝龙工业城宝坪路',
        FACT_NO: '3309',
        FACT_NAME: '三部空调公共工厂（停用）',
        WERKS: '3309'
      },
      {
        FACT_ADDR: '龙岗区葵涌镇延安路',
        FACT_NO: '4000',
        FACT_NAME: '总公司工厂',
        WERKS: '4000'
      },
      {
        FACT_ADDR: '深圳市大鹏新区葵涌街道葵涌社区延安路1号比亚迪A-4#厂房3',
        FACT_NO: '4010',
        FACT_NAME: '模具与装备深圳电子装备工厂',
        WERKS: '4010'
      },
      {
        FACT_ADDR: '深圳市大鹏新区葵涌街道葵涌社区延安路1号深圳市大鹏新区葵涌街',
        FACT_NO: '401N',
        FACT_NAME: '模具与装备葵涌无价值工厂',
        WERKS: '401N'
      },
      {
        FACT_ADDR: '深圳市大鹏新区葵涌街道葵涌社区延安路1号比亚迪A-4#厂房3',
        FACT_NO: '4030',
        FACT_NAME: '一部深圳电子塑胶工厂',
        WERKS: '4030'
      },
      {
        FACT_ADDR: '深圳市大鹏新区葵涌街道葵涌社区延安路1号比亚迪A-4#厂房3',
        FACT_NO: '403N',
        FACT_NAME: '一部深圳塑胶无价值工厂',
        WERKS: '403N'
      },
      {
        FACT_ADDR: '深圳市坪山区马峦街道沙坣社区比亚迪路3009号D-6厂房10',
        FACT_NO: '4090',
        FACT_NAME: '九部深圳比亚迪电子一厂组装',
        WERKS: '4090'
      },
      {
        FACT_ADDR: '深圳市坪山区马峦街道沙坣社区比亚迪路3009号D-6厂房10',
        FACT_NO: '4091',
        FACT_NAME: '九部深圳比亚迪电子大疆贴片',
        WERKS: '4091'
      },
      {
        FACT_ADDR: '深圳市坪山区马峦街道沙坣社区比亚迪路3009号D-6厂房10',
        FACT_NO: '4092',
        FACT_NAME: '九部深圳比亚迪电子非大疆贴片',
        WERKS: '4092'
      },
      {
        FACT_ADDR: '深圳市坪山区马峦街道沙坣社区比亚迪路3009号D-6厂房10',
        FACT_NO: '409N',
        FACT_NAME: '九部深圳比亚迪电子一厂无价值工厂',
        WERKS: '409N'
      },
      {
        FACT_ADDR: '深圳市龙岗区坪山横坪公路3005号比亚迪工业园',
        FACT_NO: '5000',
        FACT_NAME: '汽车销售总公司工厂',
        WERKS: '5000'
      },
      {
        FACT_ADDR: '深圳市龙岗区坪山横坪公路3005号',
        FACT_NO: '5001',
        FACT_NAME: '汽车销售部工厂',
        WERKS: '5001'
      },
      {
        FACT_ADDR: '深圳市坪山新区比亚迪路3009号比',
        FACT_NO: '5002',
        FACT_NAME: '出口贸易部工厂',
        WERKS: '5002'
      },
      {
        FACT_ADDR: '深圳市坪山新区比亚迪路3009号',
        FACT_NO: '5003',
        FACT_NAME: '汽车销售北美汽车销售工厂',
        WERKS: '5003'
      },
      {
        FACT_ADDR: '深圳市坪山新区3009号比亚迪23号',
        FACT_NO: '5004',
        FACT_NAME: '绿色公交发展事业部',
        WERKS: '5004'
      },
      {
        FACT_ADDR: '93534 43851 Division street, L',
        FACT_NO: '5040',
        FACT_NAME: 'US NEW ENERGY FACTORY OF AASD',
        WERKS: '5040'
      },
      {
        FACT_ADDR: '上海市松江区车墩镇香泾路999号',
        FACT_NO: '5120',
        FACT_NAME: '太阳能上海比亚迪上海工厂',
        WERKS: '5120'
      },
      {
        FACT_ADDR: '上海市松江区车墩镇香泾路999号',
        FACT_NO: '512N',
        FACT_NAME: '太阳能上海无价值工厂',
        WERKS: '512N'
      },
      {
        FACT_ADDR: '太原经济技术开发区龙盛街1号107室',
        FACT_NO: '5170',
        FACT_NAME: '太原电动汽车服务工厂',
        WERKS: '5170'
      },
      {
        FACT_ADDR: '深圳龙岗区葵涌镇葵兴西路亚迪村',
        FACT_NO: '5210',
        FACT_NAME: '广安汽销总公司工厂',
        WERKS: '5210'
      },
      {
        FACT_ADDR: '天津市武清区汽车零部件产业园天福2路',
        FACT_NO: '5230',
        FACT_NAME: '商用车天津汽车工厂',
        WERKS: '5230'
      },
      {
        FACT_ADDR: '天津市武清区汽车零部件产业园天福路2号',
        FACT_NO: '523N',
        FACT_NAME: '商用车天津汽车无价值工厂',
        WERKS: '523N'
      },
      {
        FACT_ADDR: '911号 武汉市黄陂区前川街五里村双凤大道',
        FACT_NO: '5250',
        FACT_NAME: '武汉绿动公共工厂',
        WERKS: '5250'
      },
      {
        FACT_ADDR: '53号2幢 浙江省杭州市余杭区乔司街道汀兰街',
        FACT_NO: '5316',
        FACT_NAME: '美好出行（杭州）汽车科技有限公司',
        WERKS: '5316'
      },
      {
        FACT_ADDR: '广东省深圳市前海深港合作区前海一路1号A栋201室',
        FACT_NO: '5500',
        FACT_NAME: '深圳比亚迪电动汽车投资有限公司公共工厂',
        WERKS: '5500'
      },
      {
        FACT_ADDR: '深圳市龙岗区龙平西路129号龙岗汽车总站4楼',
        FACT_NO: '5501',
        FACT_NAME: '深圳迪程新能源有限公司公共工厂',
        WERKS: '5501'
      },
      {
        FACT_ADDR: '',
        FACT_NO: '5502',
        FACT_NAME: '韶关比亚迪新能源有限公司公共工厂',
        WERKS: '5502'
      },
      {
        FACT_ADDR: '成都市郫都区成都现代工业港北片区成灌西段1098号',
        FACT_NO: '5503',
        FACT_NAME: '成都蜀都比亚迪-商用车',
        WERKS: '5503'
      },
      {
        FACT_ADDR: '韶关市浈江区工业园比亚迪大道1号综合楼二层',
        FACT_NO: '5510',
        FACT_NAME: '比亚迪汽车销售十八部工厂',
        WERKS: '5510'
      },
      {
        FACT_ADDR: '深圳市坪山新区坪山街道比亚迪路3009号',
        FACT_NO: '5511',
        FACT_NAME: '比亚迪汽车销售（品牌公关）',
        WERKS: '5511'
      },
      {
        FACT_ADDR: '广东省深圳市坪山新区坪山横坪公路3001、3007号',
        FACT_NO: '5560',
        FACT_NAME: '充电设施运管部(深圳)公共工厂',
        WERKS: '5560'
      },
      {
        FACT_ADDR: '惠州市大亚湾响水河',
        FACT_NO: '5561',
        FACT_NAME: '充电设施运管部(惠州)公共工厂',
        WERKS: '5561'
      },
      {
        FACT_ADDR: '韶关市浈江区工业园比亚迪大道1号办公楼',
        FACT_NO: '5562',
        FACT_NAME: '充电设施运管部(韶关)公共工厂',
        WERKS: '5562'
      },
      {
        FACT_ADDR: '深圳市坪山新区坪山街道比亚迪路3009号六角A区',
        FACT_NO: '5700',
        FACT_NAME: '深圳睿启信息有限公司',
        WERKS: '5700'
      },
      {
        FACT_ADDR: '深圳市坪山新区坪山街道比亚迪路3009号六角A区',
        FACT_NO: '5701',
        FACT_NAME: '广州汽车销售总公司工厂',
        WERKS: '5701'
      },
      {
        FACT_ADDR: '深圳市坪山新区坪山街道比亚迪路3005号',
        FACT_NO: '5703',
        FACT_NAME: '比亚迪汽车销售有限公司-对公汽车销售',
        WERKS: '5703'
      },
      {
        FACT_ADDR: '深圳市坪山新区坪山横坪公路3001、3007号',
        FACT_NO: '5705',
        FACT_NAME: '对公销售深圳售后工厂',
        WERKS: '5705'
      },
      {
        FACT_ADDR: '西安市高新区草堂科技产业园基地秦岭大道西1号',
        FACT_NO: '5706',
        FACT_NAME: '对公销售西安售后工厂',
        WERKS: '5706'
      },
      {
        FACT_ADDR: '湖南省长沙市雨花区环保东路88号',
        FACT_NO: '5707',
        FACT_NAME: '对公销售长沙售后工厂',
        WERKS: '5707'
      },
      {
        FACT_ADDR: '陕西省西安市高新区新型王业园亚迪路2号',
        FACT_NO: '5710',
        FACT_NAME: '西安比亚迪汽车销售有限公司',
        WERKS: '5710'
      },
      {
        FACT_ADDR: '江西省宜春市宜丰县同安乡人民街',
        FACT_NO: '5910',
        FACT_NAME: '宜春矿业总公司工厂',
        WERKS: '5910'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '6000',
        FACT_NAME: '半导体股份总公司工厂',
        WERKS: '6000'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '6001',
        FACT_NAME: '六部比亚迪半导体电源IC',
        WERKS: '6001'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '6002',
        FACT_NAME: '六部比亚迪半导体IGBT工厂',
        WERKS: '6002'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '6003',
        FACT_NAME: '六部比亚迪半导体传感器工厂',
        WERKS: '6003'
      },
      {
        FACT_ADDR: '深圳市龙岗区坪山横坪公路3001号',
        FACT_NO: '6004',
        FACT_NAME: 'LED项目部工厂(停用)',
        WERKS: '6004'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌延安路1号',
        FACT_NO: '6005',
        FACT_NAME: '六部比亚迪半导体嵌入式工厂',
        WERKS: '6005'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌延安路1号',
        FACT_NO: '6006',
        FACT_NAME: '六部比亚迪半导体CIS工厂',
        WERKS: '6006'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '600A',
        FACT_NAME: '六部比亚迪半导体封测工厂',
        WERKS: '600A'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '600B',
        FACT_NAME: '六部比亚迪半导体IPM工厂',
        WERKS: '600B'
      },
      {
        FACT_ADDR: '深圳市葵涌镇比亚迪延安路',
        FACT_NO: '600C',
        FACT_NAME: '潮州绿动总公司工厂',
        WERKS: '600C'
      },
      {
        FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
        FACT_NO: '600N',
        FACT_NAME: '六部比亚迪半导体无价值工厂',
        WERKS: '600N'
      },
      {
        FACT_ADDR: '深圳市龙岗区坪山横坪公路3001、3007号',
        FACT_NO: '6010',
        FACT_NAME: '新材料比亚迪汽车工业公共工厂',
        WERKS: '6010'
      }
    ]
  },
  P_PROJECT_DEFINE: {
    list: [
      {
        FACT_NO: 'A962',
        PROJECT_NO: '001',
        PROJECT_NAME: '甲公司',
        ROW_ID: 1
      },
      {
        FACT_NO: 'A200',
        PROJECT_NO: '001',
        PROJECT_NAME: '甲公司',
        ROW_ID: 2
      },
      {
        FACT_NO: '1000',
        PROJECT_NO: '1',
        PROJECT_DESC: '1',
        PROJECT_NAME: '1',
        ROW_ID: 3
      },
      {
        FACT_NO: 'A200',
        PROJECT_NO: '1',
        PROJECT_NAME: '测试项目',
        ROW_ID: 4
      },
      {
        FACT_NO: 'C157',
        PROJECT_NO: '1',
        PROJECT_NAME: '测试项目',
        ROW_ID: 5
      },
      {
        FACT_NO: 'A153',
        PROJECT_NO: '1',
        PROJECT_NAME: '测试项目',
        ROW_ID: 6
      },
      {
        FACT_NO: 'A962',
        PROJECT_NO: '1',
        PROJECT_NAME: '测试项目',
        ROW_ID: 7
      },
      {
        FACT_NO: 'A151',
        PROJECT_NO: '1',
        ROW_ID: 8
      },
      {
        FACT_NO: '3008',
        PROJECT_NO: '1',
        PROJECT_DESC: '1',
        PROJECT_NAME: '1',
        ROW_ID: 9
      },
      {
        FACT_NO: '2001',
        PROJECT_NO: '1',
        PROJECT_DESC: '1',
        PROJECT_NAME: '1',
        ROW_ID: 10
      },
      {
        FACT_NO: '3001',
        PROJECT_NO: '11',
        PROJECT_DESC: '1',
        PROJECT_NAME: '1',
        ROW_ID: 11
      },
      {
        FACT_NO: '1001',
        PROJECT_NO: '11',
        PROJECT_DESC: '11',
        PROJECT_NAME: '11',
        ROW_ID: 12
      },
      {
        FACT_NO: '6001',
        PROJECT_NO: '113344',
        PROJECT_NAME: '哈哈哈哈哈',
        ROW_ID: 13
      },
      {
        FACT_NO: 'A157',
        PROJECT_NO: '113344',
        PROJECT_NAME: '哈哈哈哈哈',
        ROW_ID: 14
      },
      {
        FACT_NO: 'X200',
        PROJECT_NO: '120',
        PROJECT_DESC: '西安总装120项目007',
        PROJECT_NAME: '西安总装120项目',
        ROW_ID: 15
      },
      {
        FACT_NO: 'C157',
        PROJECT_NO: '123',
        PROJECT_NAME: '小米',
        ROW_ID: 16
      },
      {
        FACT_NO: 'A200',
        PROJECT_NO: '123',
        PROJECT_NAME: '小米',
        ROW_ID: 17
      },
      {
        FACT_NO: 'HF14',
        PROJECT_NO: '123',
        PROJECT_NAME: '小米',
        ROW_ID: 18
      },
      {
        FACT_NO: 'H162',
        PROJECT_NO: '1233',
        PROJECT_NAME: '巴啦啦',
        ROW_ID: 19
      },
      {
        FACT_NO: 'A962',
        PROJECT_NO: '1234',
        ROW_ID: 20
      },
      {
        FACT_NO: 'HF14',
        PROJECT_NO: '1234',
        PROJECT_NAME: 'ggg',
        ROW_ID: 21
      },
      {
        FACT_NO: 'A962',
        PROJECT_NO: '12345',
        PROJECT_NAME: '佳佳测试',
        ROW_ID: 22
      },
      {
        FACT_NO: 'HF14',
        PROJECT_NO: '12345',
        PROJECT_NAME: '佳佳测试',
        ROW_ID: 23
      },
      {
        FACT_NO: 'A962',
        PROJECT_NO: '123456',
        PROJECT_NAME: '交货地青海',
        ROW_ID: 24
      },
      {
        FACT_NO: 'A962',
        PROJECT_NO: '1234561',
        PROJECT_NAME: '交货地蚌埠',
        ROW_ID: 25
      },
      {
        FACT_NO: '3008',
        PROJECT_NO: '123a',
        PROJECT_DESC: '132232300',
        PROJECT_NAME: '1232332',
        ROW_ID: 26
      },
      {
        FACT_NO: 'A157',
        PROJECT_NO: '12ww',
        PROJECT_NAME: '美乐',
        ROW_ID: 27
      },
      {
        FACT_NO: 'A201',
        PROJECT_NO: '13213',
        ROW_ID: 28
      },
      {
        FACT_NO: 'C157',
        PROJECT_NO: '146559',
        PROJECT_NAME: 'APPLE',
        ROW_ID: 29
      },
      {
        FACT_NO: 'XAL1',
        PROJECT_NO: '146559',
        PROJECT_NAME: 'APPLE',
        ROW_ID: 30
      },
      {
        FACT_NO: 'C153',
        PROJECT_NO: '21524',
        PROJECT_NAME: '华为',
        ROW_ID: 31
      },
      {
        FACT_NO: '6005',
        PROJECT_NO: '21584',
        PROJECT_NAME: '21584',
        ROW_ID: 32
      },
      {
        FACT_NO: '1000',
        PROJECT_NO: '2334',
        PROJECT_DESC: '23232323',
        PROJECT_NAME: '232323',
        ROW_ID: 33
      },
      {
        FACT_NO: '600A',
        PROJECT_NO: '456',
        PROJECT_NAME: '大华',
        ROW_ID: 34
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: '471ZQA',
        PROJECT_NAME: '471ZQA',
        ROW_ID: 35
      },
      {
        FACT_NO: 'X153',
        PROJECT_NO: '5A',
        PROJECT_NAME: '5A',
        ROW_ID: 36
      },
      {
        FACT_NO: '6002',
        PROJECT_NO: '6002-P1',
        PROJECT_DESC: '6002项目名称',
        PROJECT_NAME: '6002项目',
        ROW_ID: 37
      },
      {
        FACT_NO: '6003',
        PROJECT_NO: '6003-HW',
        PROJECT_DESC: '6003项目描述',
        PROJECT_NAME: '6003项目',
        ROW_ID: 38
      },
      {
        FACT_NO: '6003',
        PROJECT_NO: '6003T',
        PROJECT_DESC: '6003TEXT3',
        PROJECT_NAME: '6003TEXT',
        ROW_ID: 39
      },
      {
        FACT_NO: '6002',
        PROJECT_NO: '6006',
        PROJECT_NAME: 'LIDAN',
        ROW_ID: 40
      },
      {
        FACT_NO: 'A165',
        PROJECT_NO: '6006',
        PROJECT_NAME: 'LIDAN',
        ROW_ID: 41
      },
      {
        FACT_NO: 'A155',
        PROJECT_NO: '6006',
        PROJECT_NAME: 'LIDAN',
        ROW_ID: 42
      },
      {
        FACT_NO: 'C145',
        PROJECT_NO: '6006',
        PROJECT_NAME: 'LIDAN',
        ROW_ID: 43
      },
      {
        FACT_NO: 'TYG1',
        PROJECT_NO: '6006',
        PROJECT_NAME: 'LIDAN',
        ROW_ID: 44
      },
      {
        FACT_NO: 'SWJ0',
        PROJECT_NO: '6006',
        PROJECT_NAME: 'LIDAN',
        ROW_ID: 45
      },
      {
        FACT_NO: '6001',
        PROJECT_NO: '6HDT45',
        PROJECT_NAME: '6HDT45',
        ROW_ID: 46
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: '8PK1154',
        PROJECT_NAME: '8PK1154',
        ROW_ID: 47
      },
      {
        FACT_NO: 'C141',
        PROJECT_NO: 'ABC',
        PROJECT_NAME: 'AAAABBBB电池',
        ROW_ID: 48
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'ADN17001',
        PROJECT_NAME: 'ADN17001',
        ROW_ID: 49
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'AKU22001',
        PROJECT_DESC: '片式电阻、电容',
        PROJECT_NAME: 'AKU主板集成项目',
        ROW_ID: 50
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'AKU22002',
        PROJECT_DESC: 'GTX显卡',
        PROJECT_NAME: 'AKU显卡项目',
        ROW_ID: 51
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'AKU22003',
        PROJECT_DESC: 'AMD处理器',
        PROJECT_NAME: 'CPU项目',
        ROW_ID: 52
      },
      {
        FACT_NO: 'H092',
        PROJECT_NO: 'AKU22003',
        PROJECT_DESC: 'AMD处理器',
        PROJECT_NAME: 'CPU项目',
        ROW_ID: 53
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'AKU22004',
        PROJECT_DESC: 'HIFI声卡',
        PROJECT_NAME: 'AKU声卡项目',
        ROW_ID: 54
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'AKU22005',
        PROJECT_DESC: '英伟达GPU',
        PROJECT_NAME: 'GPU项目',
        ROW_ID: 55
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'AKU22006',
        PROJECT_DESC: '英伟达GPU01',
        PROJECT_NAME: 'GPU项目01',
        ROW_ID: 56
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'AKU22007',
        PROJECT_DESC: '英伟达GPU02',
        PROJECT_NAME: 'GPU项目02',
        ROW_ID: 57
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'AKU22008',
        PROJECT_DESC: '英伟达GPU03',
        PROJECT_NAME: 'GPU项目03',
        ROW_ID: 58
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'AKU22009',
        PROJECT_DESC: '英伟达GPU04',
        PROJECT_NAME: 'GPU项目04',
        ROW_ID: 59
      },
      {
        FACT_NO: 'X157',
        PROJECT_NO: 'BYD',
        PROJECT_NAME: '比亚迪乘用车',
        ROW_ID: 60
      },
      {
        FACT_NO: 'X155',
        PROJECT_NO: 'BYD',
        PROJECT_NAME: '比亚迪乘用车',
        ROW_ID: 61
      },
      {
        FACT_NO: 'C157',
        PROJECT_NO: 'BYD',
        PROJECT_NAME: '比亚迪乘用车',
        ROW_ID: 62
      },
      {
        FACT_NO: 'X153',
        PROJECT_NO: 'BYD',
        PROJECT_NAME: '比亚迪乘用车',
        ROW_ID: 63
      },
      {
        FACT_NO: 'C153',
        PROJECT_NO: 'BYD',
        PROJECT_NAME: '比亚迪乘用车',
        ROW_ID: 64
      },
      {
        FACT_NO: 'FZF2',
        PROJECT_NO: 'BYD-2022',
        PROJECT_NAME: 'BYD-2022',
        ROW_ID: 65
      },
      {
        FACT_NO: '6005',
        PROJECT_NO: 'BYD11',
        PROJECT_NAME: 'BYD11',
        ROW_ID: 66
      },
      {
        FACT_NO: 'C155',
        PROJECT_NO: 'BYD11-PZ01',
        PROJECT_NAME: 'BYD运动型',
        ROW_ID: 67
      },
      {
        FACT_NO: 'X155',
        PROJECT_NO: 'BYD11-PZ01',
        PROJECT_NAME: 'BYD运动型',
        ROW_ID: 68
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'BYD11-PZ01',
        PROJECT_NAME: 'BYD运动型',
        ROW_ID: 69
      },
      {
        FACT_NO: 'X153',
        PROJECT_NO: 'BYD11-PZ01',
        PROJECT_NAME: 'BYD运动型',
        ROW_ID: 70
      },
      {
        FACT_NO: '600A',
        PROJECT_NO: 'BYD11-PZ01',
        PROJECT_NAME: 'BYD运动型',
        ROW_ID: 71
      },
      {
        FACT_NO: 'C155',
        PROJECT_NO: 'BYD11-PZ02',
        PROJECT_NAME: 'BYD旗舰型',
        ROW_ID: 72
      },
      {
        FACT_NO: 'C153',
        PROJECT_NO: 'BYD11-PZ02',
        PROJECT_NAME: 'BYD旗舰型',
        ROW_ID: 73
      },
      {
        FACT_NO: 'X155',
        PROJECT_NO: 'BYD11-PZ02',
        PROJECT_NAME: 'BYD旗舰型',
        ROW_ID: 74
      },
      {
        FACT_NO: 'X153',
        PROJECT_NO: 'BYD11-PZ02',
        PROJECT_NAME: 'BYD旗舰型',
        ROW_ID: 75
      },
      {
        FACT_NO: 'C145',
        PROJECT_NO: 'BYD22',
        PROJECT_NAME: 'BYD22',
        ROW_ID: 76
      },
      {
        FACT_NO: 'C157',
        PROJECT_NO: 'DHC',
        PROJECT_NAME: 'DHC',
        ROW_ID: 77
      },
      {
        FACT_NO: 'A155',
        PROJECT_NO: 'NV AUDI',
        ROW_ID: 78
      },
      {
        FACT_NO: 'A2001',
        PROJECT_NO: 'NV AUDI',
        ROW_ID: 79
      },
      {
        FACT_NO: 'A155',
        PROJECT_NO: 'NV ORIN',
        ROW_ID: 80
      },
      {
        FACT_NO: 'A157',
        PROJECT_NO: 'NV ORIN',
        ROW_ID: 81
      },
      {
        FACT_NO: 'A2001',
        PROJECT_NO: 'NV ORIN',
        ROW_ID: 82
      },
      {
        FACT_NO: 'A155',
        PROJECT_NO: 'NV P1852',
        PROJECT_DESC: '七彩虹项目的描述',
        PROJECT_NAME: '七彩虹项目的名称',
        ROW_ID: 83
      },
      {
        FACT_NO: 'A201',
        PROJECT_NO: 'NV P1852',
        PROJECT_DESC: '七彩虹项目的描述',
        PROJECT_NAME: '七彩虹项目的名称',
        ROW_ID: 84
      },
      {
        FACT_NO: 'A2001',
        PROJECT_NO: 'NV 显卡',
        ROW_ID: 85
      },
      {
        FACT_NO: 'A157',
        PROJECT_NO: 'NV 显卡',
        ROW_ID: 86
      },
      {
        FACT_NO: 'A155',
        PROJECT_NO: 'NV 显卡',
        ROW_ID: 87
      },
      {
        FACT_NO: 'C141',
        PROJECT_NO: 'NV2022',
        PROJECT_DESC: 'NV2022显卡',
        PROJECT_NAME: 'NV2022显卡',
        ROW_ID: 88
      },
      {
        FACT_NO: 'A155',
        PROJECT_NO: 'NVJETSON',
        ROW_ID: 89
      },
      {
        FACT_NO: 'A157',
        PROJECT_NO: 'NVJETSON',
        ROW_ID: 90
      },
      {
        FACT_NO: 'A2001',
        PROJECT_NO: 'NVJETSON',
        ROW_ID: 91
      },
      {
        FACT_NO: 'A155',
        PROJECT_NO: 'NV共用料',
        ROW_ID: 92
      },
      {
        FACT_NO: 'A157',
        PROJECT_NO: 'NV共用料',
        ROW_ID: 93
      },
      {
        FACT_NO: '6001',
        PROJECT_NO: 'NV共用料',
        ROW_ID: 94
      },
      {
        FACT_NO: 'A2001',
        PROJECT_NO: 'NV共用料',
        ROW_ID: 95
      },
      {
        FACT_NO: 'H093',
        PROJECT_NO: 'SC2EM-01',
        PROJECT_DESC: 'SC2EM-01豪华型',
        PROJECT_NAME: 'SC2EM-豪华型',
        ROW_ID: 96
      },
      {
        FACT_NO: 'KZ23',
        PROJECT_NO: 'STF-2019',
        PROJECT_NAME: 'STF(燃油)-2019',
        ROW_ID: 97
      },
      {
        FACT_NO: 'KZ23',
        PROJECT_NO: 'STFB1-PZ02',
        PROJECT_NAME: 'STFB1-旗舰型',
        ROW_ID: 98
      },
      {
        FACT_NO: 'C152',
        PROJECT_NO: 'VBYDGH80',
        PROJECT_NAME: 'GUIHUAYUAN',
        ROW_ID: 99
      },
      {
        FACT_NO: 'A060',
        PROJECT_NO: 'VBYDGH80',
        PROJECT_NAME: 'GUIHUAYUAN',
        ROW_ID: 100
      }
    ]
  },
  P_FACTMAT_MC_USER: {
    list: [
      {
        FACT_NO: '1000',
        USER_NO: '1951055',
        USER_NAME: '李丹',
        ROW_ID: 1
      },
      {
        FACT_NO: '1000',
        USER_NO: '5305847',
        USER_NAME: '白新龙',
        ROW_ID: 2
      },
      {
        FACT_NO: '1000',
        USER_NO: '9757',
        USER_NAME: '杨大雄',
        ROW_ID: 3
      },
      {
        FACT_NO: '5230',
        USER_NO: '278603',
        USER_NAME: '谭宏菊',
        ROW_ID: 4
      },
      {
        FACT_NO: '6001',
        USER_NO: '278603',
        USER_NAME: '谭宏菊',
        ROW_ID: 5
      },
      {
        FACT_NO: '6001',
        USER_NO: '412125',
        USER_NAME: '郭英乐',
        ROW_ID: 6
      },
      {
        FACT_NO: '6001',
        USER_NO: '4290697',
        USER_NAME: '叶慧莉',
        ROW_ID: 7
      },
      {
        FACT_NO: '6001',
        USER_NO: '5158472',
        USER_NAME: '豆涛',
        ROW_ID: 8
      },
      {
        FACT_NO: '6001',
        USER_NO: '5341169',
        USER_NAME: '林圣桢',
        ROW_ID: 9
      },
      {
        FACT_NO: '6001',
        USER_NO: '5566520',
        USER_NAME: '范华娟',
        ROW_ID: 10
      },
      {
        FACT_NO: '6001',
        USER_NO: '5725910',
        USER_NAME: '雷晓平',
        ROW_ID: 11
      },
      {
        FACT_NO: '6001',
        USER_NO: '8310',
        USER_NAME: '梁椿',
        ROW_ID: 12
      },
      {
        FACT_NO: '6001',
        USER_NO: '9757',
        USER_NAME: '杨大雄',
        ROW_ID: 13
      },
      {
        FACT_NO: '6001',
        USER_NO: 'ZHANGSAN',
        USER_NAME: '张三',
        ROW_ID: 14
      },
      {
        FACT_NO: '6002',
        USER_NO: '2617629',
        USER_NAME: '周蕙',
        ROW_ID: 15
      },
      {
        FACT_NO: '6002',
        USER_NO: '362993',
        USER_NAME: '姚丽',
        ROW_ID: 16
      },
      {
        FACT_NO: '6002',
        USER_NO: '4290697',
        USER_NAME: '叶慧莉',
        ROW_ID: 17
      },
      {
        FACT_NO: '6002',
        USER_NO: '4290697',
        ROW_ID: 18
      },
      {
        FACT_NO: '6003',
        USER_NO: '1211499',
        USER_NAME: '王欣',
        ROW_ID: 19
      },
      {
        FACT_NO: '6003',
        USER_NO: '2617629',
        USER_NAME: '周蕙',
        ROW_ID: 20
      },
      {
        FACT_NO: '6003',
        USER_NO: '412125',
        USER_NAME: '郭英乐',
        ROW_ID: 21
      },
      {
        FACT_NO: '6003',
        USER_NO: '5881692',
        USER_NAME: '张梦娟',
        ROW_ID: 22
      },
      {
        FACT_NO: '6003',
        USER_NO: '8310',
        USER_NAME: '梁椿',
        ROW_ID: 23
      },
      {
        FACT_NO: '6003',
        USER_NO: '9757',
        USER_NAME: '杨大雄',
        ROW_ID: 24
      },
      {
        FACT_NO: '6005',
        USER_NO: '278603',
        USER_NAME: '谭宏菊',
        ROW_ID: 25
      },
      {
        FACT_NO: '6006',
        USER_NO: '9757',
        USER_NAME: '杨大雄',
        ROW_ID: 26
      },
      {
        FACT_NO: '600A',
        USER_NO: '1103040',
        USER_NAME: '邱慧慧',
        ROW_ID: 27
      },
      {
        FACT_NO: '600A',
        USER_NO: '4290697',
        USER_NAME: '叶慧莉',
        ROW_ID: 28
      },
      {
        FACT_NO: '600A',
        USER_NO: '8310',
        USER_NAME: '梁椿',
        ROW_ID: 29
      },
      {
        FACT_NO: '6241',
        USER_NO: '5734349',
        USER_NAME: '赖先凤',
        ROW_ID: 30
      },
      {
        FACT_NO: '62G1',
        USER_NO: '5875839',
        USER_NAME: '张丹江',
        ROW_ID: 31
      },
      {
        FACT_NO: '7011',
        USER_NO: '283581',
        USER_NAME: '付红娟',
        ROW_ID: 32
      },
      {
        FACT_NO: '7011',
        USER_NO: '5341169',
        USER_NAME: '林圣桢',
        ROW_ID: 33
      },
      {
        FACT_NO: '7071',
        USER_NO: '4837953',
        USER_NAME: '冯蕾',
        ROW_ID: 34
      },
      {
        FACT_NO: 'A060',
        USER_NO: '2300931',
        USER_NAME: '李晓华',
        ROW_ID: 35
      },
      {
        FACT_NO: 'A100',
        USER_NO: '1198506',
        USER_NAME: '杨姗',
        ROW_ID: 36
      },
      {
        FACT_NO: 'A111',
        USER_NO: '1137630',
        USER_NAME: '徐丽珍',
        ROW_ID: 37
      },
      {
        FACT_NO: 'A112',
        USER_NO: '3050868',
        USER_NAME: '李秋诗',
        ROW_ID: 38
      },
      {
        FACT_NO: 'A113',
        USER_NO: '6321591',
        USER_NAME: '覃一真',
        ROW_ID: 39
      },
      {
        FACT_NO: 'A116',
        USER_NO: '3050868',
        USER_NAME: '李秋诗',
        ROW_ID: 40
      },
      {
        FACT_NO: 'A131',
        USER_NO: '1071900',
        USER_NAME: '康建华',
        ROW_ID: 41
      },
      {
        FACT_NO: 'A131',
        USER_NO: '2618938',
        USER_NAME: '高莉姣',
        ROW_ID: 42
      },
      {
        FACT_NO: 'A131',
        USER_NO: '4971333',
        USER_NAME: '周意珍',
        ROW_ID: 43
      },
      {
        FACT_NO: 'A131',
        USER_NO: '4982464',
        USER_NAME: '张奕满',
        ROW_ID: 44
      },
      {
        FACT_NO: 'A151',
        USER_NO: '359854',
        USER_NAME: '相园园',
        ROW_ID: 45
      },
      {
        FACT_NO: 'A151',
        USER_NO: '362993',
        USER_NAME: '姚丽',
        ROW_ID: 46
      },
      {
        FACT_NO: 'A151',
        USER_NO: '72302',
        USER_NAME: '陈益明',
        ROW_ID: 47
      },
      {
        FACT_NO: 'A151',
        USER_NO: 'DENGCHUNHUI',
        USER_NAME: '邓春晖',
        ROW_ID: 48
      },
      {
        FACT_NO: 'A151',
        USER_NO: 'ZHANGJIANJIANG',
        USER_NAME: '张建江',
        ROW_ID: 49
      },
      {
        FACT_NO: 'A151',
        USER_NO: 'ZHENGZHIYUAN',
        USER_NAME: '郑志远',
        ROW_ID: 50
      },
      {
        FACT_NO: 'A152',
        USER_NO: '3510511',
        USER_NAME: '李晨',
        ROW_ID: 51
      },
      {
        FACT_NO: 'A152',
        USER_NO: '5083819',
        USER_NAME: '贺凯',
        ROW_ID: 52
      },
      {
        FACT_NO: 'A152',
        USER_NO: '5906525',
        USER_NAME: '孔冬青',
        ROW_ID: 53
      },
      {
        FACT_NO: 'A152',
        USER_NO: '5936028',
        USER_NAME: '王裕鑫',
        ROW_ID: 54
      },
      {
        FACT_NO: 'A152',
        USER_NO: '9757',
        USER_NAME: '杨大雄',
        ROW_ID: 55
      },
      {
        FACT_NO: 'A153',
        USER_NO: '1277803',
        USER_NAME: '朱江',
        ROW_ID: 56
      },
      {
        FACT_NO: 'A153',
        USER_NO: '3510511',
        USER_NAME: '李晨',
        ROW_ID: 57
      },
      {
        FACT_NO: 'A153',
        USER_NO: '362993',
        USER_NAME: '姚丽',
        ROW_ID: 58
      },
      {
        FACT_NO: 'A153',
        USER_NO: '4214767',
        USER_NAME: '陈幸',
        ROW_ID: 59
      },
      {
        FACT_NO: 'A153',
        USER_NO: '5341169',
        USER_NAME: '林圣桢',
        ROW_ID: 60
      },
      {
        FACT_NO: 'A153',
        USER_NO: '5853235',
        USER_NAME: '谭利有',
        ROW_ID: 61
      },
      {
        FACT_NO: 'A155',
        USER_NO: '1092602',
        USER_NAME: '冯卫',
        ROW_ID: 62
      },
      {
        FACT_NO: 'A155',
        USER_NO: '1198506',
        USER_NAME: '杨姗',
        ROW_ID: 63
      },
      {
        FACT_NO: 'A155',
        USER_NO: '121314',
        USER_NAME: '测试看板01',
        ROW_ID: 64
      },
      {
        FACT_NO: 'A155',
        USER_NO: '15305',
        USER_NAME: '王俊',
        ROW_ID: 65
      },
      {
        FACT_NO: 'A155',
        USER_NO: '1571542',
        USER_NAME: '张素佩',
        ROW_ID: 66
      },
      {
        FACT_NO: 'A155',
        USER_NO: '1951055',
        USER_NAME: '李丹',
        ROW_ID: 67
      },
      {
        FACT_NO: 'A155',
        USER_NO: '362993',
        USER_NAME: '姚丽',
        ROW_ID: 68
      },
      {
        FACT_NO: 'A155',
        USER_NO: '4290697',
        USER_NAME: '叶慧莉',
        ROW_ID: 69
      },
      {
        FACT_NO: 'A155',
        USER_NO: '4290697',
        ROW_ID: 70
      },
      {
        FACT_NO: 'A155',
        USER_NO: '4692270',
        USER_NAME: '杨明荣',
        ROW_ID: 71
      },
      {
        FACT_NO: 'A155',
        USER_NO: '5305847',
        USER_NAME: '白新龙',
        ROW_ID: 72
      },
      {
        FACT_NO: 'A155',
        USER_NO: '5711020',
        USER_NAME: 'dove',
        ROW_ID: 73
      },
      {
        FACT_NO: 'A155',
        USER_NO: '5711022',
        USER_NAME: 'dove',
        ROW_ID: 74
      },
      {
        FACT_NO: 'A155',
        USER_NO: '5725910',
        USER_NAME: '雷晓平',
        ROW_ID: 75
      },
      {
        FACT_NO: 'A155',
        USER_NO: '5900780',
        USER_NAME: '丘伟柱',
        ROW_ID: 76
      },
      {
        FACT_NO: 'A155',
        USER_NO: '8310',
        USER_NAME: '梁椿',
        ROW_ID: 77
      },
      {
        FACT_NO: 'A155',
        USER_NO: '9757',
        USER_NAME: '杨大雄',
        ROW_ID: 78
      },
      {
        FACT_NO: 'A156',
        USER_NO: '4834059',
        USER_NAME: '余金彪',
        ROW_ID: 79
      },
      {
        FACT_NO: 'A156',
        USER_NO: 'QK',
        USER_NAME: '邱库',
        ROW_ID: 80
      },
      {
        FACT_NO: 'A157',
        USER_NO: '1951055',
        USER_NAME: '李丹',
        ROW_ID: 81
      },
      {
        FACT_NO: 'A157',
        USER_NO: '362993',
        USER_NAME: '姚丽',
        ROW_ID: 82
      },
      {
        FACT_NO: 'A157',
        USER_NO: '4702927',
        USER_NAME: '黄升锦',
        ROW_ID: 83
      },
      {
        FACT_NO: 'A157',
        USER_NO: '9757',
        USER_NAME: '杨大雄',
        ROW_ID: 84
      },
      {
        FACT_NO: 'A161',
        USER_NO: 'ZHANGSAN',
        USER_NAME: '张三',
        ROW_ID: 85
      },
      {
        FACT_NO: 'A163',
        USER_NO: '4146893',
        USER_NAME: '罗丽惠',
        ROW_ID: 86
      },
      {
        FACT_NO: 'A165',
        USER_NO: '1658733',
        USER_NAME: '李春常',
        ROW_ID: 87
      },
      {
        FACT_NO: 'A165',
        USER_NO: '362993',
        USER_NAME: '姚丽',
        ROW_ID: 88
      },
      {
        FACT_NO: 'A166',
        USER_NO: '307497',
        USER_NAME: '胡平礼',
        ROW_ID: 89
      },
      {
        FACT_NO: 'A173',
        USER_NO: '2043914',
        USER_NAME: '邱峰',
        ROW_ID: 90
      },
      {
        FACT_NO: 'A200',
        USER_NO: '16888',
        USER_NAME: '黄毅',
        ROW_ID: 91
      },
      {
        FACT_NO: 'A200',
        USER_NO: '5711020',
        USER_NAME: 'dove',
        ROW_ID: 92
      },
      {
        FACT_NO: 'A200',
        USER_NO: '5868268',
        USER_NAME: '蓝婷威',
        ROW_ID: 93
      },
      {
        FACT_NO: 'A200',
        USER_NO: '5881692',
        USER_NAME: '张梦娟',
        ROW_ID: 94
      },
      {
        FACT_NO: 'A200',
        USER_NO: '5936028',
        USER_NAME: '王裕鑫',
        ROW_ID: 95
      },
      {
        FACT_NO: 'A201',
        USER_NO: '4290697',
        USER_NAME: '叶慧莉',
        ROW_ID: 96
      },
      {
        FACT_NO: 'A201',
        USER_NO: 'LIZIMU110',
        USER_NAME: '李子木',
        ROW_ID: 97
      },
      {
        FACT_NO: 'A961',
        USER_NO: '5305847',
        USER_NAME: '白新龙',
        ROW_ID: 98
      },
      {
        FACT_NO: 'A961',
        USER_NO: '5725910',
        USER_NAME: '雷晓平',
        ROW_ID: 99
      },
      {
        FACT_NO: 'A962',
        USER_NO: '1939637',
        USER_NAME: '罗威',
        ROW_ID: 100
      }
    ]
  }
}
