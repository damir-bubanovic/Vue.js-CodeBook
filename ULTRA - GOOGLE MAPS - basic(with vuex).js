/**
 * ULTRA - GOOGLE MAPS - BASIC (WITH VUEX)
 * > can be used to reload & initialize map at any moment
 */

 
/*MAPS Template*/
<template>
    <div class="map-container">
        <div v-bind:style="{ height: googleMapsHeight + 'px' }" id="map"></div>
        <br>
        <el-button type="primary" v-on:click="zoomIn">Zoom in</el-button>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.googleMaps();
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
            },
            zoom() {
                return this.$store.state.maps.zoom
            },
            center() {
                return this.$store.state.maps.center
            }
        },
        methods: {
            googleMaps() {
                /**
                 * Create Google Map
                 * > get element id
                 * > set zoom & center options
                 * > create map
                 */
                const element = document.getElementById('map');
                const options = {
                    zoom: this.zoom,
                    center: new google.maps.LatLng(this.center.lat, this.center.lng)
                }

                const map = new google.maps.Map(element, options);
            },
            zoomIn() {
                this.$store.dispatch('zoomIn');
                this.googleMaps();
            }
        }
    }
</script>

<style>
    .map-container {
        width: 100%;
    }
</style>


/*Vuex - store > modules > maps*/
const state = {
    zoom: 9,
    center: {
        lat: 45.80,
        lng: 15.97
    }
}

const mutations = {
    ZOOM_IN(state) {
        state.zoom = 12;
        state.center.lat = 45.80;
        state.center.lng = 15.70;
    }
}

const actions = {
    zoomIn({ commit }) {
        commit('ZOOM_IN');
    }
}


export default {
    state,
    mutations,
    actions
}