/**
 * INTER - COMPUTED PROPERTY - watch with vuex
 */

var demo = new Vue({
    el: '#demo',
    data: function(){
        return {
        age: ''
      };
    },
    computed: {
      doubleAge: function () {
            return 2*this.age
        }
    },
    watch: {
      doubleAge: function (val) {
         alert("yes, computed property changed")
       }
    }   
})