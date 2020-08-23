import Vue from "vue"
import VueCompositionAPI from "@vue/composition-api"
import { firestorePlugin } from "vuefire"
import App from "./App.vue"
import router from "./router"
// import VeeValidate from "vee-validate"

import "./rules"
import "./assets/styles/index.css"

// Vue.use(VeeValidate, { inject: true })
Vue.use(VueCompositionAPI)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount("#app")
