/*

!! BASIC - COMPONENTS - CUSTOM EVENTS !!

>> ALERT <<
	- parent can pass data down to the child using props, other way around we need custom events

EVENTS:
**** Listen to an event using $on(eventName)
**** Trigger an event using $emit(eventName)
	
*/


/*
EXAMPLE: 

1) parent component can listen to the events emitted from a child component using v-on 
directly in the template where the child component is used
	- child component is still completely decoupled from what happens outside of it. 
	All it does is report information about its own activity, just in case a parent 
	component might care
	
2) listen for a native event on the root element of a component
*/
<div id="counter-event-example">
	<p>{{ total }}</p>
	<button-counter v-on:increment="incrementTotal"></button-counter>
	<button-counter v-on:increment="incrementTotal"></button-counter>
</div>

Vue.component('button-counter', {
	template: '<button v-on:click="increment">{{ counter }}</button>',
	data: function () {
		return {
			counter: 0
		}
	},
	methods: {
		increment: function () {
			this.counter += 1
			this.$emit('increment')
		}
	}
})


<my-component v-on:click.native="doTheThing"></my-component>

/*
EXAMPLE: 

2) Form input components
*/
<currency-input v-model="price"></currency-input>

Vue.component('currency-input', {
	template: '\
		<span>\
		  $\
		  <input\
			ref="input"\
			v-bind:value="value"\
			v-on:input="updateValue($event.target.value)"\
		  >\
		</span>\
	',
	props: ['value'],
		methods: {
		// Instead of updating the value directly, this
		// method is used to format and place constraints
		// on the input's value
		updateValue: function (value) {
			var formattedValue = value
			// Remove whitespace on either side
			.trim()
			// Shorten to 2 decimal places
			.slice(0, value.indexOf('.') + 3)
			// If the value was not already normalized,
			// manually override it to conform
			if (formattedValue !== value) {
				this.$refs.input.value = formattedValue
			}
			// Emit the number value through the input event
			this.$emit('input', Number(formattedValue))
		}
	}
})


/*
EXAMPLE: 2 components communicate that are not parent-child
*/
var bus = new Vue()

// in component A's method
bus.$emit('id-selected', 1)

// in component B's created hook
bus.$on('id-selected', function (id) {
	// ...
})