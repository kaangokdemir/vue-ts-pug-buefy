<template lang="pug">
  #app
    router-view.py-2.px-2
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {}
</script>
