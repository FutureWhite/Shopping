<template>
	<div>
		<div class="order-main-head">
			<van-nav-bar
				title="确认订单"
				left-text="返回"
				left-arrow
				@click-left="onClickLeft"
			>
			</van-nav-bar>
		</div>
		<div class="order-main-address">
			<div class="order-main-address-son">
				<div class="order-main-address-son-up"></div>
				<div class="order-main-address-son-down"></div>
			</div>
		</div>
		<div @click="pay">支付</div>
		<div class="pay" ref="xxx"></div>
	</div>
</template>

<script>
import { alipay } from "../common/service.js";
export default {
	name: "Order",
	data() {
		return {
			list: [],
		};
	},
	methods: {
		async pay() {
			const res = await alipay("xxx", 1000, "ccc");
			// console.log(this.$refs);
			// console.log(res);
			this.$refs.xxx.innerHTML = res.data;
			this.$nextTick(() => {
				document.forms[0].submit();
			});
		},
	},
	created() {
		// showAddress(this.userid).then((res) => {
		// 	const arr = [];
		// 	for (let i = 0; i < res.data.length; i++) {
		// 		let obj = {};
		// 		obj.id = res.data[i].dz_id;
		// 		obj.name = res.data[i].user_name;
		// 		obj.tel = res.data[i].tel;
		// 		obj.address = res.data[i].dz_name;
		// 		arr.push(obj);
		// 	}
		// 	this.list = arr;
		// });
	},
};
</script>

<style>
.pay form {
	height: 100%;
}
</style>
