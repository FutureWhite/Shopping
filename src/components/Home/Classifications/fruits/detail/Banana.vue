<template>
	<div class="allShop-main">
		<div
			class="allShop-main-content"
			v-for="banana in bananas"
			:key="banana.fruits_id"
		>
			<div class="allShop-main-content-word">
				<div class="allShop-main-content-word-name">
					{{ banana.g_name }}
				</div>
				<div class="allShop-main-content-word-price">
					￥{{ banana.price }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//获取香蕉的详细信息
			bananas: JSON.parse(this.$store.state.mainShopBanana.goodspuls),
		};
	},
};
</script>
<style></style>
