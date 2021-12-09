<template>
	<div class="shopping-main">
		<div class="shopping-main-head">
			<van-nav-bar title="购物车">
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		<div class="shopping-main-content">
			<van-swipe-cell>
				<van-card
					num="2"
					price="2.00"
					desc="描述信息"
					title="商品标题"
					class="goods-card"
					thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
				/>
				<template #right>
					<van-button
						square
						text="删除"
						type="danger"
						class="delete-button"
					/>
				</template>
			</van-swipe-cell>
		</div>
		<div class="shopping-main-foot">
			<van-submit-bar
				:price="3050"
				button-text="提交订单"
				class="shopping-commit"
			/>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
};
</script>

<style>
.shopping-main-content {
	height: calc(100vh - 150px);
	width: 100%;
}
.shopping-main-foot {
	transform: calc(1);
	height: 50px;
}
.shopping-commit {
	bottom: 50px !important;
}
.goods-card {
	top: 1px;
	background: rgb(255, 253, 255) !important;
}
.delete-button {
	height: 100% !important;
	right: -1px;
}
</style>
