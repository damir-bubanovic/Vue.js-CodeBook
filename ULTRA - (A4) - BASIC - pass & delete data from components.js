/**
 * ULTRA - BASIC - Pass & Delete Data from Components
 *
 * - $emit - emits data from parent to child & can be used to communicate between siblings
 * 1) Component 1 (SISTER) - add form input
 * 2) Main component (PARENT) - store data & receive new data for sending
 *		-> data comes from sister, is pushed to array of objects, & send to brother for displaying
 * 3) Component 1 (BROTHER) - display list data
 *		-> watch out for removing objects, a little bit of tricky, have to use index
 *
 * * DETAILED EXPLANATION IS ON PREVIOUS LESSONS
 */
 
/**
 * 1) SISTER
 */
<template>
    <div>
        <ul class="list-group">
            <li
                v-for="todo in todos"
                class="list-group-item"
                v-bind:class="{ 'completed' : todo.completed }"
                >
                    {{todo.title}}
                    <button class="btn btn-xs pull-right margin-right-10 btn-danger"
                        v-on:click="todoDelete(todo)"
                    >
                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </button>
                    <button class="btn btn-xs pull-right margin-right-10"
                        v-bind:class="{'btn-success' : todo.completed, 'btn-warning' : !todo.completed}"
                        v-on:click="todoCompleted(todo)"
                    >
                        {{todo.completed ? 'Completed' : 'Pending'}}
                    </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['todos'],
        methods: {
            todoCompleted(todo) {
                todo.completed = !todo.completed
            },
            todoDelete(todo) {
				/*Could use Vue.delete(this.items, index)*/
                var index = this.todos.indexOf(todo);
                this.todos.splice(index, 1);
            }
        }
    }
</script>

/**
 * 2) PARENT
 */
<h1>My Todos</h1>
<todo-item v-bind:todos="todos"></todo-item>

<todo-add-form v-on:emitter="newTodo"></todo-add-form>


Vue.component('todo-item', require('./components/Todo/TodoItems.vue'));
Vue.component('todo-add-form', require('./components/Todo/TodoAddForm.vue'));

const app = new Vue({
    el: '#app',
    data: {
        todos: [{id: 1, title: 'Go Shopping', completed: true}],
    },
    methods: {
        newTodo(todoitem) {
            this.todos.push({
                id: Math.floor(Date.now()),
                title: todoitem.title,
                completed: false
            });
        }
    }
});

/**
 * 3) BROTHER
 */
<template>
    <div>
        <ul class="list-group">
            <li
                v-for="todo in todos"
                class="list-group-item"
                v-bind:class="{ 'completed' : todo.completed }"
                >
                    {{todo.title}}
                    <button class="btn btn-xs pull-right margin-right-10 btn-danger"
                        v-on:click="todoDelete(todo)"
                    >
                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </button>
                    <button class="btn btn-xs pull-right margin-right-10"
                        v-bind:class="{'btn-success' : todo.completed, 'btn-warning' : !todo.completed}"
                        v-on:click="todoCompleted(todo)"
                    >
                        {{todo.completed ? 'Completed' : 'Pending'}}
                    </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['todos'],
        methods: {
            todoCompleted(todo) {
                todo.completed = !todo.completed
            },
            todoDelete(todo) {
                var index = this.todos.indexOf(todo);
                this.todos.splice(index, 1);
            }
        }
    }
</script>
