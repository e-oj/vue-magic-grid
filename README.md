# Vue-Magic-Grid
This is a Vue.js port of @e-oj 's Magic Grid.
Please check the `/test` folder for a example.

Make sure to lazy-load images with a set height of the image-div,
or use `waitForImages()` or something similar
to make sure the grid is properly calculated.

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
- `wrapper: 'wrapper'` // Wrapper class/id
- `gap: 32` // Gap between elements
- `maxCols: 5` // Maximum number of colums. Default: Infinite
- `maxColWidth: 280` // Maximum width of child elements
- `animate: false` // Animate item positioning.


Cheers,
ImLinus
