/**
 * INTER TINYMCE - BASIC
 * - use plugin & modify options based on tinyint documentation
 */

 
/*App.js*/
/**
 * TinyMCE
 */
import VueTinymce from 'vue-tinymce'
Vue.use(VueTinymce)


/*Component*/
<template>
    <div>
        <p>First Works</p>
        <hr>
        <tinymce id="first" :content='content' :options='options' v-model="info.message"></tinymce>
        <button type="submit" class="btn btn-primary" v-on:click="submit">Add Story</button>
    </div>
</template>

<script>
    export default {
        data() {
            /**
             * TinyMCE (https://github.com/j6montoya/vue-tinymce)
             * > Content is for displaying content
             * > Info Message is for posting message
             */
            return {
                content: '',
                info: {
                    message: ''
                },
                options: {
                    elementpath: false,
                    menubar: false,
                    height: ''
                }
            }
        },
        created() {
            if(window.innerHeight >= 900) {
                this.options.height = 500;
            } else if(window.innerHeight < 900 && window.innerHeight >= 800 ) {
                this.options.height = 300;
            } else {
                this.options.height = 90;
            }
        },
        methods: {
            submit() {
                console.log('First Message is: ' + this.info.message);
            }
        }
    }
</script>