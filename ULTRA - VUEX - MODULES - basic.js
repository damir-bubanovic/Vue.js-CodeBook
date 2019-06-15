/*

!! BASIC - VUEX - MODULES - BASIC !!

> excelent for compartmentaliing store.js

*/

/*Component*/
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2 class="text-center">Vuex Play</h2>
                <hr>
                <p>Original number is 12</p>
                <p>My Number is {{ mynumber }}</p>
                <el-button type="primary" :disabled="disabled">Disabled / Enabled buttons</el-button>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h3>Changing number</h3>
                <el-button type="primary" v-on:click="change">Change</el-button>
                <el-button type="primary" v-on:click="reverse">Reverse</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            /**
             * WATCH OUT
             * - acces object property number from module number in state.js
             */
            mynumber() {
                return this.$store.state.number.number
            },
            disabled() {
                return this.$store.state.disabled.disabled
            }
        },
        methods: {
            change() {
                this.$store.dispatch('change');
            },
            reverse() {
                this.$store.dispatch('reverse');
            }
        }
    }
</script>


/*Store.js*/
import number from './modules/number';
import disabled from './modules/disabled';


Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        number,
        disabled
    }
});


/*modules/number.js*/
const state = {
    number: 12,
}

const mutations = {
    CHANGE(state) {
        state.number = 22;
    }
}

const actions = {
    change({ commit }) {
        commit('CHANGE')
    }
}


export default {
    state,
    mutations,
    actions
}

/*modules/disabled.js*/
const state = {
    disabled: true
}

const mutations = {
    REVERSE(state) {
        state.disabled = false;
    }
}

const actions = {
    reverse({ commit }) {
        commit('REVERSE')
    }
}


export default {
    state,
    mutations,
    actions
}