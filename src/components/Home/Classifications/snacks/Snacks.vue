<template>
	<div class="Snacks-main">
		<div
			v-for="Snack in Snacks"
			:key="Snack.g_id"
			class="Snacks-main-itme"
			@click="snacksClick(Snack)"
		>
			<div class="Snacks-main-itme-name">{{ Snack.g_name }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//拿取main中零食的信息
			Snacks: this.$store.state.mainShop.Snacks,
		};
	},
	methods: {
		//点击商品携带当前商品的信息
		snacksClick(Snack) {
			//判断是否点击奥利奥
			if (Snack.g_name === "奥利奥") {
				this.$store.commit("resMainShopOreo", Snack);
				this.$router.push({ name: "oreo" });
			}
			//判断是否点击糖果
			if (Snack.g_name === "糖果") {
				this.$store.commit("resMainShopCandy", Snack);
				this.$router.push({ name: "candy" });
			}
			//判断是否点击奶茶
			if (Snack.g_name === "奶茶") {
				this.$store.commit("resMainShopMilkTea", Snack);
				this.$router.push({ name: "milktea" });
			}
		},
	},
};
</script>

<style>
.Snacks-main {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	overflow: auto;
}
.Snacks-main-itme {
	margin: 5%;
	height: 20vh;
	width: 40%;
	background-color: white;
	transform: scale(1);
}
.Snacks-main-itme-name {
	position: absolute;
	bottom: 0;
	width: 100%;
}
</style>
