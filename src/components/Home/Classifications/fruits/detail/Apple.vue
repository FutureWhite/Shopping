<template>
	<div class="allShop-main">
		<div
			class="allShop-main-content"
			v-for="Apple in Apples"
			:key="Apple.fruits_id"
		>
			<div class="allShop-main-content-word">
				<div class="allShop-main-content-word-name">
					{{ Apple.g_name }}
				</div>
				<div class="allShop-main-content-word-price">
					￥{{ Apple.price }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//获取苹果的详细信息
			Apples: JSON.parse(this.$store.state.mainShopApple.goodspuls),
		};
	},
};
</script>
<style></style>
