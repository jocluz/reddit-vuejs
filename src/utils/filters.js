import moment from 'moment'

export const filters = {
  timesAgo: function (timestamp) {
    return moment.unix(timestamp).fromNow()
  }
}
