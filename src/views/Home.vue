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
export default {
	data() {
		return {
			active: 0,
		};
	},
	methods: {
		switchTab(newActive) {
			if (newActive == 0) {
				this.$router.push({ name: "main" });
			}
			if (newActive == 1) {
				this.$router.push({ name: "type" });
			}
			if (newActive == 2) {
				this.$router.push();
			}
			if (newActive == 3) {
				this.$router.push();
			}
			if (newActive == 4) {
				this.$router.push({ name: "user" });
			}
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
