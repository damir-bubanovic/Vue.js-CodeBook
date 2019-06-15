/*

!! BASIC - PANEL - SHOW - HIDE !!

-> user props to send data to child component
> show / hide panel just like bootstrap accordian
> just apply styles to see everything

*/

<div id="app">
  <div v-for="item in items">
    <toggle-list-item :item="item"></toggle-list-item>
  </div>
</div>

<template id="list-item">
  <div>
    <div>
      {{item.text}}
    </div>

    <button @click="toggle()">show</button>

    <div v-show="isActive" class="item-desc">
      {{item.desc}}
    </div>

  </div>
</template>



Vue.component('toggle-list-item', {
  template: '#list-item',
  props: ['item'],
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  data() {
    return {
      isActive: false
    }
  },
})

new Vue({
  el: '#app',
  data: {
    items: [{
      text: 'foo',
      desc: 'foo desc'
    }, {
      text: 'bar',
      desc: 'bar desc'
    }, {
      text: 'baz',
      desc: 'baz desc'
    }]
  }
});