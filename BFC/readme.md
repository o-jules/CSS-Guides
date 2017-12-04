# Block formatting context

BFC 是 Web 页面中盒模型布局的 CSS 渲染模式。它的定位体系属于常规文档流。

## 创建 BFC

浮动，绝对定位，inline-block，table-cells，table-captions，overflow值不为visible（除了这个值已经被传到了视口的时候）将创建一个新的BFC。

即：
  - float 不为 none；
  - position 值不为 static 或者 relative；
  - display 值为 table-cell，table-captioin，inline-block，flex 或者 inline-flex；
  - overflow 不为 visible
