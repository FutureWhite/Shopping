<template>
	<div class="allShop-main">
		<div
			class="allShop-main-content"
			v-for="Oreo in Oreos"
			:key="Oreo.snacks_id"
		>
			<div class="allShop-main-content-word">
				<div class="allShop-main-content-word-name">
					{{ Oreo.g_name }}
				</div>
				<div class="allShop-main-content-word-price">
					￥{{ Oreo.price }}
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
			Oreos: JSON.parse(this.$store.state.mainShopOreo.goodspuls2List),
		};
	},
};
</script>
<style></style>
