# 使用 CSS 的方法

  - `<style>`

  - `<link>`
    默认是：`<link rel="stylesheet" href="style.css">`

  - `@import`
    放置于 `<style>` 内，而且 `@import` 必须先于 @charset 外所有的 CSS，否则网页不会去加载这个文件；

  - inline

## `link` 与 `@imoprt` 的具体区别

- 两者的性质不同
  `link` 是 HTML标签，可以具备其它的属性，从而有更多功能，如可定义RSS等其它事务；

- 加载时间不同
  `link` 在页面加载同时载入，`@import` 在页面加载完成后载入；

- 兼容性不同
  `link` 无兼容问题，`@import` 是 CSS2.1 提出的，低版本浏览器不兼容（当前主流浏览器无此问题）；

- 功能支持不同
  `link` 支持使用 JavaScript 控制 DOM 去改变样式；`@import` 不支持；
