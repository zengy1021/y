import http from './http'
let dataBase = '/api'

const api = {
  getLogList () {
    return http.post(`${dataBase}/requestLogList`, {
      pageNum: 1,
      pageSize: 10
    })
  },
  test () {
    return http.get(`${dataBase}/test`)
  }
}

export default api
