import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Snake from "../views/Snake.vue"
import Pong from "../views/Pong.vue"
// import useUser from "../hooks/user"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/snake",
		name: "Snake",
		component: Snake,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/pong",
		name: "Pong",
		component: Pong,
		meta: {
			requiresAuth: true,
		},
	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
})

// const { user } = useUser()

// router.beforeEach((to, from, next) => {
// 	if (to.matched.some(record => record.meta.requiresAuth)) {
// 		// this route requires auth, check if logged in
// 		// if not, redirect to login page.
// 		if (!user.value) {
// 			next({
// 				path: "/login",
// 			})
// 		} else {
// 			next()
// 		}
// 	} else {
// 		next() // make sure to always call next()!
// 	}
// })

export default router
