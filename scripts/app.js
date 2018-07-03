var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
	console.log('My todos: ', todos);
}
displayTodos();

function addTodo(todo) {
	todos.push(todo);
	displayTodos();
	document.write('My todos: ', todos);
}
addTodo();
addTodo();
addTodo('my oh my');

function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

changeTodo(0, 'changed');
changeTodo(0, 'changed again');
