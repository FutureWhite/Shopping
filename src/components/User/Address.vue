<template>
	<div class="address-main">
		<div class="address-main-head">
			<van-nav-bar
				title="地址列表"
				left-text="返回"
				left-arrow
				@click-left="backUser"
			/>
		</div>
		<van-address-list
			v-model="chosenAddressId"
			:list="list"
			@add="onAdd"
			@edit="onEdit"
		/>
	</div>
</template>
<script>
export default {
	data() {
		return {
			chosenAddressId: "1",
			list: [
				{
					id: "1",
					name: "张三",
					tel: "13000000000",
					address: "地球 中国",
					isDefault: true,
				},
			],
		};
	},
	methods: {
		backUser() {
			this.$router.back();
		},
	},
};
</script>

<style>
.address-main {
	height: calc(100vh - 100px);
}
.van-address-list__bottom {
	position: fixed;
	bottom: 50px !important;
	left: 0;
	z-index: var(--van-address-list-add-button-z-index);
	box-sizing: border-box;
	width: 100%;
	padding-left: var(--van-padding-md);
	padding-right: var(--van-padding-md);
	background-color: var(--van-background-color-light);
}
</style>
