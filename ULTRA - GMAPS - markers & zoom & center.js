/**
 * ULTRA - GMAPS - MARKERS & ZOOM & CENTER
 * > use external library - tutorial 
 *		https://medium.com/@barvysta/google-marker-api-lets-play-level-1-dynamic-label-on-marker-f9b94f2e3585
 *		https://github.com/googlemaps/v3-utility-library/tree/master/markerwithlabel
 * > modify zoom & center
 * > add markers
 * >> ALERT <<
 *      - can do it only with reloading entire map
 */
/*Maps Template*/
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
        },
        methods: {
            zoomIn() {
                this.$store.dispatch('zoomIn');
            }
        }
    }
</script>

<style>
    .map-container {
        width: 100%;
    }
    .refuge-marker {
        width: 150px;
        height: 20px;

        border: 1px solid #EBE53A;
        border-radius: 5px;
        background: #EBE53A;
        text-align: center;
        line-height: 20px;
        font-weight: bold;
        font-size: 14px;
        color: black;
    }
</style>


/*Vuex - Maps*/
const state = {
    zoom: 9,
    center: {
        lat: 45.80,
        lng: 15.97
    },
    markers: []
}

const mutations = {
    ZOOM_IN(state) {
        /**
         * Zoom In
         * > populate marker list
         * > set new zoom level
         * > set google maps center to first marker lat & lng in marker list
         */
        state.markers = [
            { name: 'Marker 1', lat: 45.78, lng: 15.69 },
            { name: 'Marker 2', lat: 45.82, lng: 15.72 },
        ];
        state.zoom = 12;
        state.center.lat = state.markers[0].lat;
        state.center.lng = state.markers[0].lng;
    },
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

        /**
         * Markers
         * > loop for each marker
		 * > markerIcon > anchor > 0 0 is starting position (like origin) but for image
		 *						 > first number left right, second up down (18, 0)
		 *						 > you can center image depending on the size
         */
        var markerIcon = {
            url: 'images/cabin.png',
            scaledSize: new google.maps.Size(36, 36),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(10,50)
        };

        if(state.markers[0] != null) {
            state.markers.forEach(function(googlemarker) {
                var marker = new MarkerWithLabel({
                    map: map,
					// position: new google.maps.LatLng(googlemarker.lat, googlemarker.lng), IF BELOW DOESN NOT WORK
                    position: {lat: googlemarker.lat, lng: googlemarker.lng},
                    icon: markerIcon,
                    labelContent: googlemarker.name,
                    labelAnchor: new google.maps.Point(70, 12),
                    labelClass: "refuge-marker",
                    labelInBackground: true
                });
            });
        }

        /**
         * Restrict Zoom Out Level & Add Boundaries to Map
         * > bounds for Croatia
         *     - South-West
         *     - North-East
         * > listen for the dragend event & reposition
         *     - if we're out of bounds - Move the map back within the bounds
         * > Limit the zoom level
         */
        const strictBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(42.27, 13.40),
            new google.maps.LatLng(46.58, 19.42)
        );

        google.maps.event.addListener(map, 'dragend', function() {
            if (strictBounds.contains(map.getCenter())) return;

            var c = map.getCenter(),
                x = c.lng(),
                y = c.lat(),
                maxX = strictBounds.getNorthEast().lng(),
                maxY = strictBounds.getNorthEast().lat(),
                minX = strictBounds.getSouthWest().lng(),
                minY = strictBounds.getSouthWest().lat();

            if (x < minX) x = minX;
            if (x > maxX) x = maxX;
            if (y < minY) y = minY;
            if (y > maxY) y = maxY;

            map.setCenter(new google.maps.LatLng(y, x));
        });

        google.maps.event.addListener(map, 'zoom_changed', function() {
            if (map.getZoom() < 9) {
                map.setZoom(9);
            }
        });
    }
}

const actions = {
    zoomIn({ commit }) {
        commit('ZOOM_IN');
        commit('GOOGLE_MAP');
    },
    googleMap({ commit }) {
        commit('GOOGLE_MAP');
    },
}

export default {
    state,
    mutations,
    actions
}