<template lang="pug">
#app.py-2.px-2
  p.title {{ helloWorld }}
  router-view
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { Hello, World } from '@/mixins/example'
@Component
export default class App extends Mixins(Hello, World) {
  get helloWorld () {
    return this.hello + this.world
  }
}
</script>
