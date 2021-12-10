<template>
	<div class="allShop-main">
		<div
			class="allShop-main-content"
			v-for="Keybroad in Keybroads"
			:key="Keybroad.electronics_id"
		>
			<div class="allShop-main-content-word">
				<div class="allShop-main-content-word-name">
					{{ Keybroad.g_name }}
				</div>
				<div class="allShop-main-content-word-price">
					￥{{ Keybroad.price }}
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
			Keybroads: JSON.parse(
				this.$store.state.mainShopKeybroad.goodspuls1List
			),
		};
	},
};
</script>
<style></style>
