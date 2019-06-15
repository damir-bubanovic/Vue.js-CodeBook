/*

!! BASIC - COMPONENTS - PROPS !!

>> ALERT <<
	- parent can pass data down to the child using props, other way around we need custom events

> every component has it's own isolated scope
> if you want to pass data to child componente use props
	- child component needs to explicitly declare the props it 
	expects to receive using the props option

- always use kebab-case, not camel case

*/


/*
EXAMPLE:

1) basic usage

2) dynamically binding props to data on the parent
	- Whenever the data is updated in the parent, it will also 
	flow down to the child
*/
Vue.component('child', {
	// declare the props
	props: ['message'],
	template: '<span>{{ message }}</span>'
})

<child message="hello!"></child>


<div>
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>


/*
EXAMPLE: Prop Validation

> Instead of defining the props as an array of strings, you can use an 
object with validation requirements

- type can be: string, number, boolean, function, object, array
*/
Vue.component('example', {
	props: {
		// basic type check (`null` means accept any type)
		propA: Number,
		// multiple possible types
		propB: [String, Number],
		// a required string
		propC: {
			type: String,
			required: true
		},
		// a number with default value
		propD: {
			type: Number,
			default: 100
		},
		// object/array defaults should be returned from a
		// factory function
		propE: {
			type: Object,
			default: function () {
				return { message: 'hello' }
			}
		},
		// custom validator function
		propF: {
			validator: function (value) {
				return value > 10
			}
		}
	}
})