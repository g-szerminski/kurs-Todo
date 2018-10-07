//case 1
function logThis() {
	console.log(this);
}
logThis();

//case 2
var myObject = {
	myMethod: function() {
		console.log(this);
	}
};
myObject.myMethod(); //this refers to the left side of dot !

//case 3
function Person(name) {
	//this = {}; this points to that new object
	this.name = name;
	//return this; this is returned automaticly on the background
}
new Person('szerman');