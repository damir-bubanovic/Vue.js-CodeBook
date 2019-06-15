/*

!! BASIC - EVENTS - BASIC !!

> creating interactive application

> events: click, hover, keypress, keyup...

*/


/*
v-on

>> All the Events on vue occur on v-on directive
	- example on click do this method ( v-on:click="method-name" )
	> shortcut v-on:click OR @click
	
EXAMPLE - simple counter
*/
<h1 class="text-center">{{ count }}</h1>
<button v-on:click="countUp()" class="btn btn-primary" >Press Me</button>

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue World!',
		count: 0
	},
	methods: {
		countUp: function() {
			this.count += 1;
		}
	}
})

/*
EXAMPLE - METHODS EVENT HANDLERS - greeting (binding directyle to method name)
*/
<div id="example-2">
  <button v-on:click="greet">Greet</button>
</div>

var example2 = new Vue({
	el: '#example-2',
	data: {
		name: 'Vue.js'
	},
	methods: {
		greet: function (event) {
			// `this` inside methods points to the Vue instance
			alert('Hello ' + this.name + '!')
			// `event` is the native DOM event
			alert(event.target.tagName)
		}
	}
})

/*
EXAMPLE: METHODS in inline JS statements
*/
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>

new Vue({
	el: '#example-3',
	methods: {
		say: function (message) {
			alert(message);
		}
	}
})