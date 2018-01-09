'use strict';

var result = "";
const elem = document.getElementById("result");
// elem.innerHTML = result;

var num = +prompt('Сколько ворон сидит на ветке?');


function numberOfCrows(num) {
  if(num !== null) {
    console.log(num);
    if(num.substr(-1) == 1) {
      console.log(num.substr(-1));
      result = "На ветке сидит " + num + " ворона."

    }
  } else {
    alert("Ошибка. Введите число!");
  }
}

function result(string) {
  result += string;
  elem.innerHTML = result;
}

function isLeapYear () {
  
}

//console.log(isLeapYear(1600));  //true
//console.log(isLeapYear(2100));  //false
//console.log(isLeapYear(2012)); //true
//console.log(isLeapYear());    //Error - year is not found

