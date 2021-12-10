import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import HomeMain from "../components/HomeMain.vue";
import Classification from "../components/Home/Classification.vue";
import User from "../components/Home/User.vue";
import UserView from "../components/User/index.vue";
import Shopping from "../components/Home/Shopping.vue";
import Fruits from "../components/Home/Classifications/fruits/Fruits.vue";
import FruitsDetail from "../components/Home/Classifications/fruits/detail/FruitsDetail.vue";
import Banana from "../components/Home/Classifications/fruits/detail/Banana.vue";
import Apple from "../components/Home/Classifications/fruits/detail/Apple.vue";
import Pear from "../components/Home/Classifications/fruits/detail/Pear.vue";
import DigitalsDetail from "../components/Home/Classifications/digitals/detail/DigitalsDetail.vue";
import Computer from "../components/Home/Classifications/digitals/detail/Computer.vue";
import Phone from "../components/Home/Classifications/digitals/detail/Phone.vue";
import Keybroad from "../components/Home/Classifications/digitals/detail/Keybroad.vue";
import SnacksDetail from "../components/Home/Classifications/snacks/detail/SnacksDetail.vue";
import Oreo from "../components/Home/Classifications/snacks/detail/Oreo.vue";
import Candy from "../components/Home/Classifications/snacks/detail/Candy.vue";
import MilkTea from "../components/Home/Classifications/snacks/detail/MilkTea.vue";
import Snacks from "../components/Home/Classifications/snacks/Snacks.vue";
import Digitals from "../components/Home/Classifications/digitals/Digitals.vue";
import SignIn from "../components/Home/SignIn.vue";
import Address from "../components/User/Address.vue";
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
					{
						path: "Fruits",
						component: Fruits,
						name: "fruits",
					},

					{ path: "Snacks", component: Snacks, name: "snacks" },
					{ path: "Digitals", component: Digitals, name: "digitals" },
				],
			},
			{
				path: "FruitsDetail",
				component: FruitsDetail,
				name: "fruitsDetail",
				children: [
					{ path: "Banana", component: Banana, name: "banana" },
					{ path: "Apple", component: Apple, name: "apple" },
					{ path: "Pear", component: Pear, name: "pear" },
				],
			},
			{
				path: "SnacksDetail",
				component: SnacksDetail,
				name: "snacksDetail",
				children: [
					{ path: "Oreo", component: Oreo, name: "oreo" },
					{ path: "Candy", component: Candy, name: "candy" },
					{ path: "MilkTea", component: MilkTea, name: "milktea" },
				],
			},
			{
				path: "DigitalsDetail",
				component: DigitalsDetail,
				name: "digitalsDetail",
				children: [
					{ path: "Computer", component: Computer, name: "computer" },
					{ path: "Phone", component: Phone, name: "phone" },
					{ path: "Keybroad", component: Keybroad, name: "keybroad" },
				],
			},

			{
				path: "User",
				component: User,
				children: [
					{ path: "", component: UserView, name: "user" },
					{ path: "Address", component: Address, name: "address" },
				],
			},

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
