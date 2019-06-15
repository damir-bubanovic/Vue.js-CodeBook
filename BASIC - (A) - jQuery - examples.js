/*

!! BASIC - jQuery - CODING EXAMPLES !!

*/


/*
ANIMATE.CSS
*/
<div id="app">
	<h1 class="infinite shake" v-bind:class="{ animated: isAnimated }" 
	v-on:mouseover="isAnimated = true" v-on:mouseleave="isAnimated = false">Working</h1>
</div>

new Vue({
    el: '#app',
    data: {
        isAnimated: false
    }
});


/*
CSS - ADD CLASS
> adding class to each word in sentence <span>
*/
<div id="app">
	<h1>{{ webheading }}</h1>
	<p>This is just For Show</p>
</div>

var app3 = new Vue({
    el: '#app',
    data: {
        heading: 'Web Stranice i Aplikacije'
    },
    computed: {
        webheading: function() {
            var words = this.heading.split(' ');
            var title = [];
            for(i = 0; i < words.length; i++) {
                title += '<span class="momo">' + words[i] + '</span>' + ' ';
            }
            return title;
        }
    }
});