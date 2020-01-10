import axios from 'axios'

const http = axios.create({
  withCredentials: true,
  timeout: 10000
})

http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    try {
      const res = 'status' in response ? response.data : response
      return res
    } catch (e) {
      return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default http
