# Media query

CSS 文件中的 media query，格式示例：

```css
@media screen and (max-width: 480px) {}

@media (pointer: fine) {}

@supports (display: flex) {}

@media only screen {}
```

### `media` type
  - `all`
  - `print`
  - `screen`
  - `speech`

### `media` 查询特性是否支持以支持状况

详细参见：[media features](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features)

### 查询`screen`

  - `max-width`
  - `min-width`
  - `max-height`
  - `min-height`

### Logical operators
  - `and`
  - `not`
  - `only`
  - `\s`: or

## `<link>` 和 `@import` 的 media

格式：
```html
<link rel="stylesheet" type="text/css" href="print.css" media="print"><!-- if printing supported -->
<link rel="stylesheet" media="screen and (color)" rel="stylesheet" href="colorful-screen.css"><!-- if colored screen supported -->

<style>
@import "print.css" print;
@import url('landscape.css') screen and (orientation:landscape);
</style>
```

## Appendix

  - [W3C Standard](https://www.w3.org/TR/css3-mediaqueries/)
