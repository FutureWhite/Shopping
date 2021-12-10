<template>
	<div class="fruits-main">
		<div
			v-for="fruit in fruits"
			:key="fruit.g_id"
			class="fruits-main-itme"
			@click="fruitsClick(fruit)"
		>
			<div class="fruits-main-itme-name">{{ fruit.g_name }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//拿取main中水果的信息
			fruits: this.$store.state.mainShop.Fruits,
		};
	},
	methods: {
		//点击商品携带当前商品的信息
		fruitsClick(fruit) {
			//判断是否点击香蕉
			if (fruit.g_name === "香蕉") {
				this.$store.commit("resMainShopBanana", fruit);
				this.$router.push({ name: "banana" });
			}
			//判断是否点击苹果
			if (fruit.g_name === "苹果") {
				this.$store.commit("resMainShopApple", fruit);
				this.$router.push({ name: "apple" });
			}
			//判断是否点击梨子
			if (fruit.g_name === "梨子") {
				this.$store.commit("resMainShopPear", fruit);
				this.$router.push({ name: "pear" });
			}
		},
	},
};
</script>
<style>
.fruits-main {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	overflow: auto;
}
.fruits-main-itme {
	margin: 5%;
	height: 20vh;
	width: 40%;
	background-color: white;
	transform: scale(1);
}
.fruits-main-itme-name {
	position: absolute;
	bottom: 0;
	width: 100%;
}
</style>
