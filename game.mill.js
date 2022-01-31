"use strict";

class Game {
  constructor(answers) {
    this.answers = answers;
    this.step = 0;
  }

  greating() {
    alert("Добро пожаловать на игру \'Кто хочет стать миллионером\'")
  };

  createText() {
    return this.answers[this.step].question + "\n" + String(this.answers[this.step].option)
  }

  nextStep() {
    if (this.answers.length - 1 > this.step) {
      this.step = this.step + 1;
    }
  }

  start() {
    this.answers.forEach(answer => {
      const text = this.createText()
      {
        const result = prompt(text)
        if (result === this.answers[this.step].answer.toLowerCase()) {
          alert('Это правильный ответ')
        } else {
          alert('Это не правильный ответ');
        }
      }
      this.nextStep()
    })
  }

  /**scoring() {
    alert('Вы набрали' + game.start.points + 'очков')
  }**/
}


const answers = [
  {
    question: "Как звали черепашку-ниндзя, который часто говорил на научном жаргоне и имеел страсть к науке и механике?  ",
    option: 'A. Донателло, B. Микеланжело, C. Рафаэль, D. Леонардо',
    answer: 'A',
  },
  {
    question: "Столица Венесуэллы?  ",
    option: 'A. Кападокия, B. Каракас, C. Кавальдос, D. Краков',
    answer: 'B',
  },
  {
    question: "Месяц рождения любимой жены?  ",
    option: 'A. август, B. сентябрь, C. октябрь, D. ноябрь',
    answer: 'C',
  },
  {
    question: "Как правильно пишется салат 'В_н_грет'?  ",
    option: 'A. Венегрет, B. Венигрет, C. Винигрет, D. Винегрет',
    answer: 'D',
  },
  {
    question: "Сколько всего серий в сериале 'Крайний космос?'  ",
    option: 'A. 30, B. 33, C. 36, D. 39',
    answer: 'C',
  }
]


const game = new Game(answers);
game.greating()
game.start()
game.nextStep()
game.createText()
//game.scoring()
