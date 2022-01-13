"use strict"

let userInput = prompt('напишите короткое предложение');


function giveAway(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

alert (giveAway(userInput))

const result  = confirm("Хотите повторить?");{
  if (result) {
    let userInput = prompt('напишите короткое предложение');
    alert (giveAway(userInput));
     } else {
    alert ("Прощайте =)");
  }
}
