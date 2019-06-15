/*

!! ULTRA - SERVER - SERVER SIDE RENDERING !!


> very advanced please check it out better

*/

/*
SEO

> If your app starts with a loading spinner, then fetches content via Ajax, 
the crawler (spinner) will not wait for you to finish
	- This means if you have content fetched asynchronously on pages where 
	SEO is important, SSR might be necessary
*/


/*
CLIENT WITH SLOW INTERNET SPEED

> you’ll want to minimize the number and size of requests necessary for users 
to see basic content
	- use Webpack’s code splitting to avoid forcing users to download your entire 
	application to view a single page
*/


/*
SSR vs PRERENDERING

> If you’re only investigating SSR to improve the SEO of a handful of marketing pages 
(e.g. /, /about, /contact, etc), then you probably want prerendering instead
	- prerendering simply generates static HTML files for specific routes at build time. 
	The advantage is setting up prerendering is much simpler and allows you to keep your 
	frontend as a fully static site
	
EXAMPLE: SSR
*/
// Step 1: Create a Vue instance
var Vue = require('vue')
var app = new Vue({
	render: function (h) {
		return h('p', 'hello world')
	}
})
// Step 2: Create a renderer
var renderer = require('vue-server-renderer').createRenderer()
// Step 3: Render the Vue instance to HTML
renderer.renderToString(app, function (error, html) {
	if (error) throw error
	console.log(html)
	// => <p server-rendered="true">hello world</p>
})