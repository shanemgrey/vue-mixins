export const dynamicFilter = {
  methods: {
    dynamicFilter (item, filter) {
      if (!filter) return item
      return this.$options.filters[filter](item)
    }
  }
}
