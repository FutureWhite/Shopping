<template>
	<div class="allShop-main">
		<div
			class="allShop-main-content"
			v-for="Computer in Computers"
			:key="Computer.electronics_id"
		>
			<div class="allShop-main-content-word">
				<div class="allShop-main-content-word-name">
					{{ Computer.g_name }}
				</div>
				<div class="allShop-main-content-word-price">
					￥{{ Computer.price }}
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
			Computers: JSON.parse(
				this.$store.state.mainShopComputer.goodspuls1List
			),
		};
	},
};
</script>
<style></style>
