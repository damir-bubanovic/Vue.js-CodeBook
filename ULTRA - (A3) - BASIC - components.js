/**
 * ULTRA - BASIC - Components
 *
 * 1) Nisam siguran da ti je ovo toliko potrebno
 *  - https://www.youtube.com/watch?v=YglTalMi83g&list=PLkZU2rKh1mT-FVgtePvwmApoX-bWhwhau&index=3
 *
 * 2) Props
 *      - child component will get a property from the paretn component & can use that property
 *      !! Important !! - parent directory
 *      > if passing a string <todo-item todos="todos"></todo-item>
 *      > if passing a object <todo-item v-bind:todos="todos"></todo-item> - to child
 */

/**
 * Write template like this or like this
 */
var TodoItems = Vue.extend({
    template: '#todo-items-template',
    props: ['todos'],
    methods {
        // can have methods here
    }
});
<template id="todo-items-template"></template>
<todo-items-template></todo-items-template>


Vue.component('todo-item', TodoItems);


/**
 * New Vue Instance
 */
new Vue({
    el: '#vue-app'
});