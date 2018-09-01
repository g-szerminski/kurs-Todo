var todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty !');
        } else {
            console.log('My todos: ');
            for (i = 0; i < this.todos.length; i++) {
                //console.log(this.todos[i].todoText);
                if (this.todos[i].complited === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('()', this.todos[i].todoText);
                }
            }   
        }    
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
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var complitedTodos = 0;

            // Get a number of complited todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].complited === true) {
                complitedTodos++;
            }
        }
            // Case 1: If everything is true, make everything false
        if (totalTodos === complitedTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].complited = false;
            }
            // Case 2: Otherwise, make everything true
        } else {
            for (var i = 0; i < totalTodos; i++) {
                    this.todos[i].complited = true;   
            }
        }
            this.displayTodos();
    }
};

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = ''; 
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
    },
    toggleComplited: function() {
        var toggleComplitedPositionInput = document.getElementById('toggleComplitedPositionInput');
        todoList.toggleComplited(toggleComplitedPositionInput.valueAsNumber);
        toggleComplitedPositionInput.value = '';
    },
    toggleAll: function() {
        todoList.toggleAll();
    }
}

 // changeTodo: function(position, newValue) {
    //  this.todos[position] = newValue;
    //  this.displayTodos();
    // },
//------------------------------------------------------------------------------------------

// // 1. We want to get acces to display Todos button
// var displayTodosButton = document.getElementById('displayTodosButton');
// var toggleAllButton = document.getElementById('toggleAllButton');

// // 2. We want to run displayTodos method , when someone cliks the displayTodos button
// displayTodosButton.addEventListener('click', function() {
//     todoList.displayTodos();
// });
// toggleAllButton.addEventListener('click', function() {
//     todoList.toggleAll();
// });
//------------------------------------------------------------------------------------------
