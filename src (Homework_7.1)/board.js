'use strict'

class Board {
  constructor() {
    this.boardEl = document.getElementById('game')
  }

  /**
   * Метод получает другие игровые объекты, которые нужны ему для работы.
   * @param {Object} settings объект настроек
   * @param {Object} snake объект змейки   *
   */
  init(settings, snake) {
    this.settings = settings;
    this.snake = snake;
  }

  /**
   *Метод отрисовывает игровое поле.
   */
  renderBoard() {
    this.boardEl.innerHTML = '';
    for (let row = 0; row < this.settings.rowsCount; row++) {
      let tr = document.createElement('tr');
      this.boardEl.appendChild(tr);

      for (let col = 0; col < this.settings.colsCount; col++) {
        let td = document.createElement('td');
        tr.appendChild(td);
      }
    }
  }

  /**
   * Метод отрисовывает змейку на доске
   */
  renderSnake() {
    const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);
    if (snakeBodyElems) {
      snakeBodyElems.forEach(function (tdEl) {
        tdEl.classList.add(`snakeBody`);
      })
    }
  }

  /**
   * Метод очищает игровое поле
   */
  clearBoard() {
    const tdElem = document.querySelectorAll('td');
    tdElem.forEach(function (td) {
      td.className = '';
    })
  }

  /**
   *   Получаем ячейку таблицы
   * @param {number} x координата по оси х
   * @param {number} y координата по оси y
   * @return {HTMLTableCellElement} тег td
   */
  getCellEl(x, y) {
    return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);

  }

  /**
   * Получаем набор тегов td, представляющих тело змейки.
   * @param {array} bodyCoords массив объектов с координатами
   * @returns {HTMLTableCellElement[]|null} возвращает набор тегов td если были переданы координаты, иначе null
   */
  getSnakeBodyElems(bodyCoords) {
    if (bodyCoords.length > 0) {
      let bodyElems = [];
      for (let value of bodyCoords) {
        let elem = this.getCellEl(value.x, value.y);
        bodyElems.push(elem);
      }
      return bodyElems;
    }
    return null;
  }

  /**
   * Метод рисует еду на игровом поле
   * @param {Food} coords будущее расположение еды на поле
   * @param {number} coords.x коордитата х
   * @param {number} coords.y координата y
   */
  renderFood(coords) {
    const foodCell = this.getCellEl(coords.x, coords.y);
    foodCell.classList.add('food')
  }
}
