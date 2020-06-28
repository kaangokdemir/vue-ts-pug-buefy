<template lang="pug">
  .todo
    .card.py-2.px-2
      b {{todo.id}} &nbsp;
      span {{todo.title}}
      p
        b-tag(:type='todo.completed ? "is-success" : "is-danger"')
          span {{todo.completed ? 'Completed' : 'Not Completed'}}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Todo extends Vue {
  @Prop()
  readonly todo!: Todo
}
</script>
