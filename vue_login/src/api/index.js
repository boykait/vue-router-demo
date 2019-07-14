import axios from '../axios/index'
export default{
  login: (data) => {
    return axios.post('/login', data)
  }
}
