<template>
	<main class="flex flex-col justify-center items-center mt-16">
		<!-- <div class="bg-white rounded shadow-lg p-8">
			<h1 class="text-2xl font-semibold">Work in progress...</h1>
		</div>-->

		<Card>
			<div class="game font-mono">
				<svg
					class="overflow-auto box-content border-gray-900 border-4"
					:width="width"
					:height="height"
					:viewBox="`0 0 ${width} ${height}`"
				>
					<rect :width="width" :height="height" fill="#000" />
					<text :x="width / 2 - 60" :y="60" fill="#fff" class="text-4xl">
						{{ paddles[0].score }}
					</text>
					<text :x="width / 2 + 40" :y="60" fill="#fff" class="text-4xl">
						{{ paddles[1].score }}
					</text>
					<line
						:x1="width / 2"
						y1="0"
						:x2="width / 2"
						:y2="height"
						stroke="#fff"
						stroke-width="5"
						stroke-dasharray="16"
					/>
					<rect
						v-for="(paddle, index) in paddles"
						:key="`paddle-${index}`"
						:transform="`translate(${paddle.x - paddleWidth},${paddle.y})`"
						:width="paddleWidth"
						:height="paddleHeight"
						fill="#fff"
					/>

					<circle
						fill="#fff"
						cx="0"
						cy="0"
						:transform="`translate(${ball.x},${ball.y})`"
						:r="ball.radius"
						class="ball"
					/>
				</svg>
			</div>
		</Card>
	</main>
</template>

<script>
import { computed, reactive } from "@vue/composition-api";
import Card from "@/components/Card";

export default {
	components: {
		Card,
	},
	setup() {
		const state = reactive({
			width: 600,
			height: 400,
			paddleWidth: 20,
			paddleHeight: 100,
			started: false,
			upArrowPressed: false,
			downArrowPressed: false,
		});

		const paddles = reactive([
			{
				width: 20,
				height: 100,
				x: 40,
				y: state.height / 2 - state.paddleHeight / 2,
				score: 0,
			},
			{
				width: 20,
				height: 100,
				x: state.width - state.paddleWidth,
				y: state.height / 2 - state.paddleHeight / 2,
				score: 0,
			},
		]);

		const ball = reactive({
			x: 300,
			y: 200,
			radius: 7,
			speed: 7,
			velocity: {
				x: 5,
				y: 5,
			},
		});

		const update = () => {
			setInterval(() => {
				const [user, ai] = paddles;
				const player = ball.x < state.width / 2 ? user : ai;
				if (state.upArrowPressed && user.y > 0) {
					user.y -= 8;
				} else if (
					state.downArrowPressed &&
					user.y < state.height - user.height
				) {
					user.y += 8;
				}

				ball.x += ball.velocity.x;
				ball.y += ball.velocity.y;

				ai.y += (ball.y - (ai.y + ai.height / 2)) * 0.09;

				if (ball.y <= 0 || ball.y + ball.radius >= state.height) {
					ball.velocity.y *= -1;
				}
				if (ball.x + ball.radius >= state.width) {
					user.score += 1;
					reset();
				}

				if (ball.x - ball.radius <= 0) {
					ai.score += 1;
					reset();
				}

				if (collisionDetect(player, ball)) {
					let angle = 0;

					if (ball.y < player.y + player.height / 2) {
						// then -1 * Math.PI / 4 = -45deg
						angle = (-1 * Math.PI) / 4;
					} else if (ball.y > player.y + player.height / 2) {
						// if it hit the bottom of paddle
						// then angle will be Math.PI / 4 = 45deg
						angle = Math.PI / 4;
					}
					ball.velocity.x =
						(player === user ? 1 : -1) * ball.speed * Math.cos(angle);
					ball.velocity.y = ball.speed * Math.sin(angle);

					ball.speed += 0.2;
				}
			}, 1000 / 60);
		};

		const start = () => {
			state.started = true;
			update();
		};

		const reset = () => {
			ball.speed = 7;
			ball.x = state.width / 2;
			ball.y = state.height / 2;
			ball.velocity.x *= -1;
			ball.velocity.y *= -1;
		};

		const collisionDetect = (player, ball) => {
			// returns true or false
			const playerTop = player.y;
			const playerRight = player.x;
			const playerBottom = player.y + player.height;
			const playerLeft = player.x - player.width;

			const ballTop = ball.y - ball.radius;
			const ballRight = ball.x + ball.radius;
			const ballBottom = ball.y + ball.radius;
			const ballLeft = ball.x - ball.radius;

			return (
				ballLeft < playerRight &&
				ballTop < playerBottom &&
				ballRight > playerLeft &&
				ballBottom > playerTop
			);
		};

		window.addEventListener("keydown", keyDownHandler);
		window.addEventListener("keyup", keyUpHandler);

		// gets activated when we press down a key
		function keyDownHandler(event) {
			if (!state.started) start();
			// get the keyCode
			switch (event.keyCode) {
				// "up arrow" key
				case 38:
					// set state.upArrowPressed = true
					state.upArrowPressed = true;
					break;
				// "down arrow" key
				case 40:
					state.downArrowPressed = true;
					break;
			}
		}

		// gets activated when we release the key
		function keyUpHandler(event) {
			switch (event.keyCode) {
				// "up arraow" key
				case 38:
					state.upArrowPressed = false;
					break;
				// "down arrow" key
				case 40:
					state.downArrowPressed = false;
					break;
			}
		}

		return { ...state, paddles, ball };
	},
};
</script>

<style scoped>
</style>
