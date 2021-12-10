<template>
	<div class="user-main">
		<div class="user-main-head">
			<div style="height: 11vh"></div>
			<div class="user-main-head-son">
				<van-image
					height="60"
					width="60"
					fit="cover"
					round
					src="https://img01.yzcdn.cn/vant/cat.jpeg"
				/>
				<div class="user-main-head-son-userName">{{ userName }}</div>
			</div>
		</div>
		<div class="user-main-nav">
			<div class="user-main-nav-itme">
				<div class="user-main-nav-itme-top">{{ userBalance }}</div>
				<div class="user-main-nav-itme-bottom">余额</div>
			</div>
			<div class="user-main-nav-itme">
				<div class="user-main-nav-itme-top"></div>
				<div class="user-main-nav-itme-bottom">优惠券</div>
			</div>
			<div class="user-main-nav-itme">
				<div class="user-main-nav-itme-top">{{ userPurchases }}</div>
				<div class="user-main-nav-itme-bottom">购买数</div>
			</div>
			<div class="user-main-nav-itme">
				<div class="user-main-nav-itme-top"></div>
				<div class="user-main-nav-itme-bottom">积分</div>
			</div>
		</div>
		<!-- 占位div -->
		<div style="height: 2vh"></div>
		<div class="user-main-navtow">
			<div class="user-main-navtow-itme">
				<div class="user-main-navtow-itme-top">
					<van-icon name="shop-o" size="30" />
				</div>
				<div class="user-main-navtow-itme-bottom">待支付</div>
			</div>
			<div class="user-main-navtow-itme">
				<div class="user-main-navtow-itme-top">
					<van-icon name="logistics" size="30" />
				</div>
				<div class="user-main-navtow-itme-bottom">待发货</div>
			</div>
			<div class="user-main-navtow-itme">
				<div class="user-main-navtow-itme-top">
					<van-icon name="goods-collect-o" size="30" />
				</div>
				<div class="user-main-navtow-itme-bottom">待收货</div>
			</div>
			<div class="user-main-navtow-itme">
				<div class="user-main-navtow-itme-top">
					<van-icon name="comment-o" size="30" />
				</div>
				<div class="user-main-navtow-itme-bottom">待评价</div>
			</div>
			<div class="user-main-navtow-itme">
				<div class="user-main-navtow-itme-top">
					<van-icon name="balance-list-o" size="30" />
				</div>
				<div class="user-main-navtow-itme-bottom">订单</div>
			</div>
		</div>
		<!-- 占位div -->
		<div style="height: 2vh"></div>
		<div class="user-main-setting">
			<van-cell
				title="地址管理"
				is-link
				icon="location-o"
				@click="addressSet"
			/>
			<van-cell title="我的钱包" is-link icon="balance-pay" />
			<van-cell title="我的优惠" is-link icon="coupon-o" />
			<van-cell title="我的收藏" is-link icon="star-o" />
			<van-cell title="我的足迹" is-link icon="underway-o" />
			<van-cell title="修改密码" is-link icon="records" />
		</div>
		<!-- 占位div -->
		<div style="height: 2vh"></div>
		<div style="width: 85vw; margin: auto">
			<van-button type="danger" block @click="out">退出登录</van-button>
		</div>
		<!-- 占位div -->
		<div style="height: 2vh"></div>
		<!-- 地址管理 -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			//这是用户名的信息
			userName: this.$store.state.userInformation.name,
			//这是余额的信息
			userBalance: this.$store.state.userInformation.balance,
			//这是购买数的信息
			userPurchases: this.$store.state.userInformation.purchases,
			//想子组件传递值
		};
	},
	methods: {
		out() {
			this.$router.push("/");
		},
		addressSet() {
			this.$router.push({ name: "address" });
		},
	},
};
</script>

<style>
.user-main {
	height: calc(100vh - 50px);
	width: 100%;
	background-image: url(../../assets/pexels-darius-krause-2470655.jpg);
	background-size: cover;
	overflow: auto;
}
.user-main-head {
	height: 23vh;
}
.user-main-head-son {
	display: flex;
	padding-left: 10vw;
	line-height: 60px;
}
.user-main-head-son-userName {
	margin-left: 10vw;
	font-size: 20px;
	color: white;
}
.user-main-nav {
	width: 85vw;
	height: 10vh;
	margin: auto;
	background-color: rgba(0, 0, 0, 0.61);
	display: flex;
	border-radius: 10px;
}
.user-main-nav-itme {
	width: 25%;
}
.user-main-nav-itme-top {
	padding-top: 2vh;
	height: 4vh;
	color: rgba(255, 255, 255, 0.507);
	font-size: 17px;
}
.user-main-nav-itme-bottom {
	color: white;
	font-size: 12px;
}
.user-main-navtow {
	width: 85vw;
	height: 10vh;
	margin: auto;
	display: flex;
	background-color: rgb(240, 240, 240);
}
.user-main-setting {
	width: 85vw;
	margin: auto;
	background-color: rgb(240, 240, 240);
}
.van-cell__title,
.van-cell__value {
	flex: 1;
	text-align: left;
}
.user-main-navtow-itme {
	padding-top: 1.5vh;
	width: 25%;
}
.user-main-navtow-itme-top {
	margin: auto;
}
.user-main-navtow-itme-bottom {
	font-size: 13px;
}
</style>
