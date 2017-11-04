import formatDate from 'date-fns/format'

export const formatDateTime = {
  filters: {
    formatDateTime: function (value) {
      if (value) {
        return formatDate(String(value), 'YYYY-MM-DD hh:mm')
        // return ''
      } else {
        return ''
      }
    },
  }
}
