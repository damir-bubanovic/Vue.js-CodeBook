/**
 * ULTRA - LIFECYCLE - BASIC
 * > lifecycle for vue template component
 */


 /**
 * CREATION
 * > perform actions before your component has even been added to the DOM
 * > unlike any of the other hooks, creation hooks are also run during server-side rendering
 * > use creation hooks if you need to set things up in your component both during client rendering and server rendering.
 * > you will not have access to the DOM or the target mounting element (this.$el) inside of creation hooks
 */

/**
 * beforeCreate
 * - runs at the very initialization of your component
 * - data has not been made reactive, and events have not been set up yet
 */
export default {
    beforeCreate() {
        console.log('Nothing gets called before me!')
    }
}

/**
 * created
 * - able to access reactive data and events are active.
 * - templates and Virtual DOM have not yet been mounted or renderedet
 */
export default {
    data: () => ({
        property: 'Blank'
    }),
    computed: {
        propertyComputed() {
            console.log('I change when this.property changes.');
            return this.property;
        }
    },
    created() {
        this.property = 'Example property update.';
        console.log('propertyComputed will update, as this.property is now reactive.');
    }
}



/**
 * MOUNTING
 * > allow you to access your component immediately before and after the first render
 * > do not, however, run during server-side rendering
 * ++ Use if: You need to access or modify the DOM of your component immediately before or after the initial render
 * -- Do not use if: You need to fetch some data for your component on initialization.
 *     Use created (or created + activated for keep-alive components) for this instead
 */

/**
 * beforeMount
 * - runs right before the initial render happens and after the template or render functions have been compiled
 * - you will probably never use it
 */
export default {
    beforeMount() {
        console.log(`this.$el doesn't exist yet, but it will soon!`)
    }
}

/**
 * mounted
 * - have full access to the reactive component, templates, and rendered DOM (via. this.$el).
 * - most often used
 */
<template>
	<p>I'm text inside the component.</p>
</template> 
 
export default {
    mounted() {
        console.log(this.$el.textContent) // I'm all the text inside the component.
    }
}



/**
 * UPDATING
 * > called whenever a reactive property used by your component changes, or something else causes it to re-render
 * > allow you to hook into the watch-compute-render cycle for your component
 */

/**
 * beforeUpdate
 * - runs after data changes on your component and the update cycle begins, right before the DOM is patched and re-rendered.
 * - it allows you to get the new state of any reactive data on your component before it actually gets rendered
 */
export default {
    data: () => ({
        counter: 0
    }),
    beforeUpdate() {
        console.log(this.counter) // Logs the counter value every second, before the DOM updates.
    },
    created() {
        setInterval(() => {
            this.counter++
        }, 1000)
    }
}

/**
 * updated
 * - runs after data changes on your component and the DOM re-renders
 * - if you need to access the DOM after a property change, here is probably the safest place to do it
 */
<template>
	<p ref="dom-element">{{counter}}</p>
</template> 
 
export default {
    data: () => ({
        counter: 0
    }),

    updated() {
        // Fired every second, should always be true
        console.log(+this.$refs['dom-element'].textContent === this.counter)
    },

    created() {
        setInterval(() => {
            this.counter++
        }, 1000)
    }}
}



/**
 * DESTROYING
 * > perform actions when your component is destroyed, such as cleanup or analytics sending
 * > they fire when your component is being torn down and removed from the DOM
 */

/**
 * beforeDestroy
 * - fired right before teardown
 * - component will still be fully present and functional
 * - used for if you need to cleanup events or reactive subscriptions
 */
export default {
    data: () => ({
        someLeakyProperty: 'I leak memory if not cleaned up!';
    }),
    beforeDestroy() {
        // Perform the teardown procedure for someLeakyProperty.
        // (In this case, effectively nothing)
        this.someLeakyProperty = null;
        delete this.someLeakyProperty;
    }
}

/**
 * destroyed
 * - fired when component dead
 * - you might use the destroyed hook to do any last-minute cleanup or inform a remote server
 */
import MyCreepyAnalyticsService from './somewhere-bad';

export default {
    destroyed() {
        console.log(this); // There's practically nothing here!
        MyCreepyAnalyticsService.informService('Component destroyed. All assets move in on target on my mark.');
    }
}