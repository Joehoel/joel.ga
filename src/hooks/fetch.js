import { toRefs, reactive, onBeforeMount } from "@vue/composition-api";

export default function(url, options) {
	const state = reactive({
		response: [],
		error: null,
		loading: false,
	});
	const fetchData = async () => {
		state.loading = true;
		try {
			const res = await fetch(url, options);
			const json = await res.json();
			state.response = json;
		} catch (errors) {
			state.error = errors;
		} finally {
			state.loading = false;
		}
	};

	onBeforeMount(() => {
		fetchData();
	});

	return { ...toRefs(state), fetchData };
}
