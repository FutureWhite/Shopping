import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import HomeMain from "../components/HomeMain.vue";
import Classification from "../components/Home/Classification.vue";
import User from "../components/Home/User.vue";
import UserView from "../components/User/index.vue";
import Shopping from "../components/Home/Shopping.vue";
import SubGoods from "../components/Home/Classifications/SubGoods.vue";
import SignIn from "../components/Home/SignIn.vue";
import Address from "../components/User/Address.vue";
import UpdataAddress from "../components/User/UpdataAddress.vue";
import DeleteAddress from "../components/User/DeleteAddress.vue";
import GoodDetail from "../components/Home/Classifications/Detail.vue";
import Order from "../components/Order.vue";
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
			{
				path: "Type/:type/:id",
				component: SubGoods,
				name: "subGood",
			},
			{
				path: "User",
				component: User,
				children: [
					{ path: "", component: UserView, name: "user" },
					{ path: "Address", component: Address, name: "address" },
					{
						path: "UpdataAddress",
						component: UpdataAddress,
						name: "updataaddress",
					},
					{
						path: "DeleteAddress",
						component: DeleteAddress,
						name: "deleteAddress",
					},
				],
			},

			{ path: "Shopping", component: Shopping, name: "shopping" },
			{ path: "SignIn", component: SignIn, name: "signin" },
		],
	},
	{
		path: "/Home/GoodDetail",
		component: GoodDetail,
		name: "GoodDetail",
	},
	{
		path: "/Home/Order",
		component: Order,
		name: "order",
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
