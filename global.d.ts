
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
      FormItem: typeof import('./packages')['FormItem']
      FormItems: typeof import('./packages')['FormItems']
      FormGrid: typeof import('./packages')['FormGrid']
      FormDesc: typeof import('./packages')['FormDesc']
      Checkbox: typeof import('./packages')['Checkbox']
      Radio: typeof import('./packages')['Radio']
      Select: typeof import('./packages')['Select']
      Upload: typeof import('./packages')['Upload']
      DynamicTags: typeof import('./packages')['DynamicTags']
      Menu: typeof import('./packages')['Menu']
      ContextMenu: typeof import('./packages')['ContextMenu']
      Ellipsis: typeof import('./packages')['Ellipsis']
    }
  }
  export {}
  