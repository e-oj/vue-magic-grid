export default {

  name: 'magic-grid',

  props: {
    wrapper: {
      type: String, // Required. Class or id of the container.
      default: 'wrapper'
    },
    gap: {
      type: Number, // Optional. Space between items. Default: 32px
      default: 32
    },
    maxCols: {
      type: Number, // Maximum number of colums. Default: Infinite
      default: 5
    },
    maxColWidth: {
      type: Number,
      default: 280
    },
    animate: {
      type: Boolean, // Animate item positioning. Default: false.
      default: true
    }
  },

  data () {
    return {
      started: false,
      items: []
    }
  },

  mounted () {
    this.waitUntilReady()
  },

  methods: {
    waitUntilReady () {
      if (this.isReady()) {
        this.positionItems()

        window.addEventListener('resize', () => {
          setTimeout(this.positionItems(), 200)
        })
      } else this.getReady()
    },

    isReady () {
      return this.$el && this.items.length > 0
    },

    getReady () {
      let interval = setInterval(() => {
        this.items = this.$el.children

        if (this.isReady()) {
          clearInterval(interval)
          this.init()
        }
      }, 100)
    },

    init () {
      if (!this.isReady() || this.started) return

      this.$el.style.position = 'relative'

      Array.prototype.forEach.call(this.items, item => {
        item.style.position = 'absolute'
        item.style.maxWidth = this.maxColWidth + 'px'
        if (this.animate) item.style.transition = 'top, left 0.2s ease'
      })

      this.started = true
      this.waitUntilReady()
    },

    colWidth () {
      return this.items[0].getBoundingClientRect().width + this.gap
    },

    setup () {
      let width = this.$el.getBoundingClientRect().width
      let numCols = Math.floor(width / this.colWidth()) || 1
      let cols = []

      if (this.maxCols && numCols > this.maxCols) {
        numCols = this.maxCols
      }

      for (let i = 0; i < numCols; i++) {
        cols[i] = {
          height: 0,
          top: 0,
          index: i
        }
      }

      let wSpace = width - numCols * this.colWidth() + this.gap

      return {
        cols,
        wSpace
      }
    },

    nextCol (cols, i) {
      if (this.useMin) return this.getMin(cols)

      return cols[i % cols.length]
    },

    positionItems () {
      let { cols, wSpace } = this.setup()

      wSpace = Math.floor(wSpace / 2)

      Array.prototype.forEach.call(this.items, (item, i) => {
        let min = this.nextCol(cols, i)
        let left = min.index * this.colWidth() + wSpace

        item.style.left = left + 'px'
        item.style.top = min.height + min.top + 'px'

        min.height += min.top + item.getBoundingClientRect().height
        min.top = this.gap
      })

      this.$el.style.height = this.getMax(cols).height + 'px'
    },

    getMax (cols) {
      let max = cols[0]

      for (let col of cols) {
        if (col.height > max.height) max = col
      }

      return max
    },

    getMin (cols) {
      let min = cols[0]

      for (let col of cols) {
        if (col.height < min.height) min = col
      }

      return min
    }
  }

}
