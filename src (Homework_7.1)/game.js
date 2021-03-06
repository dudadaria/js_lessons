class Game {
  constructor() {
    this.tickIdentifier = null;
    this.massegeEl = document.getElementById('message')
  }

  /**
   * Метод получает другие игровые объекты, которые нужны ему для работы
   * @param {Settings} settings
   * @param {Status} status
   * @param {Board} board
   * @param {Snake} snake
   * @param {Menu} menu
   * @param {Food} food
   */
  init(settings, status, board, snake, menu, food) {
    this.settings = settings;
    this.status = status;
    this.board = board;
    this.snake = snake;
    this.menu = menu;
    this.food = food;
  }

  /**
   * Метод назначает обработчики на события клика на кнопки "Старт", "Пауза", а так же на стрелки на клавиатуре
   */
  run() {
    this.menu.addButtonClickListeners(this.start.bind(this), this.pause.bind(this));
    document.addEventListener('keydown', this.pressKeyHandler.bind(this));
  }

  /**
   * Метод запускает игру
   */
  start() {
    if (this.status.isPaused()) {
      this.status.setPlaying();
      this.tickIdentifier = setInterval(this.doTick.bind(this), 1000 / this.settings.speed);
    }
  }

  /**
   * Метод зставит игру на паузу
   */
  pause() {
    if (this.status.isPlaying()) {
      this.status.setPaused();
      clearInterval(this.tickIdentifier);
    }
  }

  /**
   * Этот метод запустается каждую секунду и осуществляет:
   * 1. Перемещение змейки
   * 2. Проиграет проиграна/выиграна ли игра
   * 3. увеличивает размер змейки если она ест еду
   * 4. заново от рисовывает положение змейки и еды
   */
  doTick() {
    this.snake.performStep();
    this.board.clearBoard();
    this.food.setFood();
    this.board.renderSnake();
  }

  /**
   * В зависимости от нажатой кнопки (вверх, вниз, влево, вправо) будет вызываться соответствующий метод
   * @param {KeyboardEvent} event
   */
  pressKeyHandler(event){
    switch (event.key){
      case "ArrowUp":
        this.snake.changeDirection('up');
        break;
      case "ArrowDown":
        this.snake.changeDirection('down');
        break;
      case "ArrowLeft":
        this.snake.changeDirection('left');
        break;
      case "ArrowRight":
        this.snake.changeDirection('right');
        break;
    }
  }
}
