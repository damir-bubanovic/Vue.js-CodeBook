/*

!! BASIC - FORM - INPUT - VALUE BINDING !!

> bind the value to a dynamic property on the Vue instance

*/


/*
EXAMPLE: 

1) Checkbox

2) Radio

3) Select Options
*/
<input
	type="checkbox"
	v-model="toggle"
	v-bind:true-value="a"
	v-bind:false-value="b"
>

// when checked:
vm.toggle === vm.a
// when unchecked:
vm.toggle === vm.b



<input type="radio" v-model="pick" v-bind:value="a">

// when checked:
vm.pick === vm.a



<select v-model="selected">
  <!-- inline object literal -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>

// when selected:
typeof vm.selected // -> 'object'
vm.selected.number // -> 123