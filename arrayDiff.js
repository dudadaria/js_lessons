'use strict'

function arrayDiff(a, b) {
  let a1 = a.toString(',').split(',');
  let b1 = b.toString(',').split(',');
  return JSON.parse("[" + a1.filter(a1 => !b1.includes(a1))+ "]");
}
let a = [9, 8, 3, 6, 8, 9, 0, 9, 2, 4, 7, 0, 6, 3, 4, 3];
let b = [9, -8, 13, -6, 8, 9, 10, -19, -2, -4, -17, -10, -6, -3, 4, 3 ]
console.log(arrayDiff(a, b))
