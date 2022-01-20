"use strict";

function generateStr(s1, s2) {
  let str = s1 + s2;
  let mySet = new Set(str.split('').sort());
  return (Array.from(mySet).join(''));

}

const s1 = 'aallrm';
const s2 = 'kjbnkgn'

console.log(generateStr(s1, s2))
