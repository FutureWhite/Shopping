import { createStore } from "vuex";

const store = createStore({
	state: {
		//这是登录页面请求后存储的用户信息对象
		userInformation: {},
		//这是进入home页面后请求的商品信息
		mainShop: {},
		//存贮类别的跳转
		activeKey: 0,
		//增加地址的总地址，需要处理
		addressAllInformation: {},
		//临时商品详细储存
		allShopSave: {},
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
		//类别跳转
		resActiveKey(state, params) {
			state.activeKey = params;
		},
		//商品详细储存
		resAllShopSave(state, params) {
			state.allShopSave = params;
		},
	},
	getters: {},
});

export default store;
