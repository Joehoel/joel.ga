<template>
	<main class="flex flex-col items-center justify-center mt-8">
		<!-- Highscore overlay -->
		<div class="flex flex-col items-center justify-center px-16 pt-10 bg-white rounded shadow-lg">
			<div
				class="absolute inset-0 w-screen h-screen overflow-hidden bg-black bg-opacity-25"
				v-show="show"
				@click="toggle"
			></div>

			<!-- Highscore modal -->
			<HighscoreModal :show="show" :toggle="toggle" />

			<!-- Scores container -->
			<Scores :score="score" />
			<!-- <h3 id="start">Press any key to start...</h3> -->

			<!-- Game -->
			<svg :width="size.x" :height="size.y" class="game" style="overflow: visible;">
				<rect x="0" y="0" :width="size.x" :height="size.y" fill="#181818" />
				<rect :x="position.x" :y="position.y" :width="scale" :height="scale" fill="#fff" />
				<rect
					v-for="(piece, index) in tail"
					:key="`piece-${index}`"
					:x="piece.x"
					:y="piece.y"
					:width="scale"
					:height="scale"
					fill="#fff"
				/>
				<rect :x="fruit.x" :y="fruit.y" :width="scale" :height="scale" fill="#4299E1" />
			</svg>

			<!-- View Highscores button -->
			<button
				id="highscore-button"
				class="px-4 py-2 m-4 font-bold text-white bg-blue-500 rounded shadow-lg hover:bg-blue-700"
				@click="toggle"
			>View all highscores</button>
		</div>
	</main>
</template>

<script>
import HighscoreModal from "@/components/HighscoreModal";
import Scores from "@/components/Scores";

import useToggle from "@/hooks/toggle";
import useAuth from "@/hooks/auth";
import useHighscore from "@/hooks/highscore";
import Vector2 from "@/utils/Vector2";
import Grid from "@/utils/Grid";
import { onMounted, ref } from "@vue/composition-api";
// import { updateHighscore } from "@/firebase";

export default {
	setup() {
		const { user } = useAuth();
		const { show, toggle } = useToggle();
		const { updateHighscore } = useHighscore();

		const size = ref(new Vector2(600, 600));
		const scale = ref(size.value.x / 15);
		const grid = ref(new Grid(scale.value, size.value));

		const loop = ref(null);
		const tps = ref(10);
		const started = ref(false);
		// const dead = ref(false);
		const score = ref(0);

		const position = ref(
			new Vector2(
				(Math.floor(Math.random() * grid.value.rows - 1) + 1) * scale.value,
				(Math.floor(Math.random() * grid.value.columns - 1) + 1) * scale.value
			)
		);

		const tail = ref([]);
		const speed = ref(new Vector2(0, 0));
		const fruit = ref(
			new Vector2(
				(Math.floor(Math.random() * grid.value.rows - 1) + 1) * scale.value,
				(Math.floor(Math.random() * grid.value.columns - 1) + 1) * scale.value
			)
		);

		onMounted(() => {
			window.addEventListener("keydown", handleKeyDown);
		});

		const start = () => {
			loop.value = setInterval(game, 1000 / tps.value);
			started.value = true;
		};

		const game = () => {
			for (let i = 0; i < tail.value.length - 1; i++) {
				tail.value[i] = tail.value[i + 1];
			}

			tail.value[score.value - 1] = new Vector2(
				position.value.x,
				position.value.y
			);

			position.value.x += speed.value.x;
			position.value.y += speed.value.y;

			if (position.value.x >= size.value.x) {
				position.value.x = 0;
			} else if (position.value.x < 0) {
				position.value.x = size.value.x - scale.value;
			} else if (position.value.y >= size.value.y) {
				position.value.y = 0;
			} else if (position.value.y < 0) {
				position.value.y = size.value.y - scale.value;
			}
			check();
			if (eat(fruit.value)) {
				fruit.value = new Vector2(
					(Math.floor(Math.random() * grid.value.rows - 1) + 1) * scale.value,
					(Math.floor(Math.random() * grid.value.columns - 1) + 1) * scale.value
				);
			}
		};

		const eat = (fruit) => {
			if (position.value.x == fruit.x && position.value.y == fruit.y) {
				score.value++;
				return true;
			}

			return false;
		};

		const steer = (direction) => {
			switch (direction) {
				case "up":
					if (speed.value.y !== scale.value) {
						speed.value.x = 0;
						speed.value.y = -scale.value;
					}
					break;
				case "right":
					if (speed.value.x !== -scale.value) {
						speed.value.x = scale.value;
						speed.value.y = 0;
					}
					break;
				case "down":
					if (speed.value.y !== -scale.value) {
						speed.value.x = 0;
						speed.value.y = scale.value;
					}
					break;
				case "left":
					if (speed.value.x !== scale.value) {
						speed.value.x = -scale.value;
						speed.value.y = 0;
					}
					break;
			}
		};
		const die = () => {
			updateHighscore(user.value.uid, score.value);
			tail.value = [];
			started.value = false;
			score.value = 0;
			clearInterval(loop.value);
			// dead.value = true;
		};

		const check = () => {
			for (let i = 0; i < tail.value.length; i++) {
				if (
					position.value.x == tail.value[i].x &&
					position.value.y == tail.value[i].y
				) {
					die();
				}
			}
		};

		const handleKeyDown = (e) => {
			if (
				e.keyCode == 37 ||
				e.keyCode == 38 ||
				e.keyCode == 39 ||
				e.keyCode == 40
			) {
				if (!started.value) {
					// dead.value = false;
					start();
				}
				eat(fruit.value);

				const direction = e.key.replace("Arrow", "").toLowerCase();
				steer(direction);
			}
		};

		return {
			show,
			toggle,
			user,
			size,
			position,
			fruit,
			tail,
			scale,
			score,
		};
	},
	components: {
		HighscoreModal,
		Scores,
	},
};
</script>

