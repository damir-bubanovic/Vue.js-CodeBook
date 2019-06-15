/*

!! ULTRA - STATE MANAGEMENT - BASIC !!

> Large applications can often grow in complexity, due to multiple pieces 
of state scattered across many components and the interactions between them. 
	>> To solve this problem, Vue offers vuex: 
				- our own Elm-inspired state management library

*/


/*
EXAMPLE: Simple State Management from Scratch

1) if you have a piece of state that should be shared by multiple instances, 
you can simply share it by identity

2) Subcomponents within each of these instances would also have access via this.$root.$data
- adopt a simple store pattern
	-- This type of centralized state management makes it easier to understand what type of 
	mutations could happen and how are they triggered. Now when something goes wrong, we’ll 
	also have a log of what happened leading up to the bug
2.1) In addition, each instance/component can still own and manage its own private state
*/
const sourceOfTruth = {}
const vmA = new Vue({
	data: sourceOfTruth
})
const vmB = new Vue({
	data: sourceOfTruth
})


var store = {
	debug: true,
	state: {
		message: 'Hello!'
	},
	setMessageAction (newValue) {
		this.debug && console.log('setMessageAction triggered with', newValue)
		this.state.message = newValue
	},
	clearMessageAction () {
		this.debug && console.log('clearMessageAction triggered')
		this.state.message = 'clearMessageAction triggered'
	}
}


var vmA = new Vue({
	data: {
		privateState: {},
		sharedState: store.state
	}
})
var vmB = new Vue({
	data: {
		privateState: {},
		sharedState: store.state
	}
})