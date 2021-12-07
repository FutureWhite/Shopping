import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import HomeMain from "../components/HomeMain.vue";
import Classification from "../components/Home/Classification.vue";
import User from "../components/Home/User.vue";
const routes = [
	{
		path: "/",
		component: Login,
	},
	{
		path: "/Home",
		component: Home,
		children: [
			{
				path: "Main",
				component: HomeMain,
				name: "main",
			},
			{
				path: "Type",
				component: Classification,
				name: "type",
			},
			{ path: "User", component: User, name: "user" },
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
