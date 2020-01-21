import _ from 'lodash'
import api1 from './api'
import axios from 'axios'
const api = { // 调用其他外部api
  _formatGetParmasRequest (url, parmas) {
    if (_.isEmpty(parmas)) {
      return url
    }
    let strList = []
    for (let key in parmas) {
      strList.push(`${key}=${parmas[key]}`)
    }
    let str = ''
    strList.map((item, index) => {
      if (index !== strList.length - 1) {
        str += `${item}&`
      } else {
        str += `${item}`
      }
    })
    return `${url}?${str}`
  },
  getHotMovieList (obj) {
    if (!_.isEmpty(obj)) {
      return axios.get(this._formatGetParmasRequest('https://douban.uieee.com/v2/movie/in_theaters', obj))
    } else {
      let parmas = {
        city: '深圳',
        start: 1,
        count: 10
      }
      return axios.get(this._formatGetParmasRequest('https://douban.uieee.com/v2/movie/in_theaters', parmas))
    }
  },
  getComingMovieList (obj) {
    if (!_.isEmpty(obj)) {
      return axios.get(this._formatGetParmasRequest('https://douban.uieee.com/v2/movie/coming_soon', obj))
    } else {
      let parmas = {
        start: 1,
        count: 10
      }
      return axios.get(this._formatGetParmasRequest('https://douban.uieee.com/v2/movie/coming_soon', parmas))
    }
  },
  // 获取电影详情  根据电影id
  getMoiveDetailById (id) {
    return axios.get(`https://douban.uieee.com/v2/movie/subject/${id}`)
  }
}
export default _.merge(api, api1)
