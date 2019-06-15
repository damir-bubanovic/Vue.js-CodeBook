/*

!! ULTRA - TRANSITION - BETWEEN ELEMENTS & COMPONENTS !!

*/


/*
EXAMPLE: TRANSITION MODES

> Pay attention to Transition Modes, so the one transition hides another
	** in-out: 
		- New element transitions in first, then when complete, the current element transitions out.
	** out-in: 
		- Current element transitions out first, then when complete, the new element transitions in.
*/
<transition name="fade" mode="out-in">
	<!-- ... the buttons ... -->
</transition>


/*
EXAMPLE: Transition between Elements

1) transition between raw elements using v-if/v-else
	- give them unique key attributes!

2) transition between different states of the same element

3) transition between any number of elements, either by using 
multiple v-ifs or binding a single element to a dynamic property
*/
<transition>
	<button v-if="isEditing" key="save">
		Save
	</button>
	<button v-else key="edit">
		Edit
	</button>
</transition>


<transition>
	<button v-bind:key="isEditing">
		{{ isEditing ? 'Save' : 'Edit' }}
	</button>
</transition>


<transition>
	<button v-if="docState === 'saved'" key="saved">
		Edit
	</button>
	<button v-if="docState === 'edited'" key="edited">
		Save
	</button>
	<button v-if="docState === 'editing'" key="editing">
		Cancel
	</button>
</transition>
/*OR*/
<transition>
	<button v-bind:key="docState">
		{{ buttonMessage }}
	</button>
</transition>

computed: {
	buttonMessage: function () {
		switch (docState) {
			case 'saved': return 'Edit'
			case 'edited': return 'Save'
			case 'editing': return 'Cancel'
		}
	}
}


/*
EXAMPLE: Transition between Components

> just wrap a dynamic component
*/
<transition name="component-fade" mode="out-in">
	<component v-bind:is="view"></component>
</transition>

new Vue({
	el: '#transition-components-demo',
	data: {
		view: 'v-a'
	},
	components: {
		'v-a': {
			template: '<div>Component A</div>'
		},
		'v-b': {
			template: '<div>Component B</div>'
		}
	}
})

.component-fade-enter-active, .component-fade-leave-active {
	transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-active {
	opacity: 0;
}

