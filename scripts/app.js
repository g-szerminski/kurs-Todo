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

function changeTodo() {
	todos[0] = 'some new value';
}