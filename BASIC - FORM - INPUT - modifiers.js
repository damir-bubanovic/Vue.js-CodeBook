/*

!! BASIC -FORM - INPUT - MODIFIERS !!

> By default, v-model syncs the input with the data after each input event

*/

/*
EXAMPLE: 

1) add the lazy modifier to instead sync after change events / instead of input

2) automatically typecast as a number
	- returns as number not string
	
3) user input to be trimmed automatically
*/
<input v-model.lazy="msg" >

<input v-model.number="age" type="number">

<input v-model.trim="msg">