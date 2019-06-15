/*

!! BASIC - COMPUTED PROPERTIES - BASIC !!

> for any complex logic, you should use a computed property
	- html js logic should be simple one liners
	- generally all the js logic goes to computed:
> updates changes, reactive all affected elements if single element changes

*/



/*
EXAMPLE: full name

> update full name as we type first & last name
	>> USE -> can perform string functions, receive data from api, anything in javascript
*/

<h1>Hello {{ fullname }}</h1>
<ul class="text-left">
	<li>First Name: {{ first }}</li>
	<li>Last Name: {{ last }}</li>
</ul>

<div class="form-group">
	<label>First Name:</label>
	<input type="text" class="form-control" v-model="first" />
</div>
<div class="form-group">
	<label>Last Name:</label>
	<input type="text" class="form-control" v-model="last" />
</div>


var app = new Vue({
	el: '#app',
	data: {
		/*Default state of empty string*/
		first: '',
		last: ''
	},
	computed: {
		fullname: function() {
			/*Take first name & last name input & create fullname*/
			return this.first + ' ' + this.last;
		}
	}
})



/*
EXAMPLE: xp level

> update user level based on xp points
*/

<h1>You are a <strong>{{ level }}</strong></h1>
<hr>
<h3>Current XP: {{ xp }}</h3>

<button v-on:click="addXP()">Add XP</button>
<button v-on:click="decreaseXP()">Decrease XP</button>


var app = new Vue({
	el: '#app',
	data: {
		/*Defualt starting ex value*/
		xp: 10
	},
	methods: {
		/*EVENT - add & remove xp from default value on click*/
		addXP: function() {
			return this.xp += 10;
		},
		decreaseXP: function() {
			return this.xp -= 10;
		}
	},
	computed: {
		/*Compute / Calculate*/
		level: function() {
			if(this.xp >= 200) {
				return 'Pro';
			} else if(this.xp >= 100) {
				return 'Intermediate';
			} else if(this.xp >= 0) {
				return 'Beginner';
			} else {
				return 'Banned';
			}
		}
	}
})