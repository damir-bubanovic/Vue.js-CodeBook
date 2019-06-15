/*

!! ULTRA - EXPORT DEFAULT - ADVANCED !!

> using constant in export default & element io transform
> get all refuges data & get active refuges data
*/
<template>
    <div v-if="showRoute">
        <hr>
        <el-transfer
            v-model="form.afterActiveRefuges"
            :titles="['Reserve', 'Active']"
            :data="form.data">
        </el-transfer>

        <el-row :gutter="20">
            <el-col :span="15">
                <el-button type="primary" v-on:click="step">Edit Refuges</el-button>
            </el-col>
            <el-col :span="9">
                <el-button type="danger" v-on:click="cancel">Cancel</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            /**
             * Active Refuges
             * > populate data from active refuges
             */
            const generateValue = _ => {
                var value = []

                var activeRefuges = this.$store.state.route.route.refuge;

                for (var i = 0; i < activeRefuges.length; i++) {
                    value.push(activeRefuges[i].id);
                }
                return value;
            }
            /**
             * All Refuges
             * > Populate data from all existing refuges
             */
            const generateData = _ => {
                var data = []

                var allRefuges = this.$store.state.refuge.refuges;

                for (var i = 0; i < allRefuges.length; i++) {
                    data.push({
                        key: allRefuges[i].id,
                        label: allRefuges[i].name,
                    });
                }
                return data;
            }
            return {
                form: {
                    data: generateData(),
                    beforeActiveRefuges: generateValue(),
                    afterActiveRefuges: generateValue()
                }
            }
        },
        computed: {
            /**
             * Show Route
             */
            showRoute() {
                return this.$store.state.route.showRoute
            },
        },
        methods: {
            cancel() {
                this.$emit('cancel');
            },
            step() {
                /**
                 * Send objects with array
                 */
                this.$validator.validateAll()
                    .then((result) => {
                        if(result) {
                            delete this.form.data;
                            this.$emit('step', this.form);
                        }
                    });
            }
        }
    }
</script>