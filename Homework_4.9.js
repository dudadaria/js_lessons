"use strict";

class Post{
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
  edit(){
    this.text = words;
  }
}

class AttachedPost extends Post{
  constructor(author, text, date, highlighted) {
    super(author, text, date);
    this.highlighted = false;
    super.edit()
  }
  makeTextHighlighted(){
    this.highlighted = true;
  }
}

let words = 'Дата рождения';

const obj = new  AttachedPost('Alex','text', "25.01.2022",false)
obj.makeTextHighlighted()
console.log(obj)
