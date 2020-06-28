import $axios from './axios'

export default class FakeApi {
  public baseURL = process.env.VUE_APP_FAKEAPI_BASEURL

  public async fetchAllTodos () {
    return await $axios.get('/todos')
  }
}
