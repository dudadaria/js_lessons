'use strict'

class Snake {
  constructor() {
    this.possibleDirections = ['down', 'up', 'left', 'right'];
    this.body = [
      {
        x: 1,
        y: 3
      },
      {
        x: 1,
        y: 2
      },
      {
        x: 1,
        y: 1
      }
    ]
    this.direction = 'down'
  }

  /**
   * Меняем направление движения
   * @param {string} newDirection направление может быть down, up, left, right
   * @throws {Error} при передаче некорректного направления выбрасывается ошибка
   */
  changeDirection(newDirection){
    if (!this.possibleDirections.includes(newDirection)){
      throw  new Error ('Передано не верное направление. Вы передали: '+ newDirection);
    }
    if (this.isPassedOppositeDirection(newDirection)){
      return;
    }
    this.direction = newDirection;
  }

  /**
   * Метод проверяет б является ли переданное напрвление протиовположным тому, куда движется змейка
   * @param {string} newDirection новое направление, может быть down, up, left, right
   * @returns {boolean} true если новое направление противоположно текущему, иначе false
   */
  isPassedOppositeDirection(newDirection){
    if (this.direction === 'down' && newDirection === "up"){
      return true;
    }
    if (this.direction === 'up' && newDirection === "down"){
      return true;
    }
    if (this.direction === 'left' && newDirection === "right"){
      return true;
    }
    if (this.direction === 'right' && newDirection === "left"){
      return true;
    }
    return false
  }

  performStep(){
    let currentHeadCoords = this.body[0];
    let newHeadCoords = {
      x: currentHeadCoords.x,
      y: currentHeadCoords.y,
    };
    switch (this.direction){
      case "down":
        newHeadCoords.y++;
        break;
      case "up":
        newHeadCoords.y--;
        break;
      case 'left':
        newHeadCoords.x--;
        break;
      case "right":
        newHeadCoords.x++;
        break;
    }
    this.body.unshift(newHeadCoords);
    this.body.pop();
  }
}
