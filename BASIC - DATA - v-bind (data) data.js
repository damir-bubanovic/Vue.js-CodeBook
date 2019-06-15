/*

!! BASIC - DB - DIRECTIVES - BIND DATA !!

> exploring v-bind

*/


/*
v-bind

> bind value to attributes instead of just output them to the user
	>> USE -> in second example setting atributes & dynamicly add info
		( instead of src="{{ url }}", you can use v-bind:src="url" )
	- when we hover over it it says 'Boo Yah'
	** shorthand v-bind is : **
*/

<h1 v-bind:title="title" class="text-center">{{ message }}</h1>

data: {
	message: 'Hello My World!',
	title: 'Boo Yah'
}


<img v-bind:src="url" v-bind:alt="title" v-bind:title="title" >
/*shorthand*/
<img :src="url" :alt="title" :title="title" >

data: {
	title: 'You loaded the page on' + new Date(),
	url: 'http://vue.js.org/images/logo.png'
}


/* bind an attribute */
<img v-bind:src="imageSrc">

/* shorthand */
<img :src="imageSrc">

/* with inline string concatenation */
<img :src="'/path/to/images/' + fileName">

/* class binding */
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

/* style binding */
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

/* binding an object of attributes */
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

/* DOM attribute binding with prop modifier */
<div v-bind:text-content.prop="text"></div>

/* prop binding. "prop" must be declared in my-component. */
<my-component :prop="someThing"></my-component>

/* XLink */
<svg><a :xlink:special="foo"></a></svg>