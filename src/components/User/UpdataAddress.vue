<template>
	<div class="updataaddress-main">
		<div class="updataaddress-main-head">
			<van-nav-bar
				title="编辑地址"
				left-text="返回"
				left-arrow
				@click-left="backUser"
			/>
		</div>
		<van-address-edit
			:area-list="areaList"
			show-postal
			show-search-result
			:search-result="searchResult"
			:area-columns-placeholder="['请选择', '请选择', '请选择']"
			@save="onSave"
			@change-detail="onChangeDetail"
		/>
	</div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { addAddress } from "../../common/service.js";
import { Notify } from "vant";
export default {
	data() {
		return { areaList };
	},
	methods: {
		backUser() {
			this.$router.back();
		},
		onSave(res) {
			console.log(res);
			this.$store.commit("resAddressAllInformation", res);
			addAddress(this.$store.getters.addressAllInformationAfter).then(
				(res) => {
					console.log(res);
					Notify({
						type: "success",
						message: "保存地址成功",
						duration: 1200,
					});
					this.$router.back();
				}
			);
		},
	},
};
</script>

<style>
.updataaddress-main {
	height: calc(100vh - 50px);
}
</style>
