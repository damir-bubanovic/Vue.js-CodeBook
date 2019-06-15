/*

!! BASIC - COMPONENTS - USAGE !!

> custom tag names (all-lowercase, must contain a hyphen) - good practice

> look up composing components - parent_child.gif

*/


/*
EXAMPLE:

1) Simple component

2) Advanced component
	- one registered you can use component in template
*/
new Vue({
	// options
	el: '#example',
})

<div id="my-component">
  <my-component></my-component>
</div>


Vue.component('my-component', {
	// options
	template: '<div>A custom component!</div>'
})


/*
EXAMPLE: Local component
*/
var Child = {
	template: '<div>A custom component!</div>'
}
new Vue({
	components: {
		// <my-component> will only be available in parent's template
		'my-component': Child
	}
})


/*
LIMITATIONS:

1) some elements such as <ul>, <ol>, <table> and <select> have restrictions
	- use like this
	
2) data must be a function
*/
<table>
	<tr is="my-row"></tr>
</table>


<div id="example-2">
	<simple-counter></simple-counter>
	<simple-counter></simple-counter>
	<simple-counter></simple-counter>
</div>

var data = { counter: 0 }
Vue.component('simple-counter', {
	template: '<button v-on:click="counter += 1">{{ counter }}</button>',
	data: function () {
		return data
	}
})
new Vue({
	el: '#example-2'
})