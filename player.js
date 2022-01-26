'use strict'
/**
 * Объект игрока, здесь будут все свойства связанные с ним.
 * @property {int} х Позиция по Х-координате.
 * @property {int} y Позиция по Y-координате.
 */

const player = {
  x: 0,
  y: 0,

  /**
   * Двигает игрока по переданному направлению.
   * @param {{x: int, y: int}} nextPoint Следующая точка пользователя.
   */
  move(nextPoint) {
    this.x = nextPoint.x;
    this.y = nextPoint.y;
  }
}
