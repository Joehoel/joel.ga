class Box {
  constructor(isLeft) {
    this.y = height / 2;
    this.width = 20;
    this.height = 100;
    this.ychange = 0;

    if (isLeft) {
      this.x = this.width;
    } else {
      this.x = width - this.width;
    }
  }

  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }

  update(steps) {
    this.y += this.ychange;
    this.y = constrain(this.y, this.height / 2, height - this.height / 2);
  }

  move(steps) {
    this.ychange = steps;
  }
}
