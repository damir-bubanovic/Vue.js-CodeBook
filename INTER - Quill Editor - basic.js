/**
 * INTER - QUILL EDITOR - BASIC
 * - use plugin for vue https://github.com/surmon-china/vue-quill-editor
 *
 * > npm install vue-quill-editor --save
 */

 
/*App.js*/
/**
 * TinyMCE
 */
import VueQuillEditor from 'vue-quill-editor';
Vue.use(VueQuillEditor)


/*
Component
- class container & editor needed for styling editor
*/
<template>
    <div class="message-container">
		<quill-editor ref="message"
			v-model="mess.message"
			class="message-editor"
			:options="messageOption">
		</quill-editor>
	</div>
</template>

<script>
    export default {
        data() {
            /**
             * Quill Vue Editor
             */
            return {
                mess: {
                    message: ''
                },
                messageOption: {
                    placeholder: 'Write message here...',
                    modules: {
                        toolbar: this.$store.state.editor.toolbar
                    }
                },
            }
			/*
			DEFAULT MODULES
			defaultModules: {
			  toolbar: [
				['bold', 'italic', 'underline', 'strike'],
				['blockquote', 'code-block'],
				[{ 'header': 1 }, { 'header': 2 }],
				[{ 'list': 'ordered'}, { 'list': 'bullet' }],
				[{ 'script': 'sub'}, { 'script': 'super' }],
				[{ 'indent': '-1'}, { 'indent': '+1' }],
				[{ 'direction': 'rtl' }],
				[{ 'size': ['small', false, 'large', 'huge'] }],
				[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
				[{ 'color': [] }, { 'background': [] }],
				[{ 'font': [] }],
				[{ 'align': [] }],
				['clean'],
				['link', 'image', 'video']
			  ]
			}
			*/
        }
    }
</script>