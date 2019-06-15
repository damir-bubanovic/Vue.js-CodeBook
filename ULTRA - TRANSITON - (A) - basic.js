/*

!! ULTRA - TRANSITION - BASIC !!


>> ALERT <<
	Use Animate.css (great library)

TOOLS for transition effecths when items are inserted, updated, or removed from the DOM
	** automatically apply classes for CSS transitions and animations
	** integrate 3rd-party CSS animation libraries, such as Animate.css
	** use JavaScript to directly manipulate the DOM during transition hooks
	** integrate 3rd-party JavaScript animation libraries, such as Velocity.js

*/


/*
TRANSITION: Single Elements / Components

> transition wrapper component
	* Conditional rendering (using v-if)
	* Conditional display (using v-show)
	* Dynamic components
	* Component root nodes
	
EXAMPLE:
*/
<div id="demo">
	<button v-on:click="show = !show">
		Toggle
	</button>
	<transition name="fade">
		<p v-if="show">hello</p>
	</transition>
</div>

new Vue({
	el: '#demo',
	data: {
		show: true
	}
})

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s
}
.fade-enter, .fade-leave-active {
	opacity: 0
}


/*
TRANSITION: Tranistion Classes

** Look up tranition classes.png **

> four classes applied for enter/leave transitions
1) v-enter: 
	Starting state for enter. Applied before element is inserted, removed after one frame.
2) v-enter-active: 
	Active and ending state for enter. Applied before element is inserted, removed when 
	transition/animation finishes.
3) v-leave: 
	Starting state for leave. Applied when leave transition is triggered, removed after one frame.
4) v-leave-active: 
	Active and ending state for leave. Applied when leave transition is triggered, removed when 
	the transition/animation finishes.
	
* Each of these classes will be prefixed with the name of the transition
*/
<transition name="my-transition">
// class name is
my-transition-enter




