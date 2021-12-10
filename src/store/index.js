import { createStore } from "vuex";

const store = createStore({
	state: {
		//这是登录页面请求后存储的用户信息对象
		userInformation: {},
		//这是进入home页面后请求的商品信息
		mainShop: {},
		//这是香蕉的详细信息
		mainShopBanana: {},
		//这是苹果的详细信息
		mainShopApple: {},
		//这是梨子的详细信息
		mainShopPear: {},
		//这是电脑的详细信息
		mainShopComputer: {},
		//这是手机的详细信息
		mainShopPhone: {},
		//这是键盘的详细信息
		mainShopKeybroad: {},
		//这是奥利奥的详细信息
		mainShopOreo: {},
		//这是糖果的详细信息
		mainShopCandy: {},
		//这是奶茶的详细信息
		mainShopMilkTea: {},
		//存贮类别的跳转
		activeKey: 0,
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
		//香蕉信息
		resMainShopBanana(state, params) {
			state.mainShopBanana = params;
		},
		//苹果信息
		resMainShopApple(state, params) {
			state.mainShopApple = params;
		},
		//梨子信息
		resMainShopPear(state, params) {
			state.mainShopPear = params;
		},
		//电脑信息
		resMainShopComputer(state, params) {
			state.mainShopComputer = params;
		},
		//手机信息
		resMainShopPhone(state, params) {
			state.mainShopPhone = params;
		},
		//键盘信息
		resMainShopKeybroad(state, params) {
			state.mainShopKeybroad = params;
		},
		//奥利奥信息
		resMainShopOreo(state, params) {
			state.mainShopOreo = params;
		},
		//糖果信息
		resMainShopCandy(state, params) {
			state.mainShopCandy = params;
		},
		//奶茶信息
		resMainShopMilkTea(state, params) {
			state.mainShopMilkTea = params;
		},
		//类别跳转
		resActiveKey(state, params) {
			state.activeKey = params;
		},
	},
	getters: {},
});

export default store;
