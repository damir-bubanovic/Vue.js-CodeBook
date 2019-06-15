/*

!! BASIC - COMPONENTS - OTHER !!

*/

/*
AUTHORING REUSABLE COMPONENTS

The API for a Vue component comes in three parts:
>> Props	- allow the external environment to pass data into the component
>> Events	- allow the component to trigger side effects in the external environment
>> Slots	- allow the external environment to compose the component with extra content.
>> Slots	- allow the external environment to compose the component with extra content.
*/

/*
ASYNC COMPONENTS

1) divide the app into smaller chunks and only load a component from the server when 
it’s actually needed
	- resolve callback, which should be called when you have retrieved your 
	component definition from the server.
	- reject(reason) to indicate the load has failed
	
2) retrieve the component 

3) return a Promise
*/
Vue.component('async-example', function (resolve, reject) {
	setTimeout(function () {
		// Pass the component definition to the resolve callback
		resolve({
			template: '<div>I am async!</div>'
		})
	}, 1000)
})


Vue.component('async-webpack-example', function (resolve) {
	// This special require syntax will instruct Webpack to
	// automatically split your built code into bundles which
	// are loaded over Ajax requests.
	require(['./my-async-component'], resolve)
})


Vue.component(
	'async-webpack-example',
	() => System.import('./my-async-component')
)


/*
X-TEMPLATES:

> define templates is inside of a script element with the type text/x-template, 
then referencing the template by an id
*/
<script type="text/x-template" id="hello-world-template">
	<p>Hello hello hello</p>
</script>

Vue.component('hello-world', {
	template: '#hello-world-template'
})


/*
STATIC COMPONENTS

> component that contains a lot of static content
	-  you can ensure that it’s only evaluated once and then cached by adding the v-once
*/
Vue.component('terms-of-service', {
	template: '\
		<div v-once>\
		  <h1>Terms of Service</h1>\
		  ... a lot of static content ...\
		</div>\
	'
})


