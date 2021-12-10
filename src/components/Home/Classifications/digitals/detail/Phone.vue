<template>
	<div class="allShop-main">
		<div
			class="allShop-main-content"
			v-for="Phone in Phones"
			:key="Phone.electronics_id"
		>
			<div class="allShop-main-content-word">
				<div class="allShop-main-content-word-name">
					{{ Phone.g_name }}
				</div>
				<div class="allShop-main-content-word-price">
					￥{{ Phone.price }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//获取电脑的详细信息
			Phones: JSON.parse(this.$store.state.mainShopPhone.goodspuls1List),
		};
	},
};
</script>
<style></style>
