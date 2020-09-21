import LivingEntity from "@/utils/LivingEntity";

export default class Ball extends LivingEntity {
	constructor(pos, speed, radius) {
		super(pos, speed);
		this.radius = radius;
	}

	set(other) {
		super.set(other);
		this.radius = other.radius;
	}

	collides(wall) {
		return (
			this.pos.x - this.radius <
				wall.pos.x - wall.size.x / 2 + wall.size.x &&
			this.pos.x + this.radius > wall.pos.x - wall.size.x / 2 &&
			this.pos.y - this.radius <
				wall.pos.y - wall.size.y / 2 + wall.size.y &&
			this.pos.y + this.radius > wall.pos.y - wall.size.y / 2
		);
	}

	// collisionAngle(paddle) {
	// 	return this.speed.getAngle();
	// }
}
