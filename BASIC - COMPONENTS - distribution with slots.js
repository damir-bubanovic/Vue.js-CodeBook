/*

!! CONTENT DISTRIBUTION WITH SLOTS !!

> content distribution - a way to interweave the parent “content” and the component’s own template
	- uses the special <slot> element to serve as distribution outlets for the original content

RULE:
	Everything in the parent template is compiled in parent scope.
	Everything in the child template is compiled in child scope.
	
> standard composing of components

*/
<app>
	<app-header></app-header>
	<app-footer></app-footer>
</app>


/*
EXAMPLE: Single Slot

> Parent content will be discarded unless the child component template contains at least one <slot> outlet
*/
<div>
	<h2>I'm the child title</h2>
	<slot>
		This will only be displayed if there is no content
		to be distributed.
	</slot>
</div>

// parent that uses the component
<div>
	<h1>I'm the parent title</h1>
	<my-component>
		<p>This is some original content</p>
		<p>This is some more original content</p>
	</my-component>
</div>

// rendering
<div>
	<h1>I'm the parent title</h1>
	<div>
		<h2>I'm the child title</h2>
		<p>This is some original content</p>
		<p>This is some more original content</p>
	</div>
</div>



/*
EXAMPLE: Names Slots

> <slot> elements have a special attribute, name, which can be used to further customize how 
content should be distributed. 
	- You can have multiple slots with different names.
*/
<div class="container">
	<header>
		<slot name="header"></slot>
	</header>
	
	<main>
		<slot></slot>
	</main>
	
	<footer>
		<slot name="footer"></slot>
	</footer>
</div>

// parent markup
<app-layout>
	<h1 slot="header">Here might be a page title</h1>
	<p>A paragraph for the main content.</p>
	<p>And another one.</p>
	<p slot="footer">Here's some contact info</p>
</app-layout>

// rendering
<div class="container">
	<header>
		<h1>Here might be a page title</h1>
	</header>
	
	<main>
		<p>A paragraph for the main content.</p>
		<p>And another one.</p>
	</main>
	
	<footer>
		<p>Here's some contact info</p>
	</footer>
</div>



/*
EXAMPLE: Scoped Slot

> functions as a reusable template (that can be passed data to) instead of already-rendered-elements
*/
<div class="child">
	<slot text="hello from child"></slot>
</div>

// EXAMPLE
<div class="parent">
	<child>
		<template scope="props">
			<span>hello from parent</span>
			<span>{{ props.text }}</span>
		</template>
	</child>
</div>

// render
<div class="parent">
	<div class="child">
		<span>hello from parent</span>
		<span>hello from child</span>
	</div>
</div>




