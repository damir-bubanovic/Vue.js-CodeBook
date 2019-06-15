/**
 * ULTRA - PAGINATE - PAGINATE RESULTS
 * - use vue-paginate plugins	https://github.com/TahaSh/vue-paginate & https://jsfiddle.net/taha_sh/hmapx482/
 */

 <template>
    <div id="messages-inbox">
        <paginate-links for="messages.list" :show-step-links="true"></paginate-links>
        <paginate name="messages.list" :list="messages.list" :per="5" class="paginate-list">
            <div class="panel panel-default" v-for="item in paginated('messages.list')">
                <div class="panel-heading">
                    <span class="inbox-name">{{ item.name }}</span>
                    <span class="glyphicon glyphicon-envelope" aria-hidden="true" v-if="item.opened === 0"></span>
                    <span class="inbox-created">{{ item.created_at }}</span>
                </div>
                <div class="panel-body" v-html="item.message"></div>
            </div>
        </paginate>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                paginate: ['messages.list']
            }
        },
        created() {
            /**
             * Return messages
             */
            return this.$store.dispatch('getMessages');
        },
        computed:{
            /**
             * Message List
             */
            messages() {
                return {
                    list: this.$store.state.messages
                }
            }
        }
    }
</script>