/*

!! BASIC - DB - DIRECTIVES - FOR LOOP !!

> great for looping through bunch of items
	- displaying a list of items using the data from an Array

*/


/*
EXAMPLE:

1) simple

2) template

3) iterate through the properties of an object

4) value / key & value / key / index
*/
<ul>
	<li v-for="todo in todos" >{{ todo.id }}. {{ todo.text }}</li>
</ul>

data: {
	todos: [
		{ text: 'Learn View', id: 1 },
		{ text: 'Like The Video', id: 2 },
		{ text: 'Do something else', id: 3 }
	]
}


<ul>
	<template v-for="item in items">
		<li>{{ item.msg }}</li>
		<li class="divider"></li>
	</template>
</ul>


<ul id="repeat-object" class="demo">
	<li v-for="value in object">
		{{ value }}
	</li>
</ul>

data: {
	object: {
		  FirstName: 'John',
		  LastName: 'Doe',
		  Age: 30
	}
}


<div v-for="(value, key) in object">
  {{ key }} : {{ value }}
</div>
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }} : {{ value }}
</div>


/*
EXAMPLE: Components

1) Simple with pass the iterated data into the component

2) To do list
*/
<my-component
	v-for="(item, index) in items"
	v-bind:item="item"
	v-bind:index="index">
</my-component>


<div id="todo-list-example">
	<input
		v-model="newTodoText"
		v-on:keyup.enter="addNewTodo"
		placeholder="Add a todo"
	>
	<ul>
		<li
			is="todo-item"
			v-for="(todo, index) in todos"
			v-bind:title="todo"
			v-on:remove="todos.splice(index, 1)"
		></li>
	</ul>
</div>

