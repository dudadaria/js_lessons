"use strict"

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');

function getBig(a,b){
  if (a>b){
    return a
  }
  else if (b>a){
    return b
  }
}

let answer = getBig(a,b)

alert('наибольшее число из двух = ' + answer)
