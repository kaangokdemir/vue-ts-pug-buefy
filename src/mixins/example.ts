import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export class Hello extends Vue {
  hello = 'Hello'
}

@Component
export class World extends Vue {
  world = 'World'
}
