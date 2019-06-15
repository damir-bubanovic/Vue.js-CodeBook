/**
 * ULTRA - BASIC - VUEX
 *
 * 1) INTALL
 *		-> in package.json -> dependencies -> vuex
 * 2) APPLICATION STRUCTURE
 *		- for complex aplication best practive
 *
 * 3) BASIC App.vue
 *
 * 4) BASIC app.js - with components
 *
 * 4) STORE with expanations
 *		- rest of the code in vue look up code_practices - code repository
 *
 * - look up examples vuex in local XXX_code_practices repository & official example from vuex
 */


npm install vuex --save


├── index.html
├── main.js
├── api
│   └── ... # abstractions for making API requests
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
        ├── cart.js       # cart module
        └── products.js   # products module
		
		
<template>
    <div id="my-todo" class="container">
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
</style>


/**
 * Vuex
 * 1) app & store
 * 2) todos components
 */
Vue.component('my-app', require('./App.vue'));

import store from './store/store';

Vue.component('completed-todos', require('./components/CompletedTodos.vue'));


const app = new Vue({
    el: '#app',
    store: store
});


/**
 * BASIC REGUIREMENTS
 * - import vue & vuex
 * - Vue.use - add vuex as a plugin
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    /**
     * STATE (STATE = COMPUTED)
     * - current state of data on page load / when the app starts up
     * - initial values of data
     */
    state: {
        todos: [],
        newTodo: ''
    },
    /**
     * GETTERS (STATE = GETTERS = COMPUTED)
     * - computed properties for stores
     * - used for storing additional logic so the component computed method only references it
     * - ALWAYS returnes something (gets something)
     */
    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos.filter((todo) => {
            return !todo.completed;
        }),
        completedTodos: state => state.todos.filter((todo) => {
            return todo.completed;
        })
    },
    /**
     * MUTATIONS (STATE = MUTATIONS = METHODS)
	 * - they are basically events
     * - manipulating state (mutate / change state)
     * - it receives the current state & parameter (payload = can be object or just a value) & mutates it
     */
    mutations: {
        GET_TODO(state, todo){
            state.newTodo =  todo;
        },
        ADD_TODO(state){
            state.todos.push({
                body: state.newTodo,
                completed: false
            });
        },
        EDIT_TODO(state, todo){
            var todos = state.todos;
            todos.splice(todos.indexOf(todo), 1)
            state.todos = todos;
            state.newTodo = todo.body;
        }
    },
    /**
     * ACTIONS
	 * - actions are functions that dispatch mutations
     * - for executing async code
     *          => Instead of mutating the state, actions commit mutations.
     *          => Actions can contain arbitrary asynchronous operations.
     *
     * - usefull for HTTP calls & getting values for commit
     *
     * -> in example we are commiting register mutations method
     * -> asyn code with setTimeout
     */
    actions: {
        getTodo({commit}, todo){
            commit('GET_TODO', todo);
        },
        addTodo({commit}){
            commit('ADD_TODO');
        },
        editTodo({commit}, todo){
            commit('EDIT_TODO', todo);
        }

    }

})