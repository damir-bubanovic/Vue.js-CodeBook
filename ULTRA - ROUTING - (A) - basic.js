/*

!! ULTRA - ROUTING - BASIC !!

> For most Single Page Applications, it’s recommended to use the officially-supported 
vue-router library

*/


/*
EXAMPLE: Simple Routing From Scratch

> dynamically rendering a page-level component like this
	- Combined with the HTML5 History API, you can build a very basic but 
	fully-functional client-side router (example on vue pages)
*/
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const routes = {
	'/': Home,
	'/about': About
}
new Vue({
	el: '#app',
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
		ViewComponent () {
			return routes[this.currentRoute] || NotFound
		}
	},
	render (h) { return h(this.ViewComponent) }
})


/*
EXAMPLE: 3rd party routers

> look up Page.js or Director
*/