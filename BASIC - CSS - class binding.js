/*

!! BASIC - CSS - CLASS & STYLE BINDING !!

> manipulating an element’s class list and its inline styles
- mostyle use v-bind

*/

/*
EXAMPLES: object binding

1) pass an object to v-bind:class to dynamically toggle classes
	- presence of the active class will be determined by the truthiness 
	of the data property isActive
	
2) multiple classes toggled by having more fields in the object
2.1) bound object doesn’t have to be inline

3) bind to a computed property that returns an object
*/
<div v-bind:class="{ active: isActive }"></div>


<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div> // renders <div class="static active"></div>

data: {
	isActive: true,
	hasError: false
}


<div v-bind:class="classObject"></div>

data: {
	classObject: {
		active: true,
		'text-danger': false
	}
}


<div v-bind:class="classObject"></div>

data: {
	isActive: true,
	error: null
},
computed: {
	classObject: function () {
		return {
			  active: this.isActive && !this.error,
			  'text-danger': this.error && this.error.type === 'fatal',
		}
	}
}


/*
EXAMPLE: Array binding

1) apply a list of classes

2) toggle a class in the list conditionally, you can do it with a ternary expression

3) multiple conditional classes
*/
<div v-bind:class="[activeClass, errorClass]">

data: {
	activeClass: 'active',
	errorClass: 'text-danger'
}


<div v-bind:class="[isActive ? activeClass : '', errorClass]">


<div v-bind:class="[{ active: isActive }, errorClass]">


/*
EXAMPLE: Components

1) on components

2) class binding
*/
<my-component class="baz boo"></my-component>

<my-component v-bind:class="{ active: isActive }"></my-component>