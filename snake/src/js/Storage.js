class Storage {
  static getHighscore() {
    let highscore;

    if (localStorage.getItem("highscore") === null) {
      highscore = 0;
    } else {
      highscore = localStorage.getItem("highscore");
    }
    return highscore;
  }

  static setHighscore(score) {
    if (score > this.getHighscore()) {
      localStorage.setItem("highscore", score);
    }
  }
}
