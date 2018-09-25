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
//changeTodo(0, 'changed');
//changeTodo(0, 'changed again');

function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}
//deleteTodo(4);

function makeSandwich(filling) {
	console.log('you added:',filling);
	document.write('you added: ',filling);
}
makeSandwich('ham');

{
	name: 'Gordon'
}
