<template lang="pug">
  .home
    .columns.is-multiline
      .column.is-3(v-for='todo in todos' :key='todo.id')
        Todo(:todo='todo')
</template>

<script lang="ts">
import Todo from '../components/Todo.vue'
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import TodoModule from '../store/todo'

@Component({
  components: { Todo },
})
export default class Home extends Vue {
  @Action('todo/fetchAllTodos')
  fetchAllTodos!: () => Promise<void>

  @State(state => (state.todo as TodoModule).todos)
  todos!: Todo[]

  created () {
    this.fetchAllTodos()
  }
}
</script>
