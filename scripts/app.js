var todoList = {
    todos: [],
    displayTodos: function () {
        console.log('My todos: ', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            complited: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
    	this.todos.splice(position, 1);
    	this.displayTodos();
    },
    toggleComplited: function(position) {
        var todo = this.todos[position];
        todo.complited = !todo.complited;
        this.displayTodos();
    }
}

 // changeTodo: function(position, newValue) {
    //  this.todos[position] = newValue;
    //  this.displayTodos();
    // },