import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import HomeMain from "../components/HomeMain.vue";
import Classification from "../components/Home/Classification.vue";
import User from "../components/Home/User.vue";
import Shopping from "../components/Home/Shopping.vue";
import Fruits from "../components/Home/Classifications/Fruits.vue";
import SignIn from "../components/Home/SignIn.vue";
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
				children: [
					{ path: "Fruits", component: Fruits, name: "fruits" },
				],
			},
			{ path: "User", component: User, name: "user" },
			{ path: "Shopping", component: Shopping, name: "shopping" },
			{ path: "SignIn", component: SignIn, name: "signin" },
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
