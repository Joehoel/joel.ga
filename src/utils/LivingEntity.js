import Vector2 from "@/utils/Vector2";
import Entity from "@/utils/Entity";

export default class LivingEntity extends Entity {
	constructor(pos, speed = new Vector2()) {
		super(pos);
		this.speed = speed;
	}

	set(other) {
		super.set(other);
		this.speed.set(other.speed.x, other.speed.y);
	}
}
