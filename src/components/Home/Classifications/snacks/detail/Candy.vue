<template>
	<div class="allShop-main">
		<div
			class="allShop-main-content"
			v-for="Candy in Candys"
			:key="Candy.snacks_id"
		>
			<div class="allShop-main-content-word">
				<div class="allShop-main-content-word-name">
					{{ Candy.g_name }}
				</div>
				<div class="allShop-main-content-word-price">
					￥{{ Candy.price }}
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
			Candys: JSON.parse(this.$store.state.mainShopCandy.goodspuls2List),
		};
	},
};
</script>
<style></style>
