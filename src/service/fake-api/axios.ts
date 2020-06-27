import axios from 'axios'
const baseURL = 'https://jsonplaceholder.typicode.com/'

const $axios = axios.create({
  baseURL,
  headers: {
    // Authorization: `Bearer ${token}`
  }
})

export default $axios
