/*

!! ULTRA - TRANSITION ON INITIAL RENDER !!

> apply a transition on the initial render of a node


EXAMPLE
1) this will use the transitions specified for entering and leaving

2) you can also specify custom CSS classes

3) custom JavaScript hooks
*/
<transition appear>
	<!-- ... -->
</transition>


<transition
	appear
	appear-class="custom-appear-class"
	appear-active-class="custom-appear-active-class"
>
	<!-- ... -->
</transition>


<transition
	appear
	v-on:before-appear="customBeforeAppearHook"
	v-on:appear="customAppearHook"
	v-on:after-appear="customAfterAppearHook"
>
	<!-- ... -->
</transition>