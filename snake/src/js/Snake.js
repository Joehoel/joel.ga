class Snake {
	constructor() {
		this.x = (Math.floor(Math.random() * grid.rows - 1) + 1) * scale
		this.y = (Math.floor(Math.random() * grid.columns - 1) + 1) * scale

		this.xs = scale * 1
		this.ys = 0

		this.total = 0
		this.tail = []

		this._direction
	}

	draw() {
		ctx.fillStyle = "#FFFFFF"
		for (let i = 0; i < this.tail.length; i++) {
			ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
		}
		ctx.fillRect(this.x, this.y, scale, scale)
	}

	update() {
		for (let i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1]
		}

		this.tail[this.total - 1] = { x: this.x, y: this.y }

		this.x += this.xs
		this.y += this.ys

		if (this.x >= canvas.width) {
			this.x = 0
		} else if (this.x < 0) {
			this.x = canvas.width
		} else if (this.y >= canvas.height) {
			this.y = 0
		} else if (this.y < 0) {
			this.y = canvas.height
		}
	}

	eat(fruit) {
		if (this.x == fruit.x && this.y == fruit.y) {
			this.total++
			return true
		}

		return false
	}

	check() {
		for (let i = 0; i < this.tail.length; i++) {
			if (this.x == this.tail[i].x && this.y == this.tail[i].y) {
				// Storage.setHighscore(this.total);
				updateHighscore(currentUser.uid, this.total)
				console.info("Updated Highscore!")
				this.total = 0
				this.tail = []
				clearInterval(loop)
				started = false
			}
		}
	}

	steer(direction) {
		switch (direction) {
			case "up":
				if (this.ys !== scale) {
					this.xs = 0
					this.ys = -scale
				}
				break
			case "right":
				if (this.xs !== -scale) {
					this.xs = scale
					this.ys = 0
				}
				break
			case "down":
				if (this.ys !== -scale) {
					this.xs = 0
					this.ys = scale
				}
				break
			case "left":
				if (this.xs !== scale) {
					this.xs = -scale
					this.ys = 0
				}
				break
			default:
				break
		}
	}
}
