import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { FakeApi } from '@/service'

const fakeApi = new FakeApi()
@Module({ namespaced: true })
export default class TodoModule extends VuexModule {
  todos?: Todo[] = []

  @Mutation
  SET_TODOS (todos: Todo[]) {
    this.todos = todos
  }

  @Action({ commit: 'SET_TODOS' })
  async fetchAllTodos () {
    const { data } = await fakeApi.fetchAllTodos()
    return data
  }
}
