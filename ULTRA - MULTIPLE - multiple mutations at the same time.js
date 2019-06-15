/*

!! BASIC - MULTIPLE - MULTIPLE MUTATIONS AT THE SAME TIME !!

> just great - use only computed & not created or data for this to work

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
            mynumber() {
                return this.$store.state.number
            },
            disabled() {
                return this.$store.state.disabled
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
export default new Vuex.Store({
    state: {
        number: 12,
        disabled: true
    },
    mutations: {
        CHANGE(state) {
            state.number = 22;
            state.disabled = false;
        },
        REVERSE(state) {
            state.number = 12;
            state.disabled = true;
        }
    },
    actions: {
        change({ commit }) {
            commit('CHANGE')
        },
        reverse({ commit }) {
            commit('REVERSE')
        }
    }
});
