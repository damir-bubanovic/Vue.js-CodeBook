/**
 * ULTIMATE - BASIC - Input / Output
 *
 * 1) todos - array with object values
 * 2) iterate through the todos values
 *      2.1) specify witch values in todos > array > object to display
 * 3) see current data object without console.log
 * 4) initialize new empty item - in our case new object to go to todos array
 *      4.1) form to add a newTodo object in todos array
 *      4.2) on form submit run function/methods addNewTodo that pushes newTodo object values to the todos array
 *      4.3) prevent reloading page - when working with axios this will not be a problem
 *      4.4) method addNewTodo() to add netTodo
 *          4.4.1) Clear input field
 *      4.5) input newTodo.title for todos array (model with the exact key for the newTodo object)
 * 5) delete toto object from todos array on button click (calling a method deleteTodo)
 */
<template>
    <div class="container">
        <!-- 3)
        <pre>{{ $data|json }}</pre>
        -->
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>My Todos</h1>
                <ul class="list-group">
                    <!-- 2) iterate through todos -->
                    <li class="list-group-item" v-for="todo in todos">
                        <!-- 2.1) values -->
                        Number {{ todo.id }}. You have to {{ todo.title }}
                        <button type="submit" class="btn btn-danger pull-right" v-on:click="deleteTodo(todo)">Delete</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <!-- 4.1) & 4.2) 4.3)-->
                <form role="form" v-on:submit.prevent="addNewTodo(newTodo)">
                    <legend>Add Task to Todos</legend>
                    <div class="form-group">
                        <!-- 4.5) -->
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
                 * 1) todos array
                 */
                todos: [
                    { id: 1, title: 'Go shopping!' },
                    { id: 2, title: 'Go Fuck Yoursel!' },
                    { id: 3, title: 'Go smarting!' },
                ],
                /**
                 * 4) new todo object
                 */
                newTodo: { id: null, title: '' }
            }
        },
        methods: {
            /**
             * 4.4) & 4.4.1) Method to add new object to todos array
             */
            addNewTodo(newTodo) {
                this.todos.push(newTodo);
                this.newTodo = { id: null, title: '' }
                // console.log(newTodo);
            },
            /**
             * 5) delete specific todo object
             */
            deleteTodo(todo) {
                this.todos.splice(todo, 1);
                // console.log(todo);
            }
        }
    }
</script>
