/*

!! ULTRA - TRANSITION - CSS TRANSITION & ANIMATION !!

*/


/*
EXAMPLE: Css Transition
*/
<div id="example-1">
	<button @click="show = !show">
		Toggle render
	</button>
		<transition name="slide-fade">
		<p v-if="show">hello</p>
	</transition>
</div>

new Vue({
	el: '#example-1',
	data: {
		show: true
	}
})

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
	transition: all .3s ease;
}
.slide-fade-leave-active {
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
	transform: translateX(10px);
	opacity: 0;
}


/*
EXAMPLE: Css Animation

> applied in the same way as CSS transitions, the difference being that v-enter 
is not removed immediately after the element is inserted, but on an animationend event
*/
<div id="example-2">
	<button @click="show = !show">Toggle show</button>
	<transition name="bounce">
		<p v-if="show">Look at me!</p>
	</transition>
</div>

new Vue({
	el: '#example-2',
	data: {
		show: true
	}
})

.bounce-enter-active {
	animation: bounce-in .5s;
}
.bounce-leave-active {
	animation: bounce-out .5s;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes bounce-out {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(0);
	}
}


/*
CUSTOM TRANSITION CLASSES

> These will override the conventional class names. This is especially useful when you 
want to combine Vue’s transition system with an existing CSS animation library, such as 
Animate.css

Custom transition classes by providing the following attributes
* enter-class
* enter-active-class
* leave-class
* leave-active-class
*/
<div id="example-3">
	<button @click="show = !show">
		Toggle render
	</button>
	<transition
		name="custom-classes-transition"
		enter-active-class="animated tada"
		leave-active-class="animated bounceOutRight"
	>
		<p v-if="show">hello</p>
	</transition>
</div>


/*
USING TRANSITIONS & ANIMATIONS TOGETHER

> If you are only using one or the other, Vue can automatically detect the correct type
> If you want both you will have to explicitly declare the type you want Vue to care about 
in a type attribute, with a value of either animation or transition
*/


/*
JavaScript HOOKS

> define JavaScript hooks in attributes
	- example on official pages
*/
<transition
	v-on:before-enter="beforeEnter"
	v-on:enter="enter"
	v-on:after-enter="afterEnter"
	v-on:enter-cancelled="enterCancelled"
	v-on:before-leave="beforeLeave"
	v-on:leave="leave"
	v-on:after-leave="afterLeave"
	v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>

