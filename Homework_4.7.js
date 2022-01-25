"use strict";

/*Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],мы должны получить на выходе объект, в котором в соответствующих свойствах
 описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
  units: 5, //это единицы
    tens: 4, //это десятки
  hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
  необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/


function showBitdepth() {
  let num = +prompt('Введите число от 0 до 999');
  let numStr = String(num);
  if (numStr.length > 3) {
    alert('Ваше число больше 999 попробуйте еще раз');
    showBitdepth()
    return
  }
  if (num < 0) {
    alert('Ваше число меньше 0 попробуйте еще раз');
    showBitdepth()
    return
  }
  if (isNaN(num)) {
    alert('Неверное значение попробуйте еще раз');
    showBitdepth()
    return
  }
  if (numStr.length === 2) {
    numStr = "0" + numStr
  }
  if (numStr.length === 1) {
    numStr = "00" + numStr
  }
  let obj = {}
  obj.units = numStr[2];
  obj.tens = numStr[1];
  obj.hundereds = numStr[0];

  console.log(obj);

}

showBitdepth();
