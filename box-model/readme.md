# CSS 盒模型

盒模型共有三种：content-box, border-box, padding-box。
其中，`padidng-box` 仅 Firefox 支持。

## 兼容性

具体参见[caniuse](https://caniuse.com/#search=box-sizing)

当前主流的浏览器都支持 `box-sizing` 属性。仅 IE家族 在 IE 8 之前不支持。部分浏览器需要加前缀（如 Firefox）。

注意事项：

  - 对于IE8，设置了 min/max-width/height，`box-sizing`就失效；
  - IE 9 会有 bug；

## `border-box`的应用

  - 响应式的宽度
  - 确定大小的元素添加 padding 和 border
    * 常见的：为（如定宽100% 的）textarea 设置 `border` 和 `padding`
