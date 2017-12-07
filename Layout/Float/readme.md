# Float

Possible values of `float`:

  - left
  - right
  - none
  - inline-start
  - inline-end

  - inherit
  - initial
  - unset

A `float` implies the use of the block layout, it modifies the computed value of the `display` values, in some cases:

|  Specified value  |  Computed value  |
|-------------------|------------------|
|  `inline`         |  `block` |
|  `inline-block`   |  `block` |
|  `inline-table`   |  `table` |
|  `table-row`      |  `block` |
|  `table-row-group`|  `block` |
|  `table-column`   |  `block` |
|  `table-column-group` |  `block` |
|  `table-cell`     |  `block` |
|  `table-caption`  |  `block` |
|  `table-header-group` |  `block` |
|  `table-footer-group` |  `block` |
|  `flex` |  `flex`, but `float` has no effect on such elements |
|  `table-footer-group` |  `block` |
