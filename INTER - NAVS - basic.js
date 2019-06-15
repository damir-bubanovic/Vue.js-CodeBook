/**
 * INTER - NAVS
 * - vue navs
 */
 
<div id="app">
    <div id="nav">
        <a href='#' class="tab" v-on:click="makeActive('homeActive')">Home</a>
        <a href='#' class="tab" v-on:click="makeActive('infoActive')">Info</a>
    </div>
    <div class="content">
        <div class="boxes" id="home" v-show="isActiveTab('homeActive')">
        </div>
        <div class="boxes" id="info" v-show="isActiveTab('infoActive')">
        </div>
    </div>
</div>


new Vue({
    el: '#app',
    data: {
        choice: 'homeActive' // Home is chosen by default
    },
    methods: {
        makeActive: function(val) {
            this.choice = val;
        },
        isActiveTab: function(val) {
          return this.choice === val;
        }
    }
});