# CSS 选择器

## CSS 选择器<a id="css-selectors-list"></a>

CSS 最基本的选择如下：   

| 选择器                    | 种类   | 子类   | 含义                       | 标准版本    |
| :--------------------- | ---- | ---- | ------------------------ | ------- |
| *                      | 基本   |      | 通用元素选择器                  |         |
| E                      | 基本   |      | 标签选择器                    |         |
| .class                 | 基本   |      | class选择器                 |         |
| \#id                   | 基本   |      | id选择器                    |         |
| E, F                   | 组合   |      | 多元素选择器，匹配 E 或 F          |         |
| E F                    | 组合   |      | 后代选择器                    |         |
| E > F                  | 组合   |      | 子元素选择器                   |         |
| E + F                  | 组合   |      | 毗邻元素选择器                  |         |
| E ~ F                  | 组合   |      | 匹配之后的所有的同级元素             | CSS 3   |
| E[attr]                | 属性   |      | 具有某种属性                   | CSS 2.1 |
| E[attr=val]            | 属性   |      | 某种属性的值等于                 | CSS 2.1 |
| E[attr~= val]          | 属性   |      | 属性值以空格分隔，其中一个等于          | CSS 2.1 |
| E[attr\|= val]         | 属性   |      | 属性值以连字号分隔，其中一个等于         | CSS 2.1 |
| E[attr^="val"]         | 属性   |      | 属性值开头                    | CSS3    |
| E[attr$="val"]         | 属性   |      | 属性值结尾                    | CSS3    |
| E[attr*="val"]         | 属性   |      | 属性值包含有                   | CSS3    |
| E:first-child          | 伪类   |      | 匹配第一个子元素                 |         |
| E:link                 | 伪类   |      | 匹配未被点击的链接                |         |
| E:visited              | 伪类   |      | 匹配已被点击的链接                |         |
| E:active               | 伪类   |      | 匹配鼠标按下未松开的链接             |         |
| E:hover                | 伪类   |      | 匹配鼠标悬停的元素                |         |
| E:focus                | 伪类   |      | 匹配获得焦点的元素                |         |
| E:lang(c)              | 伪类   |      | 匹配lang属性                 |         |
| E:first-line           | 伪元素  |      | 第一行                      | CSS 2.1 |
| E:first-letter         | 伪元素  |      | 第一个字母                    | CSS 2.1 |
| E:before               | 伪元素  |      | 元素之前插入生成的内容              | CSS 2.1 |
| E:after                | 伪元素  |      | 元素之后插入生成的内容              | CSS 2.1 |
| E:enable               | 伪类   | 用户界面 | 匹配表单中激活的元素               | CSS3    |
| E:enabled              | 伪类   | 用户界面 | 匹配表单禁用的元素                | CSS3    |
| E:checked              | 伪类   | 用户界面 | 匹配表单选中的radio或checkbox    | CSS3    |
| E:selection            | 伪类   | 用户界面 | 匹配用户当前选中                 | CSS3    |
| E:root                 | 伪类   | 结构性  | 匹配文档根元素（HTML文档即`<html>`） | CSS3    |
| E:nth-child(n)         | 伪类   | 结构性  | 第n个子元素                   | CSS3    |
| E:nth-last-child(n)    | 伪类   | 结构性  | 第倒数n个子元素                 | CSS3    |
| E:nth-of-type(n)       | 伪类   | 结构性  | 某标签子元素的第n个               | CSS3    |
| E:nth-last-of-child(n) | 伪类   | 结构性  | 某标签子元素的倒数第n个             | CSS3    |
| E:first-child          | 伪类   |      | 第一个子元素                   | CSS2.1  |
| E:last-child           | 伪类   | 结构性  | 最后一个子元素                  | CSS3    |
| E:first-of-type        | 伪类   | 结构性  | 某标签子元素的第一个               | CSS3    |
| E:last-of-type         | 伪类   | 结构性  | 某标签子元素的最后一个              | CSS3    |
| E:only-child           | 伪类   | 结构性  | 匹配父元素上仅有的子元素             | CSS3    |
| E:only-of-type         | 伪类   | 结构性  | 匹配父元素上仅有某标签的子元素          | CSS3    |
| E:empty                | 伪类   | 结构性  | 不包含子元素（含文本）的元素           | CSS3    |
| E:not(s)               | 伪类   | 反选   | 反选，匹配不符合当前选择器的任何元素       | CSS3    |
| E:target               | 伪类   |      | 匹配文档中特定"id"点击后的效果        | CSS3    |

## 样式与选择器优先级

样式为 `!important` 最高，内联次之，其次为外部的样式。

在外部样式的选择器中，优先级计算方法如下：

  - 是否内联的样式 `style=""` 中的记为 a，是则记为 1，否则为0；
  - id 的总数记为 b；
  - 其它属性（含class）和伪类的总数记为 c，
    需要注意的是，[id="ID"] 被当作属性，而不是id，所以是记入 c 都不是记入 b；
    `:hover` 之类的为伪类；
  - 元素名和伪元素总数记为 d；
    `:after` 之类的为伪元素；

然后比较 abcd 连成的的数值。大的，优先级更高。

由此可以看出：
  - 组合选择器，`E + F`, `E > F`, `E F` 等，不贡献优先级

具体参见：[优先级计算](https://www.w3.org/TR/CSS2/cascade.html#specificity)

### 简单单选择器的优先级

```css
#id,
.class, [attr], :hover
span, :after,
```
