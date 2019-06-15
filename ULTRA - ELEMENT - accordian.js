/**
 * ULTRA - ELEMENT - ACCORDIAN
 * > use with vuex (this part not necessary)
 * > name is usually id from database bat it works with this as well
 */

 
/*Main.vue*/
<template>
    <div>
        <el-tab-pane label="Route Stories" name="routeStory">
			<div class="text-left">
				<el-collapse v-model="activeStory" accordion>
					<span v-for="story in routeInfo.story">
						<el-collapse-item v-bind:title="story.title" v-bind:name="story.title">
							<div>{{ story.description }}</div>
						</el-collapse-item>
					</span>
				</el-collapse>
			</div>
		</el-tab-pane>
    </div>
</template>

<script>
    export default {
        /**
         * Collapsable Elements
         */
        data() {
            return {
                activeStory: ''
            };
        },
		/**
         * Populate list from database
         */
        computed: {
            routeInfo() {
                return this.$store.state.routes.fullRoutes
            }
        }
    }
</script>

