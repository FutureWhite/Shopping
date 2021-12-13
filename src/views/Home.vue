<template>
	<div class="home">
		<router-view></router-view>
		<div class="home-foot">
			<van-tabbar v-model="active" @change="switchTab">
				<van-tabbar-item icon="home-o">首页</van-tabbar-item>
				<van-tabbar-item icon="apps-o">分类</van-tabbar-item>
				<van-tabbar-item icon="underway-o">签到</van-tabbar-item>
				<van-tabbar-item icon="shopping-cart-o" badge="20"
					>购物车</van-tabbar-item
				>
				<van-tabbar-item icon="user-o">用户中心</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
const routeConfigs = [
	{ name: "main", active: 0 },
	{ name: "type", active: 1 },
	{ name: "signin", active: 2 },
	{ name: "shopping", active: 3 },
	{ name: "user", active: 4 },
];
export default {
	data() {
		return {
			//主页底部跳转绑定的数字
			active: 0,
			//当前分类跳转的数字
			activeKey: this.$store.state.activeKey,
		};
	},
	methods: {
		//这是主页面底部点击时绑定的跳转
		switchTab(newActive) {
			routeConfigs.forEach((config) => {
				if (config.active === newActive) {
					this.$router.push({ name: config.name });
				}
			});
		},
	},
	watch: {
		$route(to) {
			const routeName = to.path.split("/")[2].toLowerCase();
			routeConfigs.forEach((config) => {
				if (config.name === routeName) {
					this.active = config.active;
				}
			});
		},
	},
};
</script>

<style>
.home {
	width: 100%;
	height: 100%;
	background-color: rgb(247, 247, 247);
}
.home-head {
	padding: 1vh 1vh 0 1vh;
}
.home-content {
	height: calc(100vh - 114px);
	padding-top: 7px;
	overflow: auto;
	padding-left: 1vh;
	padding-right: 1vh;
}
.home-nav {
	height: 43vh;
	background-color: white;
	border-radius: 10px 10px 0 0;
	overflow: hidden;
}
.my-swipe .van-swipe-item {
	color: #fff;
	font-size: 20px;
	line-height: 150px;
	text-align: center;
	background-color: #39a9ed;
	border-radius: 10px 10px 0 0;
}
.my-swipe {
	height: 28vh;
}
.home-nav-sort {
	display: flex;
	height: 15vh;
}
.home-nav-sort-itme {
	width: 25%;
	padding-top: 2vh;
}
.home-nav-sort-itme-dec {
	height: 50px;
	width: 50px;
	margin: auto;
	background-color: #a39efe;
	border-radius: 50px;
	line-height: 60px;
}
.home-nav-sort-itme-word {
	font-size: 13px;
}

.van-swipe-item img {
	height: 100%;
	width: 100%;
}
.home-content-collage {
	margin-top: 2vh;
	height: 33vh;
	background-color: white;
}
.home-content-collage-head {
	height: 5vh;
	display: flex;
	font-size: 13px;
	padding: 1vh;
}
</style>
