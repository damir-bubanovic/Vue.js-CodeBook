/*

!! ULTRA - RENDER FUNCTIONS - BASIC !!

> most of the time use templates to build HTML

>> if you need full programing power of JavaSCript use Render Functions
	- look up other examples
*/

/*
EXAMPLE: Simple

*) generate anchor tags (lots of them)
*) component interface
*) avodi unnecessary code duplication
*/
<h1>
	<a name="hello-world" href="#hello-world">
		Hello world!
	</a>
</h1>

<anchored-heading :level="1">Hello world!</anchored-heading>

Vue.component('anchored-heading', {
	render: function (createElement) {
		return createElement(
			'h' + this.level,   // tag name
			this.$slots.default // array of children
		)
	},
	props: {
		level: {
			type: Number,
			required: true
		}
	}
})