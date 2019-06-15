/*

!! BASIC - COMPONENTS - DYNAMIC COMPONENTS !!

*/

/*
EXAMPLE:

1) dynamically switch between multiple components using the reserved <component> 
element and dynamically bind to its is attribute

2) bind directly to component objects
*/
<component v-bind:is="currentView">
	<!-- component changes when vm.currentView changes! -->
</component>

var vm = new Vue({
	el: '#example',
	data: {
		currentView: 'home'
	},
	components: {
		home: { /* ... */ },
		posts: { /* ... */ },
		archive: { /* ... */ }
	}
})


var Home = {
	template: '<p>Welcome home!</p>'
}
var vm = new Vue({
	el: '#example',
	data: {
		currentView: Home
	}
})



/*
EXAMPLE: Keep-alive

1) keep the switched-out components in memory so that you can preserve their state or avoid re-rendering,
*/
<keep-alive>
	<component :is="currentView">
		<!-- inactive components will be cached! -->
	</component>
</keep-alive>



