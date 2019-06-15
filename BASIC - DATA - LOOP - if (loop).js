/*

!! BASIC - DB - DIRECTIVES - IF (LOOP) !!

EXAMPLE: Toggle the presence of element

*/
<div id="app-3">
	<p v-if="seen">Now you see me</p>
</div>

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true;
	}
})


/*
EXAMPLES

1) simple if
2) if / else
	
3) if on template

4) if / else with js logic
*/
<h1 v-if="ok">Yes</h1>


<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>


<template v-if="ok">
	<h1>Title</h1>
	<p>Paragraph 1</p>
	<p>Paragraph 2</p>
</template>


<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>