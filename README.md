# Vue-Magic-Grid

[![GitHub forks](https://img.shields.io/github/forks/imlinus/Vue-Magic-Grid.svg)](https://github.com/imlinus/Vue-Magic-Grid/network)
[![GitHub stars](https://img.shields.io/github/stars/imlinus/Vue-Magic-Grid.svg)](https://github.com/imlinus/Vue-Magic-Grid/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/imlinus/Vue-Magic-Grid.svg)](https://github.com/imlinus/Vue-Magic-Grid/issues)
[![GitHub license](https://img.shields.io/github/license/imlinus/Vue-Magic-Grid.svg)](https://github.com/imlinus/Vue-Magic-Grid/blob/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a Vue.js port of @[e-oj's](https://github.com/e-oj) [Magic Grid](https://github.com/e-oj/Magic-Grid).
Please check the `/test` folder for a example.

If you use images, make sure they have a set height, otherwise the grid will calculate weirdly.

<img src="https://i.imgur.com/Wzw0Yl9.png">

### Setup
Install & Register the component
```js
$ npm i -S vue-magic-grid
```

```js
import MagicGrid from 'vue-magic-grid'

Vue.use(MagicGrid)
```

### Use
```html
<magic-grid>
  <card
    v-for="(post, i) in posts"
    :key="i"
    :title="post.title"
    :body="post.body" />
</magic-grid>
```

### Props
| Prop        | Default   | Comment                    |
|:------------|:----------|:---------------------------|
| wrapper     | `wrapper` | _Wrapper class_            |
| gap         | `32`      | _Gap between elements_     |
| maxCols     | `5`       | _Max number of colums_     |
| maxColWidth | `280`     | _Max width of columns_     |
| animate     | `false`   | _Animate item positioning_ |

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

Cheers,
ImLinus
