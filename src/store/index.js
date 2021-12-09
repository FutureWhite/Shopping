import { createStore } from "vuex";

const store = createStore({
	state: {
		//这是登录页面请求后存储的用户信息对象
		userInformation: {},
		mainShop: {},
	},
	mutations: {
		//用户信息
		resUser(state, params) {
			state.userInformation = params;
		},
		resMainShop(state, params) {
			state.mainShop = params;
		},
	},
	getters: {},
});

export default store;
