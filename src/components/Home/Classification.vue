<template>
	<div class="classification">
		<div class="classification-head">
			<van-nav-bar title="商品分类">
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		<div class="classification-content">
			<div class="classification-content-left">
				<van-sidebar v-model="activeKey">
					<van-sidebar-item
						v-for="menu of menus"
						:key="menu.key"
						:title="menu.name"
						@click="setGood(menu)"
					/>
				</van-sidebar>
			</div>
			<div class="classification-content-right">
				<div class="goods-main">
					<div
						v-for="item in goods"
						:key="item.g_id"
						class="goods-main-itme"
						@click="goToSub(item)"
					>
						<div class="goods-main-itme-name">
							{{ item.g_name }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
const goodsMap = [
	{ key: "Snacks", name: "零食" },
	{ key: "Electronic", name: "数码" },
	{ key: "Fruits", name: "水果" },
];
export default {
	data() {
		return {
			//类型侧边跳转绑定的数字
			activeKey: 0,
			menus: goodsMap,
			goods: [],
		};
	},
	methods: {
		setGood(menu) {
			this.goods = this.$store.state.mainShop[menu.key];
		},
		goToSub(good) {
			this.$router.push({
				name: "subGood",
				params: { type: goodsMap[this.activeKey].key, id: good.g_id },
			});
		},
	},
	created() {
		// this.goods = this.$store.state.mainShop[goodsMap[0].key];
		const { backSub } = this.$route.query;
		if (backSub) {
			const idx = goodsMap.findIndex((good) => good.key === backSub);
			this.activeKey = idx;
			this.setGood(goodsMap[idx]);
		} else {
			this.setGood(goodsMap[0]);
		}
	},
};
</script>

<style>
.classification-content {
	height: calc(100vh - 96px);
	display: flex;
}
.classification-content-left {
	width: 80px;
	background-color: rgb(252, 252, 252);
}
.classification-content-right {
	width: calc(100vh - 80px);
	height: calc(100vh - 96px);
}
.goods-main {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	overflow: auto;
}
.goods-main-itme {
	margin: 5%;
	height: 20vh;
	width: 40%;
	background-color: white;
	transform: scale(1);
}
.goods-main-itme-name {
	position: absolute;
	bottom: 0;
	width: 100%;
}
</style>
