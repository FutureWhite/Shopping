<template>
	<div class="allShop-main">
		<div
			class="allShop-main-content"
			v-for="Pear in Pears"
			:key="Pear.fruits_id"
		>
			<div class="allShop-main-content-word">
				<div class="Pear-main-content-word-name">
					{{ Pear.g_name }}
				</div>
				<div class="allShop-main-content-word-price">
					￥{{ Pear.price }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//获取梨子的详细信息
			Pears: JSON.parse(this.$store.state.mainShopPear.goodspuls),
		};
	},
};
</script>
<style></style>
