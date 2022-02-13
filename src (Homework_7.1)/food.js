class Food {
  constructor() {
    this.x = null;
    this.y = null;
  }
  /**
   * Метод получает другие игровые объектыю которые нужны ему для работы
   * @param {Settings} settings объект настроек
   * @param {Snake} snake объект змейка
   * @param {Board} board бъект игрового поля
   */
  init(settings, snake, board) {
    this.settings = settings;
    this.snake = snake;
    this.board = board;
  }

  /**
   * Метод устанавливает новое случайное положение еды на игровом поле
   */

  setNewFood() {
    const food = this.generateRandomCoordinates();
    this.board.renderFood(food);
  }

  /**
   * Метод генерирует новый объект еды со случайными положением на игровом поле
   * @returns {Food}
   */
  generateRandomCoordinates() {
    while (true) {
      this.x = Math.floor(Math.random() * this.settings.colsCount) + 1;
      this.y = Math.floor(Math.random() * this.settings.rowsCount) + 1;
      let cell = this.board.getCellEl(this.x, this.y);

      if (cell.classList.contains('snakeBody')) {
        continue;
      }
      return this;
    }
  }

}