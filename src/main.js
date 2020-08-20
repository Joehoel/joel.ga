import Vue from "vue"
import VueCompositionAPI from "@vue/composition-api"
Vue.use(VueCompositionAPI)

import App from "./App.vue"
import router from "./router"
import { firestorePlugin } from "vuefire"

import "./assets/styles/index.css"

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount("#app")
