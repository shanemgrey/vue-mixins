export const arrayIsTruthy = {
  methods: {
    arrayIsTruthy: function (arr) {
      return (typeof arr !== 'undefined' && arr != null && arr.length > 0)
    },
  },
}
