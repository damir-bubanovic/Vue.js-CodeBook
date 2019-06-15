/**
 * ULTRA - BASIC - Computed Properties & Style Binging
 *
 * 1) Display list only if there are items in list, conditional data
 * 2) Class binding - css style completed is set to false (not displaying style)
 *      - bind class based on data object
 *      - set class completed in todo.completed is true = result = only first todo has completed style
 *      (You can play where to set completed as true)
 * 3) Computed Properties - they can handle data can return additional properties which we can return to the function
 *      3.1) simple - (minimal logic) -> Show the count of todo objects
 *      3.2) complex - (logic)
 *          - create computed propery with todoCount method
 *          - call todoCount method
 *          - if/else todoCount() if number of items is greater than 5 return too many
 * 4) Task - create a button that adds green button & text to the completed task, & red color & strikethrough to pending task 
 *      (idealy this logic should go to computed)
 *      4.1) create todoCompleted() method that inverses the css (true/false)
 *      4.2) create a button on each task when clicking it calls todoCompleted() method
 *          - login if todo.completed is true = 'Completed', else 'Pending'
 *          - add different stlye buttons btn-success if todo.completed is true & btn-danger in todo.completed is false
 */
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <!--
                3.1) Simple computed property
                <h1>My Todos {{ todos.length }}</h1>
                -->
                <!-- 3.2) Compley computed property -->
                <h1>My Todos <small>{{ todoCount }}</small></h1>
                <!-- 1) Display -->
                <ul class="list-group" v-if="todos.length > 0">
                    <li class="list-group-item" v-for="todo in todos" v-bind:class="{'completed': todo.completed}">
                        Number {{ todo.id }}. You have to {{ todo.title }}
                        <button class="btn btn-warning pull-right" v-on:click="deleteTodo(todo)">Delete</button>
                        <!-- 4.2)  -->
                        <button class="btn pull-right"
                            v-bind:class="{'btn-success' : todo.completed, 'btn-danger' : !todo.completed}"
                            v-on:click="todoCompleted(todo)"
                        >
                            {{todo.completed ? 'Completed' : 'Pending'}}
                        </button>
                    </li>
                </ul>
                <!-- 1) Display -->
                <div v-else>You have no todos</div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form role="form" v-on:submit.prevent="addNewTodo(newTodo)">
                    <legend>Add Task to Todos</legend>
                    <div class="form-group">
                        <input type="text" class="form-control" id="" placeholder="Input field" v-model="newTodo.title">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                /**
                 * 2) Class binding
                 */
                todos: [
                    { id: 1, title: 'Go shopping!', completed: true }
                ],
                newTodo: { id: null, title: '', completed: false }
            }
        },
        /**
         * 3.2) Computed property
         * - returns number od list items in todos list
         */
        computed: {
            todoCount() {
                if(this.todos.length <= 5) {
                    return this.todos.length;
                } else {
                    return 'Too many to count'
                }
            }
        },
        methods: {
            /**
             * 2) Class binding (css completed)
             */
            addNewTodo(newTodo) {
                this.todos.push(newTodo);
                this.newTodo = { id: null, title: '', completed: false }
                // console.log(newTodo);
            },
            deleteTodo(todo) {
                this.todos.splice(todo, 1);
                // console.log(todo);
            },
            /**
             * 4.1) inverse css rule
             */
            todoCompleted(todo) {
                todo.completed = !todo.completed
            }
        }
    }
</script>

<style>
    li.completed {
        text-decoration: line-through;
    }
</style>