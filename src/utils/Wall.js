import Entity from "@/utils/Entity";

export default class Wall extends Entity {
	constructor(pos, size) {
		super(pos);
		this.size = size;
	}

	get width() {
		return this.size.x;
	}

	get height() {
		return this.size.y;
	}

	set(other) {
		super.set(other);
		this.size.set(other.size.x, other.size.y);
	}
}
