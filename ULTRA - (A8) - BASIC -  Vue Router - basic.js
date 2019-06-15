/**
 * ULTRA - BASIC - Vue Router
 *
 * > INSTALL
 *		> command prompt > npm install --save vue-router
 *		- saves vue-router in package.json > dependancies
 */
 

/*app.js*/
/**
 * Vue Router
 * 1) import vue-router
 * 2) Vue.use - add VueRouter as a plugin
 * 3) define const - components
 * 4) setup routes
 *      - path - referes to the url after the domain
 * 5) get routes to our aplication via const router
 *		- mode - for removing # from url
 * 6) setup router to const app
 */
import Router from 'vue-router';

Vue.use(Router);


const Home = Vue.component('home', require('./components/Home.vue'));
const Users = Vue.component('users', require('./components/Users.vue'));
const Kitty = Vue.component('kitty', require('./components/Kitty.vue'));

const routes = [
    { path: '/', component: Home },
    { path: '/users', component: Users },
    { path: '/kitty', component: Kitty }
]

const router = new Router({
    mode: 'history',
    routes: routes
})

const app = new Vue({
    el: '#app',
    router: router
});


/*Welcome page*/
<div id="app">

	<h1>Hello App!</h1>
	<p>
		<router-link to="/">Go to Home</router-link>
		<router-link to="/users">Go to Users</router-link>
		<router-link to="/kitty">Go to Kitty</router-link>
	</p>
	<router-view></router-view>

</div>


