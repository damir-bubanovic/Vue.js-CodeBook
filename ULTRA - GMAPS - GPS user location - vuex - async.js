/**
 * ULTRA - GMAPS - GPS USER LOCATION - VUEX - ASYNC
 * > use external library - tutorial 
 *		https://medium.com/@barvysta/google-marker-api-lets-play-level-1-dynamic-label-on-marker-f9b94f2e3585
 *		https://github.com/googlemaps/v3-utility-library/tree/master/markerwithlabel
 */

/*Maps Template*/
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2 class="text-center">Testing google maps</h2>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div id="map" v-bind:style="{ height: 500 + 'px', width: 100 + '%' }"></div>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <button type="button" v-bind:class="{ pressed: isPressed }" class="btn" v-on:click="userLocation">Get User Location</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch('googleMap');
        },
        computed: {
            isPressed() {
                return this.$store.state.maps.locationButton
            }
        },
        methods: {
            userLocation() {
                this.$store.dispatch('userLocation');
            },
        }

    }
</script>

<style>
    .pressed {
        background-color: red;
    }
</style>


/*Vuex - Maps*/
<script>
	/**
	 * USERS
	 */
	const state = {
		locationButton: false,
		currentLoc: {
			lat: null,
			lng: null
		},
		map: null,
		marker: null,
		markerid: null,
	}

	const mutations = {
		GOOGLE_MAP(state) {
			/**
			 * Google Map
			 * > Create a map
			 */
			state.map = new google.maps.Map(document.getElementById('map'), {
				center: { lat: 45.80, lng: 16.09 },
				zoom: 9
			});
		},
		SHOW_USER_LOCATION(state) {
			/**
			 * User Location Marker
			 * > markerIcon > anchor >
			 *     > 0 0 is starting position (like origin) but for image
			 *     > first number left right, second up down (18, 0)
			 *     > you can center image depending on the size
			 * > location button pressed
			 */
			var markerIcon = {
				url: 'img/my-location.png',
				scaledSize: new google.maps.Size(36, 36),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(18,32)
			};

			state.marker = new MarkerWithLabel({
				map: state.map,
				position: new google.maps.LatLng(state.currentLoc.lat, state.currentLoc.lng),
				icon: markerIcon
			});

			state.locationButton = true;
		},
		USER_LOCATION_ERROR() {
			alert('Geolocation service not available');
		},
		REMOVE_USER_LOCATION() {
			/**
			 * Remove User Location Marker
			 * > stop navigation watch services
			 * > remove marker from map
			 * > set marker id, lat & lng to null
			 * > location button un-pressed
			 */
			navigator.geolocation.clearWatch(state.markerid);
			state.marker.setMap(null);
			state.markerid = null;
			state.currentLoc.lat = null;
			state.currentLoc.lng = null;
			state.locationButton = false;
		}

	}

	const actions = {
		googleMap({ commit }) {
			commit('GOOGLE_MAP');
		},
		userLocation({ commit }) {
			/**
			 * User Location Navigator
			 * > toggle user location button
			 * > if geolocation if enabled in browser set current lat & lng
			 * > set user location marker id & commit to marker
			 */
			if(state.locationButton) {
				commit('REMOVE_USER_LOCATION');
			} else {
				if ('geolocation' in navigator) {
					state.markerid = navigator.geolocation.watchPosition(function(position) {
						state.currentLoc.lat = position.coords.latitude;
						state.currentLoc.lng = position.coords.longitude;
						commit('SHOW_USER_LOCATION')
					});
				} else {
					commit('USER_LOCATION_ERROR')
				}
			}
		}

	}


	export default {
		state,
		mutations,
		actions
	}
</script>