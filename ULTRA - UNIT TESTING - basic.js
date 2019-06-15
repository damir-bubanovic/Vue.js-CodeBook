/*

!! ULTRA - UNIT TESTING - BASIC !!

> use Karma test runner

*/


/*
EXAMPLE: Simple Assertions

1) export the raw options

1.1.) When you test that component, all you have to do is import the object 
along with Vue to make many common assertions
*/
<template>
	<span>{{ message }}</span>
</template>

export default {
	data () {
		return {
			message: 'hello!'
		}
	},
	created () {
		this.message = 'bye!'
	}
}


// Import Vue and the component being tested
import Vue from 'vue'
import MyComponent from 'path/to/MyComponent.vue'
// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MyComponent', () => {
	// Inspect the raw component options
	it('has a created hook', () => {
		expect(typeof MyComponent.created).toBe('function')
	})
	// Evaluate the results of functions in
	// the raw component options
	it('sets the correct default data', () => {
		expect(typeof MyComponent.data).toBe('function')
		const defaultData = MyComponent.data()
		expect(defaultData.message).toBe('hello!')
	})
	// Inspect the component instance on mount
	it('correctly sets the message when created', () => {
		const vm = new Vue(MyComponent).$mount()
		expect(vm.message).toBe('bye!')
	})
	// Mount an instance and inspect the render output
	it('renders the correct message', () => {
		const Ctor = Vue.extend(MyComponent)
		const vm = new Ctor().$mount()
		expect(vm.$el.textContent).toBe('bye!')
	})
})


/*
EXAMPLE: Writing Testable Components

- assert its render output with different props using the propsData option
*/
<template>
	<p>{{ msg }}</p>
</template>

export default {
	props: ['msg']
}


import Vue from 'vue'
import MyComponent from './MyComponent.vue'
// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
	const Ctor = Vue.extend(Component)
	const vm = new Ctor({ propsData }).$mount()
	return vm.$el.textContent
}
describe('MyComponent', () => {
	it('render correctly with different props', () => {
		expect(getRenderedText(MyComponent, {
			msg: 'Hello'
	})).toBe('Hello')
		expect(getRenderedText(MyComponent, {
			msg: 'Bye'
		})).toBe('Bye')
	})
})



/*
EXAMPLE: Asserting Asynchronous Updates

- use in a Vue.nextTick callback
*/
// Inspect the generated HTML after a state update
it('updates the rendered message when vm.message updates', done => {
	const vm = new Vue(MyComponent).$mount()
	vm.message = 'foo'
	// wait a "tick" after state change before asserting DOM updates
	Vue.nextTick(() => {
		expect(vm.$el.textContent).toBe('foo')
		done()
	})
})



