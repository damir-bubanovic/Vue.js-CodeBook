/*

!! ULTRA - TRANSITION - TRANSITION STATE !!

> animating data
	** numbers and calculations
	** colors displayed
	** the positions of SVG nodes
	** the sizes and other properties of elements
	
> we can do that with 3rd-party libraries

> if you want to play with Dynamnic State Transitions, look online

*/


/*
EXAMPLE: Animating State with Watchers (Number)
- with tween.js

> animate changes of any numerical property into another property
*/
<script src="https://unpkg.com/tween.js@16.3.4"></script>

<div id="animated-number-demo">
	<input v-model.number="number" type="number" step="20">
	<p>{{ animatedNumber }}</p>
</div>

new Vue({
	el: '#animated-number-demo',
	data: {
		number: 0,
		animatedNumber: 0
	},
	watch: {
		number: function(newValue, oldValue) {
			var vm = this
			function animate (time) {
				requestAnimationFrame(animate)
				TWEEN.update(time)
			}
			new TWEEN.Tween({ tweeningNumber: oldValue })
				.easing(TWEEN.Easing.Quadratic.Out)
				.to({ tweeningNumber: newValue }, 500)
				.onUpdate(function () {
				vm.animatedNumber = this.tweeningNumber.toFixed(0)
				})
				.start()
			animate()
		}
	}
})


/*
EXAMPLE: EXAMPLE: Animating State with Watchers (Color)
- with color.js

> animate CSS color
*/
<script src="https://unpkg.com/tween.js@16.3.4"></script>
<script src="https://unpkg.com/color-js@1.0.3/color.js"></script>

<div id="example-7">
	<input
		v-model="colorQuery"
		v-on:keyup.enter="updateColor"
		placeholder="Enter a color"
	>
	<button v-on:click="updateColor">Update</button>
	<p>Preview:</p>
	<span
		v-bind:style="{ backgroundColor: tweenedCSSColor }"
		class="example-7-color-preview"
	></span>
	<p>{{ tweenedCSSColor }}</p>
</div>


var Color = net.brehaut.Color
new Vue({
  el: '#example-7',
  data: {
    colorQuery: '',
    color: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 1
    },
    tweenedColor: {}
  },
  created: function () {
    this.tweenedColor = Object.assign({}, this.color)
  },
  watch: {
    color: function () {
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween(this.tweenedColor)
        .to(this.color, 750)
        .start()
      animate()
    }
  },
  computed: {
    tweenedCSSColor: function () {
      return new Color({
        red: this.tweenedColor.red,
        green: this.tweenedColor.green,
        blue: this.tweenedColor.blue,
        alpha: this.tweenedColor.alpha
      }).toCSS()
    }
  },
  methods: {
    updateColor: function () {
      this.color = new Color(this.colorQuery).toRGB()
      this.colorQuery = ''
    }
  }
})

.example-7-color-preview {
	display: inline-block;
	width: 50px;
	height: 50px;
}


/*
EXAMPLE: Organizing Transitions into Components

> Managing many state transitions can quickly increase the complexity of a Vue instance or component. 
Fortunately, many animations can be extracted out into dedicated child components
*/
<script src="https://unpkg.com/tween.js@16.3.4"></script>

<div id="example-8">
  <input v-model.number="firstNumber" type="number" step="20"> +
  <input v-model.number="secondNumber" type="number" step="20"> =
  {{ result }}
  <p>
    <animated-integer v-bind:value="firstNumber"></animated-integer> +
    <animated-integer v-bind:value="secondNumber"></animated-integer> =
    <animated-integer v-bind:value="result"></animated-integer>
  </p>
</div>

// This complex tweening logic can now be reused between
// any integers we may wish to animate in our application.
// Components also offer a clean interface for configuring
// more dynamic transitions and complex transition
// strategies.
Vue.component('animated-integer', {
  template: '<span>{{ tweeningValue }}</span>',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      tweeningValue: 0
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      this.tween(oldValue, newValue)
    }
  },
  mounted: function () {
    this.tween(0, this.value)
  },
  methods: {
    tween: function (startValue, endValue) {
      var vm = this
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        .onUpdate(function () {
          vm.tweeningValue = this.tweeningValue.toFixed(0)
        })
        .start()
      animate()
    }
  }
})

// All complexity has now been removed from the main Vue instance!
new Vue({
  el: '#example-8',
  data: {
    firstNumber: 20,
    secondNumber: 40
  },
  computed: {
    result: function () {
      return this.firstNumber + this.secondNumber
    }
  }
})

