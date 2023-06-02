# 图标

如果你没有在本项目 Icon 中找到需要的图标，可以到 iconfont.cn 上选择并生成自己的业务图标库，再进行使用。或者其它 svg 图标网站，下载 svg 并放到文件夹之中就可以了。

注： icon 图标库生成自行百度

# svg 图标

项目支持和推荐单独导出 svg 的引入使用方式。
下载完成之后将下载好的 .svg 文件放入 @/icons/svg 文件夹下之后就会自动导入。

## 使用方式

``` html
<svg-icon icon-class="password" /> // icon-class 为 icon 的名字
```

## 改变颜色
svg-icon 默认会读取其父级的 color fill: currentColor;
你可以改变父级的color或者直接改变fill的颜色即可。