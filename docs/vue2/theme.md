# 更换主题
本项目基于 element-ui 默认视觉风格搭建了。如果对视觉风格有额外的要求可以按照官方自定义主题指导。该方案是通过样式变量覆盖的方式。

## 多套主题换肤
本方法就是最常见的换肤方式，本地存放多套主题，两者有不同的命名空间，如写两套主题，一套叫 day-theme ，一套叫 night-theme ，night-theme 主题都在一个 .night-theme 的命名空间下，我们动态的在 body 上 add .night-theme ; remove .night-theme。

## 动态换肤
本项目也提供了该功能。 代码地址：@/components/ThemePicker。

element-ui 2.0 版本之后所有的样式都是基于 SCSS 编写的，所有的颜色都是基于几个基础颜色变量来设置的，所以就不难实现动态换肤了，只要找到那几个颜色变量修改它就可以了。 首先我们需要拿到通过 package.json 拿到 element-ui 的版本号，根据该版本号去请求相应的样式。拿到样式之后将样色，通过正则匹配和替换，将颜色变量替换成你需要的，之后动态添加 style 标签来覆盖原有的 css 样式。

### 使用方式
在项目中引入 ThemePicker 组件即可
``` js
import ThemePicker from '@/components/ThemePicker'
```
