class Fruit {
	constructor() {
		this.x
		this.y
	}

	new() {
		this.x = (Math.floor(Math.random() * grid.rows - 1) + 1) * scale
		this.y = (Math.floor(Math.random() * grid.columns - 1) + 1) * scale
	}

	draw() {
		ctx.fillStyle = "#4299E1"
		ctx.fillRect(this.x, this.y, scale, scale)
	}
}
