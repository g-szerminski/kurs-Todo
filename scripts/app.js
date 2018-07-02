var user = {
	title: 'Kurs-Todo Gordon',
	name: 'Grześ',
	age: '37',
	location: 'Wrocław',
	options: ['one', 'two']
};

function getLocation (location) {
	if (location) {
		return 'location: ' + location;
	} 
};

function getAge (age) {
	if (age >= 18) {
		return 'age: ' + age;
	} else {
		return 'You are under 18';
	} 
};


const templateTwo = React.createElement ('div', {},
	React.createElement ('h1', {}, user.title),
	React.createElement ('h3', {}, user.name ? user.name.toUpperCase() : 'Anonymus'),
	React.createElement ('p', {}, user.age ? getAge(user.age) : 'please enter your age'),
	React.createElement ('p', {}, getLocation(user.location)),
	React.createElement ('p', {}, user.options.length > 0 ? 'Here are some options' : 'No options'),
	123
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
//ReactDOM.render(template, appRoot);