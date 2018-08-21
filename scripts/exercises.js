// zad.1
var arr = [1, 1, 2, 3, 5, 8, 13, 21];
var arr2 = [2, 3, 6, 8, 12 ,15 ,23 ,63 ,1, 100];
function myArrayMax(array) {
    return Math.max.apply(null, array);
}

//zad.2
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//zad.3
function sum(array) {

}

function multiply(array) {

}

const tab = [];
tab[0] = ['Marcin' , '183'];
tab[1] = ['Ania' , '173'];
tab[2] = ['Agnieszka' , '170'];

console.log('imię: ' + tab[0][0] + ', wzrost: ' + tab[0][1]);
console.log('imię: ' + tab[1][0] + ', wzrost: ' + tab[1][1]);
console.log('imię: ' + tab[2][0] + ', wzrost: ' + tab[2][1]);

//zad.4
console.log('start programu');
setTimeout(function(){
    console.log('hello ');
}, 2000);
console.log('world');

console.log(global);

//zad.5 (todo-kurs version-6 'Inerlude - Data types and comparisons')
// how the computer is reading code (just type myHouse and color in a console)
// video no. 8
var myHouse = {color: 'blue'};
var color = myHouse.color;
color = 'red';
// var myHouse is going to be still blue


//zad.6
//video nr. 9
var myHouse1 = {color: 'blue'};
var myHouse2 = myHouse1;
myHouse2.color = 'red';

// var myHouse1 is going to be red