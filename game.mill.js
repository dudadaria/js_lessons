"use strict";

class Game {
  constructor(answers) {
    this.answers = answers;
    this.step = 0;
    this.points = 0
    this.gameIsOver = false;
  }

  greetings() {
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

  resetGame() {
    this.gameIsOver = false;
    this.step = 0;
  }

  start() {
    this.greetings();
    this.answers.forEach(() => {
      if (this.gameIsOver) {
        return;
      }

      const text = this.createText()
      const result = prompt(text)
      if (!result) {
        this.gameIsOver = true;
        alert("Вы вышли из игры");
      } else if (result.toLowerCase() === this.answers[this.step].answer.toLowerCase()) {
        alert('Это правильный ответ');
        this.points++
      } else {
        alert('Это не правильный ответ');
      }
      this.nextStep()
    });
    this.resetGame()
    {
      if (this.points === 0 || this.points === 5) {
        alert('Вы набрали ' + this.points + ' баллов')
      }

      if (this.points === 1) {
        alert('Вы набрали ' + this.points + ' балл')
      }
      if (this.points === 2 || this.points === 3 || this.points === 4) {
        alert('Вы набрали ' + this.points + ' балла')
      }
    }

  }
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
    question: "За чем послала жена мужа в мультфильме 'Падал прошлогодний снег'?",
    option: 'A. За подснежниками, B. За спичками, C. За елкой, D. За дровами',
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


const
  game = new Game(answers);
