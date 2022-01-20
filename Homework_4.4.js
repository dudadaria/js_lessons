"use strict";

/*
«Напишите программу, которая выводит на экран число равное максимальному количеству букв в слове, при вводе текста»
 */



function getMaxWord(text) {
  let arr = text.split(' ');
  arr.sort(function (a, b) {
    return b.length - a.length;
      })
  return arr[0].length;
}




let text = "В лесу родилась елочка ";
console.log(getMaxWord(text))
