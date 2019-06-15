/*

!! ULTRA - TRANSITION - LIST TRANSITIONS !!

> whole list of items we want to render simultaneously, npr. v-for
	- use the <transition-group> component
	
	>> Unlike <transition>, it renders an actual element: a <span> by default. 
		- You can change the element that’s rendered with the tag attribute.
	>> Elements inside are always required to have a unique key attribute

>> ALERT <<
	- these FLIP transitions do not work with elements set to display: inline. 
	As an alternative, you can use display: inline-block or place elements in a 
	flex context
	
*/


/*
EXAMPLE: List Entering / Leaving Transitions
*/
<div id="list-demo" class="demo">
	<button v-on:click="add">Add</button>
	<button v-on:click="remove">Remove</button>
	<transition-group name="list" tag="p">
		<span v-for="item in items" v-bind:key="item" class="list-item">
			{{ item }}
		</span>
	</transition-group>
</div>

new Vue({
	el: '#list-demo',
	data: {
		items: [1,2,3,4,5,6,7,8,9],
		nextNum: 10
	},
	methods: {
		randomIndex: function () {
			return Math.floor(Math.random() * this.items.length)
		},
		add: function () {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove: function () {
			this.items.splice(this.randomIndex(), 1)
		},
	}
})

.list-item {
	display: inline-block;
	margin-right: 10px;
}
.list-enter-active, .list-leave-active {
	transition: all 1s;
}
.list-enter, .list-leave-active {
	opacity: 0;
	transform: translateY(30px);
}


/*
EXAMPLE: List Move Transitions

> v-move class
	- class is mostly useful for specifying the transition timing and easing curve
*/
<div id="flip-list-demo" class="demo">
	<button v-on:click="shuffle">Shuffle</button>
	<transition-group name="flip-list" tag="ul">
		<li v-for="item in items" v-bind:key="item">
			{{ item }}
		</li>
	</transition-group>
</div>

new Vue({
	el: '#flip-list-demo',
	data: {
		items: [1,2,3,4,5,6,7,8,9]
	},
	methods: {
		shuffle: function () {
			this.items = _.shuffle(this.items)
		}
	}
})

.flip-list-move {
	transition: transform 1s;
}


/*
EXAMPLE: Staggering List Transitions
*/
<div id="staggered-list-demo">
  <input v-model="query">
  <transition-group
    name="staggered-fade"
    tag="ul"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <li
      v-for="(item, index) in computedList"
      v-bind:key="item.msg"
      v-bind:data-index="index"
    >{{ item.msg }}</li>
  </transition-group>
</div>

new Vue({
  el: '#staggered-list-demo',
  data: {
    query: '',
    list: [
      { msg: 'Bruce Lee' },
      { msg: 'Jackie Chan' },
      { msg: 'Chuck Norris' },
      { msg: 'Jet Li' },
      { msg: 'Kung Fury' }
    ]
  },
  computed: {
    computedList: function () {
      var vm = this
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  }
})

