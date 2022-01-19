"use strict";

/*
«Напишите программу, которая выводит на экран число равное максимальному количеству букв в слове, при вводе текста»
 */

let text = "В лесу родилась елочка ";
let arr = text.split(' ');

function getMaxWord(text){
let longWord=0;
for(let i = 0; i < arr.length; i++) {
  if (arr[i].length > longWord)
    longWord = arr[i].length;
}
return longWord

}
console.log(getMaxWord(text))
