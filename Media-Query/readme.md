# Media query

## Abstract

   - Media query was introduced in HTML4 and CSS2. But further implemented in HTML5 and CSS3.

## Examples

Code samples of media query:

```css
@media screen and (max-width: 480px) {}

@media (pointer: fine) {} /* `@media all and CONDITION` is equivilent to `@media CONDITION`*/

@supports (display: flex) {}

@media only screen {}
```

### `media` type

  - `all`
  - `print`
  - `screen`
  - `speech`

### `media` features

Reference for details: [media features](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features)

### Query `screen`

  - `max-width`
  - `min-width`
  - `max-height`
  - `min-height`

### Logical operators

  - `and`
  - `not`
  - `only`
  - `\s`: or

##  `<link>` and `@import`

Format:

```html
<link rel="stylesheet" type="text/css" href="print.css" media="print"><!-- if printing -->
<link rel="stylesheet" media="screen and (color)" rel="stylesheet" href="colorful-screen.css"><!-- if color screen -->

<style>
@import "print.css" print;
@import url('landscape.css') screen and (orientation:landscape);
</style>
```

## Appendix

  - [W3C Standard](https://www.w3.org/TR/css3-mediaqueries/)
