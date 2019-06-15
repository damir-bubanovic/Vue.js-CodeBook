/*

!! BASIC - CSS - STYLES BINDING !!

> v-bind:style

*/


/*
EXAMPLES

1) javascript object

2) bind style object directly (better idea)

3) apply multiple style objects to the same element
*/
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data: {
	activeColor: 'red',
	fontSize: 30
}


<div v-bind:style="styleObject"></div>

data: {
	styleObject: {
		color: 'red',
		fontSize: '13px'
	}
}


<div v-bind:style="[baseStyles, overridingStyles]">