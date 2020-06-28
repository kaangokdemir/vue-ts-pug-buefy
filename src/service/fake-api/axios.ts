import axios from 'axios'
const baseURL = process.env.VUE_APP_FAKEAPI_BASEURL

const $axios = axios.create({
  baseURL,
  headers: {
    // Authorization: `Bearer ${token}`
  }
})

export default $axios
