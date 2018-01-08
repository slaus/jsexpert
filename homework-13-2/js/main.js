// Камень побеждает ножницы («камень слишком крепок для ножниц»)
// Бумага побеждает камень («бумага накрывает камень»)
// Ножницы побеждают бумагу («ножницы разрезают бумагу»)
// Если игроки показали одинаковый знак, то засчитывается ничья и игра переигрывается.

var result = "";

const play = document.getElementById("play"),
      player1 = document.getElementById("player1"),
      player2 = document.getElementById("player2"),
      elem = document.getElementById("result");

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function getNameById() {
  switch(getPlayerResult()) {
    case 1:
      return "Камень";
      break; 
    case 2:
      return "Ножницы";
      break;
    case 3:
      return "Бумага";
      break;
  }
}

function determineWinner(play1, play2) {
  if (player1.innerHTML == player2.innerHTML) {
    printResult("Засчитывается ничья и игра переигрывается.<br>");
  } else if (player1.innerHTML === "Камень" && player2.innerHTML === "Ножницы") {
    printResult("Выиграл первый игрок. Камень слишком крепок для ножниц.<br>");
  } else if (player1.innerHTML === "Камень" && player2.innerHTML === "Бумага") {
    printResult("Выиграл второй игрок. Бумага накрывает камень.<br>");
  } else if (player1.innerHTML === "Ножницы" && player2.innerHTML === "Камень") {
    printResult("Выиграл второй игрок. Камень слишком крепок для ножниц.<br>");
  } else if (player1.innerHTML === "Ножницы" && player2.innerHTML === "Бумага") {
    printResult("Выиграл первый игрок. Ножницы разрезают бумагу.<br>");
  } else if (player1.innerHTML === "Бумага" && player2.innerHTML === "Камень") {
    printResult("Выиграл первый игрок. Бумага накрывает камень.<br>");
  } else if (player1.innerHTML === "Бумага" && player2.innerHTML === "Ножницы") {
    printResult("Выиграл второй игрок. Ножницы разрезают бумагу.<br>");
  }
}

function printResult(string) {
  result += string;
  elem.innerHTML = result;
}

function runGame() {
    player1.innerHTML = getNameById();
    player2.innerHTML = getNameById();
    printResult('Первый игрок выбросил "' + player1.innerHTML + '". Второй игрок выбросил "' + player2.innerHTML + '".<br>');
    determineWinner();
}

play.addEventListener("click", runGame);
