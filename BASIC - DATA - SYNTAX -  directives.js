/*

!! BASIC - DATA - SYNTAX - DIRECTIVES !!

> special attributes with the v- prefix

*/

/*
EXAMPLE: basic

> remove / insert p element based of true or false
*/
<p v-if="seen">Now you see me</p>


/*
EXAMPLE: Argument

> “argument”, denoted by a colon after the directive name

1) v-bind directive is used to reactively update an HTML attribute
2) v-on directive, which listens to DOM events
*/
<a v-bind:href="url"></a>

<a v-on:click="doSomething">


/*
EXAMPLE: Modifiers

> special postfixes denoted by a dot, which indicate that a directive 
should be bound in some special way

1) .prevent modifier tells the v-on directive to call event.preventDefault() on the triggered event
*/
<form v-on:submit.prevent="onSubmit"></form>