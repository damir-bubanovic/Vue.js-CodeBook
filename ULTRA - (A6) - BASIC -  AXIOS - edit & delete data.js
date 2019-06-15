/**
 * ULTRA - BASIC - AXIOS - edit & delete data
 */


/*CONTROLER*/
/**
 * Edit specific todo
 */
public function changeTodoStatus(Request $request) {
    $id = $request->id;
    $completed = $request->completed;

    if($completed == true) {
        $todo = Todo::where('id', $id)->update(['completed' => 0]);
    } else {
        $todo = Todo::where('id', $id)->update(['completed' => 1]);
    }

    return response()->json([
        'todo'  => $todo
    ], 200);
}


/**
 * Delete specific Todo
 */
public function deleteTodo(Request $request) {
    $id = $request->id;

    $todo = Todo::where('id', $id)
                    ->delete();

    return response()->json([
        'todo' => $todo
    ], 204);
}


/*ROUTE*/
Route::group(['prefix' => 'api/v1'], function() {
    Route::post('todo-delete', 'TodoApiController@deleteTodo');
    Route::post('todo-status', 'TodoApiController@changeTodoStatus');
});


/*VUE - we are changing status of the message, so we need message id & completed status*/
methods: {
    todoCompleted(todo) {
        var postData = { id: todo.id, completed: todo.completed };
        axios.post('api/v1/todo-status', postData)
                .then((response) => {
                    if(response.status == 200) {
                        todo.completed = !todo.completed
                    }
                }).catch((response) => {
                    console.log('Error', response);
                });
    },
    todoDelete(todo) {
        var postData = { id: todo.id };
        axios.post('api/v1/todo-delete', postData)
                .then((response) => {
                    if(response.status == 204) {
                        var index = this.todos.indexOf(todo);
                        this.todos.splice(index, 1);
                    }
                }).catch((response) => {
                    console.log('Error', response);
                });

    }
}