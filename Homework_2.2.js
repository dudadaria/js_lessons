"use strict"

let symbols = "1234567890!@#$%^&*()-_=+;:[]{}/?.,qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
let password = "";

/**Функция возвращает случайное целое число между min (включительно) и max (не включая max)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Examples
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}


/**Функция генерирует случайный пароль
 * @param {number} passLength длина пароля
 *  @returns {void}
 */
function generate(passLength) {
  let symbolPosition = getRandomInt(0, 87);
  password += symbols.charAt(symbolPosition);
  passLength--;
  if (passLength !== 0) {
    generate(passLength);
  }
}

/** Функция спрашивает у пользователя длину пароля
 * @returns {number}
 */
function askPassLength() {
  return parseInt(prompt("Введите длину пароля"));
}

generate(askPassLength());
alert(`Ваш пароль: ${password}`);
