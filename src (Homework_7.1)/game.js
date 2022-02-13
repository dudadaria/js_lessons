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
  init(settings, status, board, snake,menu,food){
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
  run(){
    this.menu.addButtonClickListeners(this.start.bind(this), this.pause.bind(this));
    // document.addEventListener('keydown', this.pressKeyHandler.bind(this));
  }

  /**
   * Метод запускает игру
   */
  start(){
    console.log('start');
  }
  /**
   * Метод зставит игру на паузу
   */
  pause(){
    console.log('pause');
  }
}
