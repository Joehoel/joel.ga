import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import { firestorePlugin } from "vuefire";
import firebase from "./firebase";
import App from "./App";
import router from "./router";
import hooks from "@u3u/vue-hooks";

// import VeeValidate from "vee-validate"

import "./rules";
import "./assets/styles/index.css";

// Vue.use(VeeValidate, { inject: true })
Vue.use(VueCompositionAPI);
Vue.use(hooks);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

let app = "";
firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			// store,
			render: h => h(App),
		}).$mount("#app");
	}
});

// new Vue({
// 	router,
// 	render: h => h(App),
// }).$mount("#app")
