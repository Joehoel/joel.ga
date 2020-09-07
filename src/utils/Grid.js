export default class Grid {
	constructor(scale, size) {
		this.scale = scale
		this.size = size
	}

	get rows() {
		return this.size.x / this.scale
	}
	get columns() {
		return this.size.y / this.scale
	}
}
