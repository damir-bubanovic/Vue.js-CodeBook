/*

!! BASIC - VUE - VUE INSTANCE !!

*/


/*
>> ALERT <<
	Vue only works with php artisan serve & gulp watch
	(Can not get it to work with wamp)
*/


/*
CONSTRUCTOR

1) Simple Vue Constructor
> vm -> name of VueModel ie. app / nav / cat
> options -> 	options object which can contain options for data, template, 
				element to mount on, methods, lifecycle callbacks
				
2) Vue constructor can be extended to create reusable component 
constructors with pre-defined options
*/
var vm = new Vue({
  // options
})


var MyComponent = Vue.extend({
  // extension options
})
// all instances of `MyComponent` are created with
// the pre-defined extension options
var myComponentInstance = new MyComponent()


/*
PROPERTIES & METHODS

1) Vue instance proxies  all the properties found in its data object

2) Vue instances expose a number of useful instance properties and methods. These properties 
and methods are prefixed with $ to differentiate them from proxied data properties
*/
var data = { a: 1 }
var vm = new Vue({
  data: data
})
vm.a === data.a // -> true
// setting the property also affects original data
vm.a = 2
data.a // -> 2
// ... and vice-versa
data.a = 3
vm.a // -> 3


var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})
vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true
// $watch is an instance method
vm.$watch('a', function (newVal, oldVal) {
  // this callback will be called when `vm.a` changes
})


/*
LIFECYCLE HOOKS

> Each Vue instance goes through a series of initialization steps when it is created
	- npr. it needs to set up data observation, compile the template, 
	mount the instance to the DOM, and update the DOM when data changes
> Lifecycle hooks enable us to execute custom logic
> Hook List:
	* created
	* mounted
	* updated
	* destroyed
	
EXAMPLE: created hook after the instance is created
*/
var vm = new Vue({
	data: {
		a: 1
	},
	created: function () {
		// `this` points to the vm instance
		console.log('a is: ' + this.a)
	}
})
// -> "a is: 1"