/**
 * ULTRA - GMAPS - MAP CONTAINER
 * > set google maps height
 * 0) add google maps to header 
		<script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6DGiJ9ZOK-m9-5ES0YLvcHk6AMWP5tg4&v=3">
        </script>
 * 1) vue template
 * 2) vuex initilize map
 */
/*Maps Template*/
<template>
    <div class="map-container">
        <div v-bind:style="{ height: googleMapsHeight + 'px' }" id="map"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            /**
             * Initialize Google Map
             */
            this.$store.dispatch('googleMap');
        },
        computed: {
            /**
             * Google Maps Height
             * > calculate height of google map depending on window height & rounded to first round number
             */
            googleMapsHeight() {
                var height = (70 / 100) *window.innerHeight;
                var mapHeight = Math.floor(height);
                return mapHeight;
            }
        }
    }
</script>

<style>
    .map-container {
        width: 100%;
    }
</style>


/*Vuex*/
const state = {
    zoom: 9,
    center: {
        lat: 45.80,
        lng: 15.97
    }
}

const mutations = {
    GOOGLE_MAP(state) {
        /**
         * Create Google Map
         * > get element id
         * > set zoom & center options
         * > create map
         */
        const element = document.getElementById('map');
        const options = {
            zoom: state.zoom,
            center: new google.maps.LatLng(state.center.lat, state.center.lng)
        }
        const map = new google.maps.Map(element, options);
    }
}

const actions = {
    googleMap({ commit }) {
        commit('GOOGLE_MAP');
    },
}

export default {
    state,
    mutations,
    actions
}