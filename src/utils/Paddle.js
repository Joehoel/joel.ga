import LivingEntity from "@/utils/LivingEntity";

export default class Paddle extends LivingEntity {
	constructor(pos, speed, size) {
		super(pos, speed);
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

	collides(wall) {
		return (
			this.pos.x - this.size.x / 2 <
				wall.pos.x - wall.size.x / 2 + wall.size.x &&
			this.pos.x - this.size.x / 2 + this.size.x >
				wall.pos.x - wall.size.x / 2 &&
			this.pos.y - this.size.y / 2 <
				wall.pos.y - wall.size.y / 2 + wall.size.y &&
			this.pos.y - this.size.y / 2 + this.size.y >
				wall.pos.y - wall.size.y / 2
		);
	}
}
