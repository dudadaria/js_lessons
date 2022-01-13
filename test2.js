"use strict"

function giveAway(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

let input = "да"

while (input.toLowerCase() === "да") {
  const userInput = prompt('напишите короткое предложение');
  const text = giveAway(userInput);
  alert(text);
  input = prompt("Хотите повторить?");
}

alert("конец")
