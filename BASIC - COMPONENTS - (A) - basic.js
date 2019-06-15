/*

!! BASIC - COMPONENTS - BASIC !!

> enagle us to build large-scale applications composed of small, self-contained, 
and often reusable components
	- almost any type of application interface can be abstracted into a tree of components
	
DEFINITION:
> A component is essentially a Vue instance with pre-defined options.

*/


/*
EXAMPLE: Dividing components in aplication
*/
<div id="app">
	<app-nav></app-nav>
	<app-view>
		<app-sidebar></app-sidebar>
		<app-content></app-content>
	</app-view>
</div>


/*
EXAMPLE USE: Simple component
> compose component inside another component

1) Define a new component called todo-item
2) Compose it in another component’s template
*/
Vue.component('todo-item', {
	template: '<li>This is a todo</li>'
})

<ol>
	<!-- Create an instance of the todo-item component -->
	<todo-item></todo-item>
</ol>


/*
EXAMPLE USE: Advanced Component
> pass data from the parent scope into child components

>> prop -> custom attribute for passing information from parent components

1) Create prop attribute to pass data (our prop is named todo)
2) Now we provide each todo-item with the todo object it's representing, so that its content can be dynamic
3) Pass array data
*/
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

<div id="app-7">
	<ol>
		<todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
	</ol>
</div>

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
			{ text: 'Vegetables' },
			{ text: 'Cheese' },
			{ text: 'Whatever else humans are supposed to eat' }
		]
	}
})