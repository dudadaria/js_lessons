"use strict";

/*Функция принимает число, составленное из цифр переданного числа так,
 чтобы оно было максимально возможным

 createMaxNum(329);// 932
 */

function createMaxNum(num) {

  num = String(num);
  let arr = Array.from(num);
  arr.sort((a, b) => b - a)
  return Number(arr.join(''));

}
console.log(createMaxNum(157935))
