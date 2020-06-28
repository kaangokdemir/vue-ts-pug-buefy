import $axios from './axios'

export default class FakeApi {
  public baseURI = 'https://jsonplaceholder.typicode.com/'

  public async fetchAllTodos () {
    return await $axios.get('/todos')
  }
}
