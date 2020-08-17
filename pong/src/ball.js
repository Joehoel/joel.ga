class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.r = 6;
    this.xspeed = 0;
    this.yspeed = 0;
    this.reset();
    this.acc = 1.5;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;

    let angle = random(-PI / 4, PI / 4);
    this.xspeed = 5 * cos(angle);
    this.yspeed = 5 * sin(angle);

    if (random(1) < 0.5) {
      this.xspeed *= -1;
    }
  }

  accelerate() {
    this.xspeed *= this.acc;
    this.yspeed *= this.acc;
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  edges() {
    if (this.y < 0 || this.y > height) {
      this.yspeed *= -1;
    }

    if (this.x - this.r > width) {
      leftscore++;
      this.reset();
    }

    if (this.x + this.r < 0) {
      rightscore++;
      this.reset();
    }
  }

  checkLeft(p) {
    if (
      this.y - this.r < p.y + p.height / 2 &&
      this.y + this.r > p.y - p.height / 2 &&
      this.x - this.r < p.x + p.width / 2
    ) {
      if (this.x > p.x) {
        let diff = this.y - (p.y - p.height / 2);
        let rad = radians(45);
        let angle = map(diff, 0, p.height, -rad, rad);
        this.xspeed = 5 * cos(angle) * this.acc;
        this.yspeed = 5 * sin(angle) * this.acc;
        this.x = p.x + p.width / 2 + this.r;
        this.accelerate();
      }
    }
  }
  checkRight(p) {
    if (
      this.y - this.r < p.y + p.height / 2 &&
      this.y + this.r > p.y - p.height / 2 &&
      this.x + this.r > p.x - p.width / 2
    ) {
      if (this.x < p.x) {
        let diff = this.y - (p.y - p.height / 2);
        let angle = map(diff, 0, p.height, radians(225), radians(135));
        this.xspeed = 5 * cos(angle) * this.acc;
        this.yspeed = 5 * sin(angle) * this.acc;
        this.x = p.x - p.width / 2 - this.r;
        this.accelerate();
      }
    }
  }
}
