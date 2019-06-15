/**
 * ULTRA - GMAPS - MARKER - ASYNC
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
                <button type="button" class="btn btn-default" v-on:click="getGpsPos">button</button>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <button type="button" class="btn btn-default" v-on:click="setMarker">marker</button>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <button type="button" class="btn btn-default" v-on:click="stopMarker">stop</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                /**
                 * STARTING VALUES
                 * > Current location - lat & lng
                 * > map
                 * > marker
                 * > marker id (for watching geolocation)
                 */
                currentLoc: {
                    lat: null,
                    lng: null
                },
                map: null,
                marker: null,
                markerid: null,
            }
        },
        mounted() {
            /**
             * Initialize map
             */
            this.googleMaps();
        },
        methods: {
            googleMaps() {
                /**
                 * Set google Map paremeters
                 */
                this.map = new google.maps.Map(document.getElementById('map'), {
                    center: { lat: 45.80, lng: 16.09 },
                    zoom: 9
                });
            },
            gpssuccess(position) {
                /**
                 * Set longitude & latitude of current position
                 * @type {[type]}
                 */
                this.currentLoc.lat = position.coords.latitude;
                this.currentLoc.lng = position.coords.longitude;

                console.log(this.currentLoc.lat);
                console.log(this.currentLoc.lng);
                console.log(this.markerid);
            },
            gpserror() {
                alert('Sorry, no position available!');
            },
            getGpsPos() {
                /**
                 * Initialize watching current position (LOOK UP OPTIONS MORE)
                 * > high accuracy - best possible results - slower response & more power consumption
                 * > maximumAge - max time devide is allowed for returning position
                 * > timeout - max time to return cached position
                 * > watch user position
                 */
                var options = {
                    enableHighAccuracy: true,
                    maximumAge        : 20000,
                    timeout           : 19000
                };
                if(navigator.geolocation) {
                    this.markerid = navigator.geolocation.watchPosition(this.gpssuccess, this.gpserror, options);
                } else {
                    alert('Please enable Geolocation in Browser!');
                }

            },
            setMarker() {
                /**
				 * Marker
				 * > markerIcon > anchor > 0 0 is starting position (like origin) but for image
				 *						 > first number left right, second up down (18, 0)
				 *						 > you can center image depending on the size
				 * > create marker & set it on a map
				 * > scaledSize > height & width of marker
				 */
                // var pos = new google.maps.LatLng(this.currentLoc.lat, this.currentLoc.lng);

                // this.marker = new google.maps.Marker({
                //     position: pos,
                //     map: this.map
                // });

                // this.marker.setMap(this.map);
                var markerIcon = {
                    url: 'img/my-location.png',
                    scaledSize: new google.maps.Size(36, 36),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(18,32)
                };

                this.marker = new MarkerWithLabel({
                    map: this.map,
                    position: new google.maps.LatLng(this.currentLoc.lat, this.currentLoc.lng),
                    icon: markerIcon
                });
            },
            stopMarker(position) {
                /**
                 * Marker Remove
                 * > remove watching current position
                 * > set marker id to null
                 * > remove marker from the map
                 */
                console.log(this.markerid);

                navigator.geolocation.clearWatch(this.markerid);
                this.markerid = null;
                this.marker.setMap(null);

                console.log(this.markerid);
            }

        }

    }

</script>