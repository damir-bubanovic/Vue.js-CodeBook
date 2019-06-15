/*

!! BASIC - DATABINDING - BASIC !!

> simple outputing variable data
>> WE can output data with simple v-bind (look up BASIC - DB - DIRECTIVES - v-bind)

>> INFO
	> we can bind data to not only text and attributes, but also the structure of the DOM

*/



<div id="app">
	<h1 class="text-center">{{ message }}</h1>
</div>


/**
 * EXAMPLE:
 * Vue Bind (Simple Example)
 *
 * - outputs value of our variable
 *     > el:    bind new Vue to the div with #id app
 *     > data:  information / variables / objects actual model od view we are passing to element
 *             (in our case variable message is set ti Hello...)
 */
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue World!'
	}
})