import { createStore } from "vuex";

const store = createStore({
	state: {
		//这是登录页面请求后存储的用户信息对象
		userInformation: {},
		//登录请求后的购物车的长度
		shoppingLenght: 0,
		//这是进入home页面后请求的商品信息
		mainShop: {},
		//增加地址的总地址，需要处理
		addressAllInformation: {},
		//临时商品详细储存
		allShopSave: {},
		//购物车
		shopping: [],
	},
	mutations: {
		//用户信息
		resUser(state, params) {
			state.userInformation = params;
		},
		//商品信息
		resMainShop(state, params) {
			state.mainShop = params;
		},
		//分类商品数据
		resTypeGoods(state, params) {
			state.typeGoods = params;
		},
		//商品详细储存
		resAllShopSave(state, params) {
			state.allShopSave = params;
		},
		//购物车
		resShopping(state, params) {
			state.shopping = params;
		},
		//购物车长度
		resShoppingLenght(state, params) {
			state.shoppingLenght = params;
		},
	},
	getters: {
		//临时商品处理后的数据
		allShopSaveAfter(state) {
			const obj = {};
			obj.id = state.allShopSave.g_id;
			obj.name = state.allShopSave.g_name;
			obj.price = state.allShopSave.price;
			obj.quantity = 0;
			obj.userid = state.userInformation.id;
			return obj;
		},
		//处理后的地址信息
		addressAllInformationAfter(state) {
			const obj = {};
			obj.address =
				state.addressAllInformation.city +
				"/" +
				state.addressAllInformation.county +
				"/" +
				state.addressAllInformation.country;

			return obj;
		},
	},
});

export default store;
