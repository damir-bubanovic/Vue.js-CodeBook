/**
 * INTER - DATA - PULL DATA EVERY INTERVAL
 */

<div id="app">
  <div v-for="item in items">{{ item.prop }}</div>
</div>


new Vue({
  el: '#app',
  data: {
    items: [],
    interval: null,
  },
  methods: {
    loadData: function () {
      $.get('/api/data', function (response) {
        this.items = response.items;
      }.bind(this));
    }
  },
  ready: function () {
    this.loadData();

    this.interval = setInterval(function () {
      this.loadData();
    }.bind(this), 30000); 
  },

 beforeDestroy: function(){
clearInterval(this.interval);
}
});
