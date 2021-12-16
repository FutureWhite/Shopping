<template>
	<div class="allDetail-main">
		<div class="allDetail-main-head">
			<van-nav-bar
				title="商品列表"
				left-text="返回"
				left-arrow
				@click-left="onClickLeft"
			>
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
			<van-dropdown-menu>
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item v-model="value2" :options="option2" />
			</van-dropdown-menu>
		</div>
		<div class="allDetail-main-content">
			<div class="allShop-main">
				<div
					class="allShop-main-content"
					v-for="item in list"
					:key="item.g_id"
					@click="goDetail(item)"
				>
					<div class="allShop-main-content-word">
						<div class="allShop-main-content-word-name">
							{{ item.g_name }}
						</div>
						<div class="allShop-main-content-word-price">
							￥{{ item.price }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value1: 0,
			value2: "a",
			option1: [
				{ text: "全部商品", value: 0 },
				{ text: "新款商品", value: 1 },
			],
			option2: [
				{ text: "默认排序", value: "a" },
				{ text: "价格升序", value: "b" },
				{ text: "价格降序", value: "c" },
			],
			list: [],
		};
	},
	methods: {
		onClickLeft() {
			const params = this.$route.params;
			this.$router.push({
				name: "type",
				query: { backSub: params.type },
			});
		},
		goDetail(item) {
			this.$store.commit("resAllShopSave", item);
			this.$router.push({ name: "GoodDetail" });
		},
	},
	created() {
		const { type, id } = this.$route.params;
		const goodList = this.$store.state.mainShop[type];
		const good = goodList.filter((good) => good.g_id === Number(id));
		if (good && good.length === 1) {
			this.list = JSON.parse(good[0].goodspulsList);
		}
	},
};
</script>

<style>
.allDetail-main {
	height: calc(100vh - 50px);
}
.allShop-main {
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
	overflow: auto;
}
.allShop-main-content {
	width: 40vw;
	margin: 5vw;
	height: 30vh;
	transform: scale(1);
	background-color: white;
}
.allShop-main-content-word {
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
}
.allShop-main-content-word-price {
	color: orange;
}
</style>
