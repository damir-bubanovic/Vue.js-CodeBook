/*

!! BASIC - SYNTAX - DIRECTIVES - TEXT !!


> like in Laravel, in Vue we have shorthand for loops & other known coder functions
	>> THEY ARE CALLED DIRECTIVES <<
> directives are like mini functions
	
> All direcives are similar 	v-directive_name

*/



/*
PLAYING WITH TEXT

1) Standard {{ info }} Bracket Inserting
	>> USE -> If you need to update the part of textContent

2) v-text
	>> USE -> Updates the entire element’s textContent

3) v-html
	>> USE -> Contents are inserted as plain HTML - they will not be compiled as Vue templates
		> Can write & display html tags inside vue variables (app.message = "This is <small>Tiny</small>"
	> like v-text but it inserts actual HTML (like in JavaScript with .innerHTML) (raw HTML)
	>> ALERT <<
		Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead 
		to XSS attacks. Only use HTML interpolation on trusted content and never on user-provided content.
	
4) v-show
	>> USE -> Show or hide elements (boolean)
	> Toggle’s the element’s display CSS property based on the truthy-ness of the expression value
	
5) v-if
	>> USE -> Like v-show but instead of hiding it it pulls elements in / out of DOM (vs hidding or showing element)
	> Conditionally render the element based on the truthy-ness of the expression value
	> can do more interesting stuff with Relational operators (===, !==, ...)
	
6) v-else
	>> USE -> use as if else inside HTML tags
	> if something is true than show it, else show something else
	
7) v-pre
	>> USE -> Skip compilation for this element and all its children (Newer render it)
		** Skipping large numbers of nodes with no directives on them can also speed up compilation **
	> don't render anything inside the element ( shows us {{ This is Message }} )

8) v-once
	>> USE -> 	Render the element and component once only. On subsequent re-renders, the element/component and 
				all its children will be treated as static content and skipped. 
				This can be used to optimize update performance
	> cannot update in browser new message (html stays static)
	
9) v-cloak
	>> USE -> 	This directive will remain on the element until the associated Vue instance finishes compilation. 
				Combined with CSS rules such as [v-cloak] { display: none }, this directive can be used to hide 
				un-compiled mustache bindings until the Vue instance is ready
	> add to a lot of your directive - REALY GREAT
	> hides {{ }} with message until the page is loaded & than displayes it

*/
<h1>{{ message }}</h1>

<h1 v-text="message" ></h1>

<h1 v-html="message" ></h1>

<h1 v-show="viewed" >You Have Viewed This Page</h1>
data: {
	viewed: true
}

<h1 v-if="viewed1 == viewed2" >You Have Viewed This Page</h1>
data: {
	viewed: true
}
/*OR*/
<h1 v-if="" >You Have Viewed This Page</h1>
data: {
	viewed1: true
	viewed2: false
}

<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
/*OR*/
<h1 v-if="viewed1" >You Have Viewed This Page</h1>
<h1 v-else >You Have Viewed This Page</h1>

<h1 v-pre >{{ message }}</h1>

<h1 v-once >{{ message }}</h1>

<h1 v-cloak >{{ message }}</h1>
[v-cloak] {	/*CSS*/
  display: none;
}