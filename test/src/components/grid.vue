<template>

  <section class="section">
    <div class="container">

      <magic-grid>
        <card
          v-for="(post, i) in posts"
          :key="i"
          :title="post.title"
          :body="post.body" />
      </magic-grid>

    </div>
  </section>

</template>

<script>
import magicGrid from './magic-grid/magic-grid.vue'
import card from './card.vue'

export default {

  name: 'grid',

  components: {
    card,
    magicGrid
  },

  data () {
    return {
      posts: []
    }
  },

  mounted () {
    fetch('//jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.posts = json.slice(0, 12)
      })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
