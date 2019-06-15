/*

!! BASIC - EVENTS - METHODS - MODIFIERS - BASIC !!

> instead calling event.preventDefault() or event.stopPropagation() inside methods,
do this inside html elements (on v-on elements)

*/


/*
EXAMPLE:

1) the click event's propagation will be stopped

2) the submit event will no longer reload the page

3) modifiers can be chained

4) just the modifier

5) use capture mode when adding the event listener

6) only trigger handler if event.target is the element itself
	- i.e. not from a child element
	
7) the click event will be triggered at most once
*/
<a v-on:click.stop="doThis"></a>

<form v-on:submit.prevent="onSubmit"></form>

<a v-on:click.stop.prevent="doThat"></a>

<form v-on:submit.prevent></form>

<div v-on:click.capture="doThis">...</div>

<div v-on:click.self="doThat">...</div>

<a v-on:click.once="doThis"></a>


/*
EXAMPLE: Key modifiers

> only call vm.submit() when the keyCode is 13

> same as above

> custom key modifier -> enable v-on:keyup.f1
	- (look up full list of key modifiers)
*/
<input v-on:keyup.13="submit">

<input v-on:keyup.enter="submit">

Vue.config.keyCodes.f1 = 112

