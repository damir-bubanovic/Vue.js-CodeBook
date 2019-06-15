/*

!! ULTRA - AXIOS - GET DATA !!

*/

/**
 * PARENT ELEMENT
 *
 * MESSAGE - TEMPLATE
 *      - V-FOR => loop through all messages stored in data / messages array
 *      - they are getting displayed in child element template
 *      - V-BIND => passing message as a property to display it in child element
 *
 * data() -> messages[]
 *      - storing data into messages array
 *      - data object with messages array

 * AXIOS
 * > options: Make request after page is loaded, better when the component is mounted & ready to go
 *     	-> created
 *         	=> axios please get messages, then respond like this ->
 *         	- can console.log response to see it's working
 *         	-> get response back with data
 *		-> ALTERNATE
 *			-> if status of messages is 200 (OK) then set messages to api response we get
 *			same proces as Vue.set()
 */
<template>
    <div class="container">
        <message-single v-for="message in messages" v-bind:message="message"></message-single>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messages: []
            }
        },

        created() {
            var vm = this

            axios.get('api/messages')
                .then(function(response) {
                    Vue.set(vm.$data, 'messages', response.data.messages);
                });
				
			/*ALTERNATE*/
			axios.get('api/v1/todos')
                    .then((response) => {
                        console.log(response);
                        if(response.status == 200) {
                            this.messages = response.data;
                        }
                    });
        }

    }
</script>

/**
 * CHILD ELEMENT
 *
 * MESSAGE - TEMPLATE
 *      - individial message that make a chat-log (child-parent)
 *      - message.message => get property user from object message
 *		1) get data from another column
 *
 * GET DATA FROM PARENT
 *      - accept properties (props) from parent (data object -> message) & specify what properties we want to except ()
 *      ** accept multiple properties -> props: ['message', 'user'] **
 */
<template>
    <div>
        <p>{{ message.message }}</p>
		<p>{{ message.created_at }}</p>
    </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>

/**
 * ROUTE
 *    - route connected to the controller
 */
Route::get('api/messages', 'MessagesPageController@getData');

/**
 * CONTROLLER
 *    - all all your requirements here
 * -> a little bit of complicated query in here
 */
use Illuminate\Support\Facades\DB;
use App\Message;

class MessagesPageController extends Controller
{
    /**
     * GET DATA
     */
    public function getData() {
        $user = Auth::user();

        $messages = DB::table('users')
                        ->join('messages', 'id', '=', 'sender_id')
                        ->select('users.id', 'users.name', 'messages.message_id', 'messages.sender_id', 'messages.receiver_id', 'messages.message', 'messages.created_at')
                        ->orderBy('message_id', 'desc')
                        ->where('messages.receiver_id', $user->id)
                        ->get();

        return response()->json([
            'messages' =>  $messages
        ]);
    }

}

/**
 * MODEL
 * 1) for user-message relationship in model
 USER:
	public function messages() {
		return $this->hasMany(Message::class);
	}
 MESSAGE: 
	public $fillable = ['message'];

	public function user() {
		return $this->belongsTo(User::class);
	}
 */
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    //
}




/**
 * EXAMPLE 2
 *
 * - api routes should be in routes/api.php (they are not in this case)
 *		-> 200 = OK, 201 = Created
 */

public function getTodos() {
    $todos = DB::table('todos')
                ->get();

    return response()->json([
        'todos' => $todos
    ], 200);
}


getTodosData() {
    axios.get('api/v1/todos')
        .then((response) => {
            console.log(response);
            if(response.status == 200) {
                this.todos = response.data.todos;
            }
        });
},