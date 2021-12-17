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
import { showAddress } from "../../common/service";
export default {
	data() {
		return {
			chosenAddressId: "1",
			list: [],
			userid: this.$store.state.userInformation.id,
		};
	},
	methods: {
		backUser() {
			this.$router.back();
		},
		onAdd() {
			this.$router.push({ name: "updataaddress" });
		},
	},
	created() {
		showAddress(this.userid).then((res) => {
			console.log(res);
			const arr = [];
			for (let i = 0; i < res.data.length; i++) {
				let obj = {};
				obj.id = i + 1;
				obj.name = res.data[i].user_name;
				obj.tel = res.data[i].tel;
				obj.address = res.data[i].dz_name;

				arr.push(obj);
			}
			this.list = arr;
		});
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
