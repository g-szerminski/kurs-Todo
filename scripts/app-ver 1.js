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
//addTodo('aaaa');
//addTodo('bbbb');
//addTodo('my oh my');

function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}
//changeTodo(0, 'changed');
//changeTodo(0, 'changed again');
//deleteTodo(4);

{
	name: 'Gordon'
}