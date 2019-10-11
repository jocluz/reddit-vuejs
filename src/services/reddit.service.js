import axios from 'axios'
import { REDDIT_URL } from '../utils/constants'

export async function getPosts (args) {
  let url = `${REDDIT_URL}top.json`
  if (args.before) {
    url += `&before=${args.before}`
  }
  if (args.after) {
    url += `&after=${args.after}`
  }

  return axios({
    method: 'get',
    url
  }).then(mapData)
}

function mapData (response) {
  const data = response.data.data
  const mapped = {
    after: data.after,
    before: data.before,
    children: data.children.reduce((accumulator, current) => {
      accumulator[current.data.id] = current.data
      return accumulator
    }, {})
  }
  return mapped
}
