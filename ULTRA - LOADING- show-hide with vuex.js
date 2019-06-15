/*

!! ULTRA - LOADING - SHOW - HIDE WITH VUEX !!

> Use Element IU library
	-> not need for library elements can use on <p v-loading="loading"></p>

*/

<template>
    <div>
        <h3>Enter Route Name & Gps Data</h3>
        <div class="row" v-loading="loading">
            <div class="row">
                <!-- Upload Route GPS data File -->
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <input id="file" type="file" class="form-control"/>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button type="submit" class="btn btn-primary" v-on:click="uploadFile">Upload GPS data</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            /**
             * Loading Spinner on GPS Route Data File
             */
            loading() {
                return this.$store.state.loadingGPSRouteFile;
            }
        },
        methods: {
            /**
             * Upload File
             * > send data to vuex
             */
            uploadFile(file) {
				/*.....*/
                this.$store.dispatch('postRouteKML', data);
            }
        }
    }
</script>

export default new Vuex.Store({
	state: {
        loadingGPSRouteFile: false
    },
	mutations: {
		/**
         * Loading Spinner - GPS Route Upload FIle
         */
        LOADING_GPS_ROUTE_FILE(state) {
            state.loadingGPSRouteFile = !state.loadingGPSRouteFile;
        }
    },
	actions: {
		/**
         * Api Post Route KML File
		 * 		>> ALERT <<
		 *			Has Timeout
         * > post data
         * > start loading spinner
         * > is response ok send message that gps data is uploaded
         * > end loading spinner
		 * *** Has stupid logic & works like this!!! ***
         */
        postRouteKML({ commit }, data) {
            axios.post('api/route-post-kml', data)
                    .then(
                          commit('LOADING_GPS_ROUTE_FILE')
                    )
                    .then((response) => {
                        setTimeout(() => {
                          if(response.status == 200) {
                                swal({
                                    type: 'success',
                                    title: 'GPS data uploaded',
                                    showConfirmButton: false,
                                    timer: 1800
                                }).catch(swal.noop)
								commit('LOADING_GPS_ROUTE_FILE')
                            } else {
                                commit('LOADING_GPS_ROUTE_FILE')
                            }
                        }, 3000)
                    })
        },
	}
})