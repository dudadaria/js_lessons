"use strict"

let number = +prompt('Введите число');

function displayMessage(num) {
  let rest100 = (num % 100);
  let rest10 = (num % 10);
  if (rest100 <= 19) {
    switch (rest100) {
      case 1:
        return "Ваша сумма в " + num + " рубль успешно зачислена";
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 0:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
        return "Ваша сумма в " + num + " рублей успешно зачислена";
      case 2:
      case 3:
      case 4:
        return "Ваша сумма в " + num + " рубля успешно зачислена";
      default:
        return "Неверное значение";
    }
  }
  if (rest100 > 19) {
    switch (rest10) {
      case 1:
        return "Ваша сумма в " + num + " рубль успешно зачислена";
      case 5:
        case 6:
      case 7:
      case 8:
      case 9:
      case 0:
        return "Ваша сумма в " + num + " рублей успешно зачислена";
      case 2:
      case 3:
      case 4:
        return "Ваша сумма в " + num + " рубля успешно зачислена";
      default:
        return "Неверное значение";
    }
  }
}

let answer = displayMessage(number)

alert(answer)
