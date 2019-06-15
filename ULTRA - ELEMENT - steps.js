/**
 * ULTRA - ELEMENT - STEPS
 * - 3 step process with step reload at the end
 *
 * ADVANCED - http://codepen.io/jonnyfoley/pen/rjwLjQ
 */

/**
 * PARENT
 */
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div>
                    <h1>Steps Component</h1>
                </div>
                <hr>
                <div>
                    <p>Steps to Undertake</p>
                    <el-steps :space="100" :active="active" finish-status="success">
                        <el-step title="Step 1" description="Enter Make"></el-step>
                        <el-step title="Step 2" description="Enter Break"></el-step>
                        <el-step title="Step 3" description="Enter Finish"></el-step>
                    </el-steps>
                    <el-button style="margin-top: 12px;" @click="next" v-if="active == 3">Restart</el-button>
                </div>
            </div>
            <make v-on:step="next" v-if="active == 0"></make>
            <break v-on:step="next" v-if="active == 1"></break>
            <finish v-on:step="next" v-if="active == 2"></finish>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        },
        methods: {
            next() {
                if(this.active++ > 2) {
                    this.active = 0;
                }
            }
        }
    }
</script>

/**
 * CHILD
 * - repeat for other children
 */
<template>
    <div id="make">
        <h2>Make Component</h2>
        <p>Can they get the dog, final cleanups</p>
        <button type="submit" class="btn btn-primary" v-on:click="step">Submit Make</button>
    </div>
</template>

<script>
    export default {
        methods: {
            step() {
                this.$emit('step');
            }
        }
    }
</script>