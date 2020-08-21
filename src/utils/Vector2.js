export default class Vector2 {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	set(x, y) {
		this.x = x
		this.y = y
	}

	add(x, y) {
		this.x += x
		this.y += y
	}

	multiply(x, y) {
		this.x *= x
		this.y *= y
	}

	subtract(x, y) {
		this.x -= x
		this.y -= y
	}
}
