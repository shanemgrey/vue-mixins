export const dynamicFilter = {
  methods: {
    dynamicFilter (item, filter) {
      if (filter) {
        return this.$options.filters[filter](item)
      } else {
        return item
      }
    }
  }
}
