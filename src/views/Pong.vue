<template>
	<main class="flex flex-col justify-center items-center mt-16">
		<!-- <div class="bg-white rounded shadow-lg p-8">
			<h1 class="text-2xl font-semibold">Work in progress...</h1>
		</div>-->
		<svg
			:width="size.x"
			:height="size.y"
			:viewBox="`${-size.x/2} ${-size.y/2} ${size.x} ${size.y}`"
			class="game"
			style="overflow: visible;"
		>
			<rect :x="-size.x/2" :y="-size.y/2" :width="size.x" :height="size.y" fill="#000" />
			<line
				x1="0"
				:y1="-size.y/2"
				x2="0"
				:y2="size.y/2"
				stroke="#fff"
				stroke-width="5"
				stroke-dasharray="16"
			/>
			<rect
				v-for="(paddle, index) in paddles.values()"
				:key="`paddle-${index}`"
				:transform="`translate(${paddle.pos.x - paddle.size.x /2},${paddle.pos.y - paddle.size.y/2})`"
				:width="paddle.size.x"
				:height="paddle.size.y"
				fill="#fff"
			/>

			<circle
				fill="#fff"
				cx="0"
				cy="0"
				:transform="`translate(${ball.pos.x},${ball.pos.y})`"
				:r="ball.radius"
				class="ball"
			/>
		</svg>
	</main>
</template>

<script>
import Vector2 from "@/utils/Vector2";
import Side from "@/utils/Side";
import Move from "@/utils/Move";
import Wall from "@/utils/Wall";
import Ball from "@/utils/Ball";
import Paddle from "@/utils/Paddle";
import { onMounted, onUnmounted, ref } from "@vue/composition-api";

export default {
	setup() {
		const loading = ref(true);

		const size = ref(new Vector2(600, 400));

		const ball = ref(new Ball(new Vector2(0, 0), new Vector2(1, 1), 6));
		const paddles = ref(
			new Map([
				[
					Side.Left,
					new Paddle(new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0)),
				],
				[
					Side.Right,
					new Paddle(new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0)),
				],
			])
		);
		const walls = ref([]);

		const started = ref(false);
		const loop = ref(null);
		const tps = ref(60);
		const pressedKeys = ref([Move.None]);
		const lastMove = ref(Move.None);
		const keycodeToMove = ref(
			new Map([
				[38, Move.Up],
				[40, Move.Down],
			])
		);

		onMounted(() => {
			loading.value = false;
			size.value.set(size.x, size.y);
			started.value = true;
			window.addEventListener("keydown", handleKeydown);
			window.addEventListener("keyup", handleKeyup);
			ball.value.set(ball);
			walls.value.forEach((wall) => {
				walls.value.push(
					new Wall(
						new Vector2(wall.pos.x, wall.pos.y),
						new Vector2(wall.size.x, wall.size.y)
					)
				);
			});
			loop.value = setInterval(() => tick(), 1000 / tps);

			// socket.on("ball", (ball) => {
			// 	ball.set(ball);
			// });

			// socket.on("paddle", (paddle, side) => {
			// 	paddles.get(side).set(paddle);
			// });

			// socket.on("end", () => {
			// 	loading = true;
			// 	reset();
			// })

			onUnmounted(() => {
				reset();
			});

			function reset() {
				window.removeEventListener("keydown", handleKeydown);
				window.removeEventListener("keyup", handleKeyup);
				clearInterval(loop.value);
			}

			function tick() {
				ball.value.pos.add(ball.value.speed);
				paddles.value.forEach((paddle) => paddle.pos.add(paddle.speed));
			}

			function handleKeydown(e) {
				const move = keycodeToMove.value.get(e.keyCode);
				if (pressedKeys.value.includes(move)) return;

				pressedKeys.value.push(move);
				updateLastMove();
			}

			function handleKeyup(e) {
				const move = keycodeToMove.value.get(e.keyCode);
				if (!pressedKeys.value.includes(move)) return;

				pressedKeys.value.splice(pressedKeys.indexOf(move), 1);
				updateLastMove();
			}

			function updateLastMove() {
				if (
					pressedKeys.value[pressedKeys.value.length - 1] !== lastMove.value
				) {
					lastMove.value = pressedKeys.value[pressedKeys.value.length - 1];
					// socket.emit("move", lastMove);
				}
			}
		});
		return {
			size,
			paddles,
			ball,
		};
	},
};
</script>

<style scoped>
</style>
