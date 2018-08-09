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

 // changeTodo: function(position, newValue) {
    //  this.todos[position] = newValue;
    //  this.displayTodos();
    // },

const tab = [];
tab[0] = ['Marcin' , '183'];
tab[1] = ['Ania' , '173'];
tab[2] = ['Agnieszka' , '170'];

console.log('imię: ' + tab[0][0] + ', wzrost: ' + tab[0][1]);
console.log('imię: ' + tab[1][0] + ', wzrost: ' + tab[1][1]);
console.log('imię: ' + tab[2][0] + ', wzrost: ' + tab[2][1]);