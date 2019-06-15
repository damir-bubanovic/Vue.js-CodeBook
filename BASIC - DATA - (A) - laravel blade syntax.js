/**
 * BASIC - DATA - WRITE IN LARAVEL BLADE
 *
 * - use @{{  }} - to output data
 * 1) app.js
 * 2) welcome.blade.php
 *
 * !! Outputs name but with an delay !!
 */
const app = new Vue({
    el: '#app',
    data: {
        name: 'Learning Vue.js'
    }
});

<h3 class="text-center">@{{ name }}</h3>