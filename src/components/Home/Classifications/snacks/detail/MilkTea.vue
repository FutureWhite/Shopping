<template>
	<div class="allShop-main">
		<div
			class="allShop-main-content"
			v-for="MilkTea in MilkTeas"
			:key="MilkTea.snacks_id"
		>
			<div class="allShop-main-content-word">
				<div class="allShop-main-content-word-name">
					{{ MilkTea.g_name }}
				</div>
				<div class="allShop-main-content-word-price">
					￥{{ MilkTea.price }}
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
			MilkTeas: JSON.parse(
				this.$store.state.mainShopMilkTea.goodspuls2List
			),
		};
	},
};
</script>
<style></style>
