'use strict'

/**Здесь будет храниться статус игры, например инраем мы, завершили или остановились*/
class Status {
  constructor() {
    this.setPaused();
  }
  /**это значит что мы играем*/
  setPlaying() {
    this.condition = 'playing';
  }

  /** это значит что игра на паузе*/
  setPaused() {
    this.condition = 'paused';
  }

  /**
   * @return {boolean} если мы сейчас играем, тогда true, иначе false
   */
  isPlaying() {
    return this.condition === 'playing';
  }

  /**
   * @return {boolean} если мы сейчас на паузе, тогда true, иначе false
   */
  isPaused() {
    return this.condition === 'paused';
  }
}
