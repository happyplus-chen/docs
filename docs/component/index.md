# 快速开始 

## 特性

- Vue 3 Composition AP
- TypeScript 编写

数据配置

- 数据配置表单/表格，极简的思想，完全的数据驱动，拥有绝对的灵活性。

扩展组件

- 更多丰富的扩展组件，在 ElementPlus 没有找到的这里或许会有。

快捷使用

- 适配双语言，黑暗模式，完整的 typescript 提示，更方便的全局配置。



## 全局引用

```js
import Vue from "vue";
import ElementPlus from "element-plus";
import ElementPlusJg from "element-plus-jg";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

app.use(ElementPlus);
app.use(ElementPlusJg);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
```

