"use strict"

let a = 8;
let b = 2;

function sum(a, b) {
  return (a + b)
}


function multi(a, b) {
  return (a * b)
}


function div(a, b) {
  return (a / b)
}


function diff(a, b) {
  return (a - b)
}


let arg1 = 2;
let arg2 = 3;
let operation = sum || multi || div || diff;

function mathOperation(arg1, arg2, operation) {

  switch (operation) {
    case '+':
      return sum(arg1, arg2);

    case '*':
      return (multi(arg1, arg2));

    case'/':
      return (div(arg1, arg2));
    case'-':
      return (diff(arg1, arg2));

    default:
      return ("Неверное значение");
  }
}


console.log(mathOperation(5, 10, '/'));
