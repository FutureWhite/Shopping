<template>
	<div class="shoppingshow-main">
		<div class="shoppingshow-main-head">
			<van-nav-bar
				title="商品详细"
				left-text="返回"
				left-arrow
				@click-left="onClickLeft"
			>
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		<div class="shoppingshow-main-content">
			<!-- 商品详细的图片展示 -->
			<div class="shoppingshow-main-content-img">
				<van-swipe class="van-swipe-myself">
					<van-swipe-item
						><img
							src="../../../assets/pexels-alleksana-4451846.jpg"
							alt=""
					/></van-swipe-item>
					<van-swipe-item
						><img
							src="../../../assets/pexels-any-lane-5945848.jpg"
							alt=""
					/></van-swipe-item>
					<van-swipe-item>3</van-swipe-item>
					<van-swipe-item>4</van-swipe-item>
					<template #indicator="{ active }">
						<div class="custom-indicator">{{ active + 1 }}/4</div>
					</template>
				</van-swipe>
			</div>
			<!-- 商品详细的展示说明 -->
			<div class="shoppingshow-main-content-introduce">
				<div class="shoppingshow-main-content-introduce-price">
					<div style="width: 50%; text-align: center">
						￥{{ shoppingInformation.price }}
					</div>
					<div style="width: 50%; text-align: center">11浏览</div>
				</div>
				<div class="shoppingshow-main-content-introduce-text">
					{{ shoppingInformation.g_name }}
				</div>
			</div>
		</div>
		<!-- 商品详细的底部 -->
		<div class="shoppingshow-main-foot">
			<van-action-bar>
				<van-action-bar-icon icon="chat-o" text="客服" />
				<van-action-bar-icon icon="cart-o" text="购物车" />
				<van-action-bar-icon
					icon="star"
					text="已收藏"
					color="#ff5000"
				/>
				<van-action-bar-button type="warning" text="加入购物车" />
				<van-action-bar-button type="danger" text="立即购买" />
			</van-action-bar>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//商品的详细信息
			shoppingInformation: this.$store.state.allShopSave,
		};
	},
	methods: {
		onClickLeft() {
			this.$router.back();
		},
	},
};
</script>

<style>
.shoppingshow-main {
	background-color: rgb(247, 247, 247);
}
.shoppingshow-main-content {
	height: calc(100vh - 96px);
	width: 100%;
	overflow: auto;
}
.custom-indicator {
	position: absolute;
	right: 5px;
	bottom: 5px;
	padding: 2px 5px;
	font-size: 12px;
	background: rgba(0, 0, 0, 0.1);
}
.shoppingshow-main-content-img {
	width: 80vw;
	height: 50vh;
	margin: auto;
	transform: scale(1);
	margin-top: 5vh;
}
.shoppingshow-main-content-img img {
	height: 50vh;
}
.van-swipe-myself {
	width: 80vw;
}
.shoppingshow-main-content-introduce {
	width: 90vw;
	margin: auto;
	background-color: white;
	height: 10vh;
	margin-top: 5vh;
	border-radius: 10px;
}
.shoppingshow-main-content-introduce-price {
	height: 50%;
	line-height: 5vh;
	display: flex;
}
.shoppingshow-main-content-introduce-text {
	height: 50%;
	line-height: 5vh;
}
</style>
