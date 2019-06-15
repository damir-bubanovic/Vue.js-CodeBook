/**
 * INTER - TABS
 * - bootstrap with vue (without jQuery)
 */
 
<template>

    <div role="tabpanel">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
                <a href="#" role="tab" data-toggle="tab" v-bind:class="{ active: inbox }" v-on:click="activeI">Inbox</a>
            </li>
            <li role="presentation">
                <a href="#" role="tab" data-toggle="tab" v-bind:class="{ active: compose }" v-on:click="activeC">Compose</a>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
            <div role="tabpanel" id="inbox" class="tab-pane" v-bind:class="{ active: inbox }">Inbox Active</div>
            <div role="tabpanel" id="compose" class="tab-pane" v-bind:class="{ active: compose }">Compose Active</div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                inbox: true,
                compose: false
            }
        },
        methods: {
            activeI() {
                this.inbox = true;
                this.compose = false;
            },
            activeC() {
                this.inbox = false;
                this.compose = true;
            }
        }
    }
</script>