'use strict'


class Snake {
  constructor() {
    this.possibleDirections = ['down', 'up', 'left', 'right'];

    this.body = [
      {
        x: 1,
        y: 1
      },
      {
        x: 1,
        y: 2
      },
      {
        x: 1,
        y: 3
      }
    ]
    this.direction = 'down'
  }
}