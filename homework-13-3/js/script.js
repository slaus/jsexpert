"use strict";

var result = "";
const elem = document.getElementById("result");
// elem.innerHTML = result;

var num = +prompt("Сколько ворон сидит на ветке?");

if (!isNaN(num)) {
    if (num < 11 && num > 19) {
        result = "На ветке сидит " + num + " ворон.";
    } else if (num.toString().substr(-1) == 1) {
        result = "На ветке сидит " + num + " ворона.";
    } else if (
        num.toString().substr(-1) == 2 ||
        num.toString().substr(-1) == 3 ||
        num.toString().substr(-1) == 4
    ) {
        result = "На ветке сидит " + num + " вороны.";
    } else {
        result = "На ветке сидит " + num + " ворон.";
    }
} else {
    alert("Ошибка. Введите число!");
}

elem.innerHTML = result;

function numberOfCrows() {}

function isLeapYear() {}

//console.log(isLeapYear(1600));  //true
//console.log(isLeapYear(2100));  //false
//console.log(isLeapYear(2012)); //true
//console.log(isLeapYear());    //Error - year is not found
