<template lang="pug">
  .home
    .columns.is-multiline
      .column.is-3(v-for='todo in todos' :key='todo.id')
        Todo(:todo='todo')
</template>

<script lang="ts">
import Todo from '../components/Todo.vue'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const TodoModule = namespace('todo')

@Component({
  components: { Todo }
})
export default class Home extends Vue {
  @TodoModule.Action('fetchAllTodos')
  public fetchAllTodos!: () => Promise<void>

  @TodoModule.State('todos')
  public todos!: Todo[]

  created () {
    this.fetchAllTodos()
  }
}
</script>
