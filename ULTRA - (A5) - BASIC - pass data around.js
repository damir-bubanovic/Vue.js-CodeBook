/**
 * ULTRA - BASIC - pass data around
 */

 
 
 
 
 
/**
 * Dynamic PROPS [pass data from parent (input) to child]
 * - instead of input you can define value of parentMsg in const new Vue  & pass it to child
 */

/**
 * PARENT
 */
<p>Parent component</p><br>
<input v-model="parentMsg">
<hr>
<child v-bind:nikol="parentMsg"></child>

Vue.component('child', require('./components/Child.vue'));

const app = new Vue({
    el: '#app',
    data: {
        parentMsg: ''
    }
});

/**
 * CHILD
 */
<template>
    <div>
        <p>Child component</p><br>
        <p>The Message is: <small>{{ nikol }}</small></p>
    </div>
</template>

<script>
    export default {
        props: ['nikol']
    }
</script>






/**
 * Dynamic COMPUTED [pass data from parent (input) to child & apply math logic]
 */

/**
 * PARENT
 */
<p>Parent component</p><br>
<input v-model="number">
<hr>
<child v-bind:newnum="number"></child>

Vue.component('child', require('./components/Child.vue'));

const app = new Vue({
    el: '#app',
    data: {
        number: ''
    }
});

/**
 * CHILD
 */
<template>
    <div>
        <p>Child component</p><br>
        <p>The NewNumber is: <small>{{ counter }}</small></p>
    </div>
</template>

<script>
    export default {
        props: ['newnum'],
        computed: {
            counter() {
                return Number(this.newnum) + Number(0.5);
            }
        }
    }
</script>






/**
 * Dynamic $EMIT [pass data from child to parent & apply math logic]
 */

/**
 * PARENT
 */
<p>Parent component</p><br>
<p>The count is: @{{ count }}</p>
<hr>
<child v-on:addme="countUp"></child>

Vue.component('child', require('./components/Child.vue'));

const app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        countUp() {
            this.count += 1;
        }
    }
});

/**
 * CHILD
 * - $emit can pass value as second argument (not tested)
https://www.youtube.com/watch?v=PPmg7ntQjzc 8:00
 */
<template>
    <div>
        <p>Child component</p><br>
        <button type="button" v-on:click="addme">Add To Count</button>
    </div>
</template>

<script>
    export default {
        methods: {
            addme() {
                this.$emit('addme');
            }
        }
    }
</script>





/**
 * ULTRA Dynamic $emit [pass data from sister to parent to brother - to populate list]
 *
 LINKS:
 1) Advanced technique - have not tried
 https://vuejs.org/v2/guide/migration.html#dispatch-and-broadcast-replaced
 2) Similar
 http://stackoverflow.com/questions/40835293/vue-laravel-access-and-use-eventhub
 *
 * EXTRA ARRAY (pass multiple input values)
 https://jsfiddle.net/a5t24gm3/1/
 *
 * EXTRA OBJECT (pass multiple input values as object - look up vue-learn)
 */

/**
 * SISTER
 */
<template>
    <div>
		/*EXTRA ARRAY & OBJECT*/
		<input v-model="newname.first"><br>
        <input v-model="newname.last"><br>
        <button v-on:click="sendname">Send Name</button>
		
		/*ULTRA*/
        <input v-model="newname"><br>
        <button v-on:click="sendname">Send Name</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
				/*EXTRA ARRAY*/
				newname: []
				
				/*EXTRA OBJECT*/
				newname: { first: '', last: '' }
				
				/*ULTRA*/
                newname: ''
            }
        },
        methods: {
            sendname() {
				/*EXTRA & ULTRA*/
                this.$emit('sister', this.newname)
            }
        }
    }
</script>

/**
 * PARENT
 */
<p>Parent component</p><br>
<hr>
<p>Brother component</p><br>
<brother v-for="name in names" v-bind:name="name"></brother>
<hr>
<p>Sister component</p><br>
<sister v-on:sister="storeData"></sister>

Vue.component('brother', require('./components/Brother.vue'));
Vue.component('sister', require('./components/Sister.vue'));

const app = new Vue({
    el: '#app',
    data: {
		/*EXTRA*/
		names: [
            { first: 'Gina', last: 'Capwell' },
            { first: 'Viki', last: 'Small' },
            { first: 'O.G', last: 'Shorty' }
        ]
		
		/*ULTRA*/
        names: [
            'Vlatka',
            'Gina',
            'Ivana'
        ]
    },
    methods: {
        storeData(name) {
            this.names.push(name)
            // console.log('New Name is:', name)
        }
    }
});


/**
 * BROTHER
 */
<template>
    <div>
		/*EXTRA*/
		<p>{{ name.first }} {{ name.last }}</p>
		/*ULTRA*/
        {{ name }}
    </div>
</template>

<script>
    export default {
        props: ['name']
    }
</script>