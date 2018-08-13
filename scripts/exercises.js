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