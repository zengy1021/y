import _ from 'lodash'
import api1 from './api'
import axios from 'axios'
const api = { // 调用其他外部api
  getHotMovieList (obj) {
    if (!_.isEmpty(obj)) {
      return axios.get('https://douban.uieee.com/v2/movie/in_theaters')
    } else {
      return axios.get('https://douban.uieee.com/v2/movie/in_theaters')
    }
  }
}
export default _.merge(api, api1)
