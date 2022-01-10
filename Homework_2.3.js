"use strict"

let a = 2;
let b = 1;

function someNum (a, b){
  if (a > 0 && b > 0) {
    return (a - b)
  }
  if (a < 0 && b < 0) {
    return (a * b)
  }
  else{
    return (a+b)
  }
}
console.log(someNum(2, -5))
