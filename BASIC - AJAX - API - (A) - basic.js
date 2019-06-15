/*

!! BASIC - AJAX - API - BASIC !!


> when working with the API always use axios
	>> AXIOS - HTTP library for JavaScript for Laraval
				** https://github.com/mzabriskie/axios **
	>> Guzzle - HTTP library for PHP for Laravel
	
> Lodash - helper library for JavaScript functions (missing JS functions)

*/


/*
EXAMPLE: Get Zip Code from external API
*/

<input type="text" class="form-control" placeholder="Starting Zip" v-model="startingZip">
<span class="city-span" >{{ startingCity }}</span>

<input type="text" class="form-control" placeholder="Ending Zip" v-model="endingZip">
<span class="city-span" >{{ endingCity }}</span>


var app = new Vue({
	el: '#app',
	/**
	 * 1) SETUP DATA MODELS
	 *
	 * > we need 4 values/objects (start & end zip code, start & end city/state)
	 * - link them to the HTML
	 */
	data: {
		startingZip: '',
		startingCity: '',
		endingZip: '',
		endingCity: ''
	},
	/**
	 * 2) RUN A METHOD ONLY WHEN SOMETHING HAPPENDS
	 *
	 * > in our case when the user input zip code has 5 digits
	 * - watch startingZip & endingZip & do things when it changes
	 *     - if someone changes zip code erase the value of startingCity
	 *     - make sure it's 5 digits, if it is call api method
	 */
	watch: {
		startingZip: function() {
			this.startingCity = '';
			if(this.startingZip.length == 5) {
				this.lookupStartingZip()
			}
		}
	},
	/**
	 * 3) SETUP CUSTOM METHODS
	 *
	 * - lookupStartingZip -> is where we input API request
	 *     - var app - because of inheritance we have to create new variable that can access this
	 *     - _.debounce    -> wait a second before we initialize request (lodash function)
	 *                     -> wait before a certain time has accured instead running a function immediately
	 *                     after user inputs 5 numbers (waiting interval), in our case 0,5 sec
	 *                     -> saves on api requests, saves on server processes...
	 *     - Searching...  -> we do not know how long we have to wait for the API response, so to let users
	 *                     know that something is happening we set the value of starting city as "Searching"
	 *     - axios.get @method -> get request to API with startingZip code (look up specific API documentation)
	 *                         -> then when we get the response, set the valus of startingCity
	 *                         -> look up JSON response to see what we need
	 *                         -> catch - if there is an error than display it to the user
	 *
	 *
	 * ** Do this for our ending zip code **
	 */
	methods: {
		lookupStartingZip: _.debounce(function() {
			var app = this;
			app.startingCity = "Searching...";
			axios.get('http://ZiptasticAPI.com/' + app.startingZip)
					.then(function(response) {
						app.startingCity = response.data.city + ', ' + response.data.state;
					})
					.catch(function(error) {
						app.startingCity = "Invalid Zipcode";
					})
		}, 500)
	}
})