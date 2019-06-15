/*

!! ULTRA - TRANSITION - DYNAMIC TRANSITIONS !!

> useful when you’ve defined CSS transitions/animations using Vue’s transition 
class conventions and simply want to switch between them

*/

/*
EXAMPLE: Basic

1) binds the name attribute to a dynamic property

2) any transition attribute can be dynamically bound. And it’s not just attributes. 
Since event hooks are just methods, they have access to any data in the context. 
*/
<transition v-bind:name="transitionName">
	<!-- ... -->
</transition>


<div id="dynamic-fade-demo">
	Fade In: <input type="range" v-model="fadeInDuration" min="0" v-bind:max="maxFadeDuration">
	Fade Out: <input type="range" v-model="fadeOutDuration" min="0" v-bind:max="maxFadeDuration">
	<transition
		v-bind:css="false"
		v-on:before-enter="beforeEnter"
		v-on:enter="enter"
		v-on:leave="leave"
	>
		<p v-if="show">hello</p>
	</transition>
	<button v-on:click="stop = true">Stop it!</button>
</div>

new Vue({
  el: '#dynamic-fade-demo',
  data: {
    show: true,
    fadeInDuration: 1000,
    fadeOutDuration: 1000,
    maxFadeDuration: 1500,
    stop: false
  },
  mounted: function () {
    this.show = false
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      var vm = this
      Velocity(el,
        { opacity: 1 },
        {
          duration: this.fadeInDuration,
          complete: function () {
            done()
            if (!vm.stop) vm.show = false
          }
        }
      )
    },
    leave: function (el, done) {
      var vm = this
      Velocity(el,
        { opacity: 0 },
        {
          duration: this.fadeOutDuration,
          complete: function () {
            done()
            vm.show = true
          }
        }
      )
    }
  }
})