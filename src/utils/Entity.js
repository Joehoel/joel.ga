export default class Entity {
	constructor(pos) {
		this.pos = pos;
	}

	set(other) {
		this.pos.set(other.pos.x, other.pos.y);
	}
}
