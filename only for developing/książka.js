function areYouLucky() {
	var foo = Math.floor(Math.random() * 100);

	if (foo > 50) {
		alert('Jesteś szczęściarzem');
	} else {
		alert('Nie jesteś szczęściarzem');
	}
};

(function() {
	var shout = 'Ja żyję';
	alert(shout);
})();
