/*

!! BASIC - MIXINS - REUSABLE CODE !!

> flexible way to distribute reusable functionalities for Vue components. 
	- A mixin object can contain any component options. When a component uses a mixin, 
	all options in the mixin will be “mixed” into the component’s own options

> a lot more material but not interested now!!	

*/

/*
EXAMPLE: 
*/
// define a mixin object
var myMixin = {
	created: function () {
		this.hello()
	},
	methods: {
		hello: function () {
			console.log('hello from mixin!')
		}
	}
}
// define a component that uses this mixin
var Component = Vue.extend({
	mixins: [myMixin]
})
var component = new Component() // -> "hello from mixin!"