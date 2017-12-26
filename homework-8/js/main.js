"use strict";

var first,
    second,
    total = 0;

for (var i = 1; i <= 15; i++) {
    first = Math.floor(Math.random() * 6 + 1);
    second = Math.floor(Math.random() * 6 + 1);

    if (i == 8 || i == 13) continue;

    total += first + second;

    document.getElementById("result").innerHTML +=
        "<br>Первая кость: <b>" +
        first +
        "</b>, Вторая кость: <b>" +
        second +
        "</b>. ";

    if (first == second) {
        document.getElementById("result").innerHTML +=
            "Выпал дубль. Число <b>" + first + "</b>. ";
    }

    if ((first < 3 && second > 4) || (first > 4 && second < 3)) {
        document.getElementById("result").innerHTML +=
            "Большой разброс между костями. Разница составляет <b>" +
            Math.abs(first - second) +
            "</b>.";
    }

    console.log("Первая кость: " + first + ", Вторая кость: " + second + "\n");
    console.log("total: " + total);
}

document.getElementById("result").innerHTML +=
    total > 100 ?
    "<br><br>Победа, вы набрали <b>" + total + "</b> очков" :
    "<br><br>Вы проиграли, у вас <b>" + total + "</b> очков";