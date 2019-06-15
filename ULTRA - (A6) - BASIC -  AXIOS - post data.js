/*

!! ULTRA - AXIOS - POST DATA !!

*/

/**
 * PARENT ELEMENT
 *
 * data() -> addData[]
 *      - storing data into addData object (usefull for multiple input fields)
 *
 * METHODS - AXIOS
 *		- addEmplyee method
 *				var vm - instance property (investigate more)
 * >
 */
<template>
    <div class="employee">
        <input type="text" placeholder="name" v-model="addData.name" v-on:keydown.enter="addEmployee()">
        <button type="button" class="btn btn-default" v-on:click="addEmployee()">Send</button>
    </div>
</template>

<script>
    export default {
       data() {
            return {
                addData: {'name':''}
            }
        },
        methods: {
            addEmployee() {
                var vm = this
                var dataInput = vm.addData;
                axios.post('api/employee/add', dataInput);
            }
        }

    }
</script>

/**
 * ROUTE
 *    - route connected to the controller
 */
Route::post('api/employee/add', 'EmployeeController@addData');

/**
 * CONTROLLER
 *    - all all your requirements here
 */
use Illuminate\Support\Facades\DB;
use App\Employe;

class EmployeeController extends Controller
{
    /**
     * POST DATA - ADD EMPLOYEE
     */
    public function addData(Request $request) {
        $input = $request->all();
        DB::table('employes')->insert($input);
    }

}

/**
 * MODEL
 *	- enter fields that are fillable in form
 */
<?php

class Employe extends Model
{
    protected $fillable = [
        'name'
    ];
}



/**
 * EXAMPLE 2
 *
 * - api routes should be in routes/api.php (they are not in this case)
 *		-> 200 = OK, 201 = Created
 */

/**
 * - validate input & validate in javascript
 * - you have to manually populate database fileds if using DB::table so use Carbon for current timestamps
 */
public function saveTodo(Request $request) {
    $this->validate($request, [
                'title'     => 'required|min:3'
            ]);

    $now = Carbon\Carbon::now('UTC');

    $todo = DB::table('todos')
                ->insert([
                    'title'         => $request->title,
                    'completed'     => 0,
                    'user_id'       => 1,
                    "created_at"    => $now,
                    "updated_at"    => $now,
                ]);
	/*OR - better for manupulating return data after insertion, returns json object*/
	$todo = Todo::create([
					'title'         => $request->title,
					'completed'     => $request->completed,
					'user_id'       => $request->id,
					"created_at"    => $now,
					"updated_at"    => $now,
				]);

    return response()->json([
        'todo' => $todo
    ], 2001;

}

/**
 * you can just remove completely .then() & return response from controller & it will work fine
 *		-> you can also catch errors & do as you please
 */
addTodo() {
    var postData =  { title: this.todo.title };

    axios.post('api/v1/todo', postData)
            .then((response) => {
                if(response.status == 201) {
                    // Do Something like emit data
					var mytodo = response.data.todo;
                    this.$emit('emitter', mytodo);
                }
            }).catch((response) => {
				console.log('Error', response);
			});
}


data() {
	return {
		title: ''
	}
},
methods: {
	onSubmitted() {
		axios.post('api/new-quote', {data: this.title})
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
	}
}
