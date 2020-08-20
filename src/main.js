import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VueCompositionAPI from "@vue/composition-api"
import { firestorePlugin } from "vuefire"

import "./assets/styles/index.css"

Vue.use(firestorePlugin)
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount("#app")
