"use strict";

(function run(cycle) {

    var first, second, total = 0, result = "", elem, id;

    for (var i = 1; i <= cycle; i++) {
        if (i == 8 || i == 13) continue;

        first = getRndNumber();
        second = getRndNumber();

        setResult("Первая кость: <b>" + first + "</b>, Вторая кость: <b>" + second + "</b>.<br>");

        isNumbersEqual();

        isBigDifference();

        totalFunction(first, second);
    }

    setResult(((total > 100) ? "<hr>Победа, вы набрали <b>" : "<hr>Вы проиграли, у вас <b>") + total + "</b> очков");

    printResult();

    function getRndNumber() {
        return Math.floor(Math.random() * 6 + 1);
    }

    function isNumbersEqual() {
        if (first === second) {
            setResult("Выпал дубль. Число <b>" + first + "</b>.<br>");
        }
    }

    function isBigDifference() {
        if ((first < 3 && second > 4) || (first > 4 && second < 3)) {
            setResult("Большой разброс между костями. Разница составляет <b>" + Math.abs(first - second) + "</b>.<br>");
        }
    }

    function totalFunction(first, second) {
        return total += first + second;
    }

    function setResult(string, id = "result") {
        result += string;
        elem = document.getElementById(id);
    }

    function printResult() {
        elem.innerHTML = result;
    }

})(15);
