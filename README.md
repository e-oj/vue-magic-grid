# Vue-Magic-Grid
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
| Props       | Default   | Comment                  |
| :-----------|:----------| -------------------------|
| wrapper     | wrapper   | Wrapper class            |
| gap         | 32        | Gap between elements     |
| maxCols     | 5         | Max number of colums     |
| maxColWidth | 280       | Max width of columns     |
| animate     | false     | Animate item positioning |

Cheers,
ImLinus
