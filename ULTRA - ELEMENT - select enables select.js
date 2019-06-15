/**
 * ULTRA - ELEMENT - SELECT ENABLES SELECT
 * > use v-if because in only renders component if true, & v-show renders on page created
 * > use computed to get values for v-if
 */

 
/*Mountain.vuz*/
<template>
    <div>
        <h1>Mountain Selectio</h1>
        <br>
        <el-select class="selected-mountain" v-model="value" @change="selectedMountain" placeholder="Select Mountain to Add New...">
            <el-option
                v-for="mountain in mountains.list"
                :key="mountain.id"
                :label="mountain.name"
                :value="mountain.id">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        /**
         * Create Tabs
         */
        data() {
            return {
                value: '',
                activeName: 'mountain',
            };
        },
        /**
         * Populate Mountain List from Database
         */
        created() {
            return this.$store.dispatch('getMountains');
        },
        computed: {
            mountains() {
                return {
                    list: this.$store.state.mountains.mountains
                }
            }
        },
        methods: {
            /**
             * Select mountain id & enable tabs
             */
            selectedMountain() {
                var data = {
                    mountain: this.value
                };
                this.$store.dispatch('mountainID', data);
            },
        }
    }
</script>



/*Story.vue*/
<template>
    <div>
        <h2>Story Works</h2>
        <div v-if="showing">
            <el-select v-model="value" multiple placeholder="Add Stories to Route...">
                <el-option
                    v-for="story in stories.list"
                    :key="story.id"
                    :label="story.title"
                    :value="story.id">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
        computed: {
            showing() {
                return this.$store.state.mountains.show
            },
            stories() {
                return {
                    list: this.$store.state.mountains.stories
                }
            }
        }
    }
</script>



/*mountains.js - connected with store.js*/
const state = {
    mountains: [],
    mountain_id: null,
    show: false,
    stories: []
}

const mutations = {
    /**
     * Mountains
     */
    GET_MOUNTAINS(state, { response }) {
        state.mountains = response.data.mountains;
    },
    /**
     * Selected Mountain Id
     */
    MOUNTAIN_ID(state, data) {
        state.mountain_id = data.mountain;
        state.show = true;
    },
    STORIES(state, { response }) {
        state.stories = response.data.stories;
    }
}

const actions = {
    /**
     * API Get Mountains
     */
    getMountains({ commit }) {
        axios.get('api/mountains')
                .then((response) => {
                    if(response.status == 200) {
                        commit('GET_MOUNTAINS', { response })
                    }
                });
    },
    /**
     * Selected Mountain Id
     */
    mountainID({ commit }, data) {
        axios.post('api/stories', data)
                .then((response) => {
                    if(response.status == 200) {
                        commit('STORIES', { response });
                        commit('MOUNTAIN_ID', data);
                    }
                });
     }
}


export default {
    state,
    mutations,
    actions
}



/*routes - web.php*/
Route::get('api/mountains', 'TestingController@getMountains');
Route::post('api/stories', 'TestingController@getStories');



/*TestingController*/

class TestingController extends Controller
{
    /**
     * Show mountains
     */
    public function getMountains() {
        $mountains = DB::table('mountains')
                        ->select('id', 'name')
                        ->orderBy('name', 'desc')
                        ->get();

        return response()->json([
            'mountains'  =>  $mountains
        ], 200);
    }

    /**
     * Get Stories
     */
    public function getStories(Request $request) {
        $mountain_id = $request->{'mountain'};

        $stories = DB::table('story')
                        ->select('id', 'title', 'description')
                        ->where('mountain_id', $mountain_id)
                        ->orderBy('id', 'desc')
                        ->get();

        return response()->json([
            'stories'  =>  $stories
        ], 200);

    }

}