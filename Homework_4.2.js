"use strict";

let code = 'ACGT';
let obj = {
  A: "T",
  C: "G",
  G: "C",
  T: "A",
};
code = code.replace(/A|C|G|T/gi, (letter) => obj[letter])

console.log(code)
