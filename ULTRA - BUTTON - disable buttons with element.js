/*

!! BASIC - BUTTON - DISABLE BUTTONS WITH ELEMENT !!

> using vuex
> only problem I need to click twice clear to disable buttons & clear select
	>> mayby use like this

	data() {
		return {
			value: this.$store.state.value
		}
	}

*/

/*Component*/
<template>
    <div class="container">
		<h1>Mountain</h1>
		<hr>
		<el-select v-model="value" @change="call" placeholder="Select Mountain">
			<el-option
				v-for="mountain in mountains.list"
				:key="mountain.id"
				:label="mountain.name"
				:value="mountain.id">
			</el-option>
		</el-select>
		<hr>
		<el-button type="primary" :disabled="isDisabled" v-on:click="myButton()">Enable / Disable</el-button>
		<hr>
		<el-button type="primary" v-on:click="clear()">Clear Value</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: null,
            }
        },
        /**
         * Populate Mountain List from Database
         */
        created() {
            return this.$store.dispatch('getMountains');
        },
        computed: {
            mountains() {
                return {
                    list: this.$store.state.mountains
                }
            },
            isDisabled() {
                return this.$store.state.disabled
            }
        },
        methods: {
            call() {
                var data = {
                    value: this.value
                };
                this.$store.dispatch('enableButtons', data);
            },
            clear() {
                this.$store.dispatch('disableButtons')
            },
            myButton() {

            }
        }
    }
</script>


/*Store.js*/
export default new Vuex.Store({
    state: {
        mountains: [],
        disabled: true,
        mountain_id: null
    },
    mutations: {
        /**
         * Mountains
         */
        GET_MOUNTAINS(state, { response }) {
            state.mountains = response.data.mountains;
        },
        DISABLE_BUTTONS(state) {
            state.disabled = true;
            state.mountain_id = null;
        },
        ENABLE_BUTTONS(state, data) {
            state.disabled = false;
            state.mountain_id = data.value;
        }
    },
    actions: {
        /**
         * API Get Mountains
         */
        getMountains({ commit }) {
            axios.get('api/mountains')
                    .then((response) => {
                        if(response.status == 200) {
                            commit('GET_MOUNTAINS', { response })
                        }
                    });
        },
        disableButtons({ commit }) {
            commit('DISABLE_BUTTONS');
        },
        enableButtons({ commit }, data) {
            commit('ENABLE_BUTTONS', data)
        }
    }
});
