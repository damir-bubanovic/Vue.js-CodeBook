/*

!! BASIC - COMPUTED PROPERTIES - gutters & setters !!

> Computed properties are by default getter-only
	- When you have some data that needs to change based on some other data,
	use Computed Properties (they are like watch: in Angular JS)
	
> Watchers
	- most useful when you want to perform asynchronous or expensive operations 
	in response to changing data

*/


/*
EXAMPLE: set & get variable values of first & last name
*/

var app = new Vue({
	el: '#app',
	data: {
		first: '',
		last: ''
	},
	computed: {
		fullname: {
			// getter function
			get: function() {
				return.this.first + ' ' + this.last;
			},
			// setter function
			set: function(newName) {
				// John Doe
				var name = newName.split(' ');
				this.first = name[0];   // John
				this.last = name[1];    // Doe
			}
		}
	}
})