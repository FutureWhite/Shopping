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
			show-delete
			show-search-result
			:address-info="addressinfo"
			:search-result="searchResult"
			:area-columns-placeholder="['请选择', '请选择', '请选择']"
			@save="onSave"
			@delete="onDelete"
			@change-detail="onChangeDetail"
		/>
	</div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { updataAddress } from "../../common/service.js";
import { Notify } from "vant";
import { deleteAddress } from "../../common/service.js";
export default {
	data() {
		return {
			areaList,
			addressinfo: this.$store.getters.addressUpdata,
		};
	},
	methods: {
		backUser() {
			this.$router.back();
		},
		onSave(res) {
			this.$store.commit("resUpdataAddress", res);
			updataAddress(this.$store.getters.updataAddressAfter).then(() => {
				Notify({
					type: "success",
					message: "修改地址成功",
					duration: 1200,
				});
				this.$router.back();
			});
		},
		onDelete() {
			deleteAddress(this.addressinfo.id).then(() => {
				Notify({
					type: "success",
					message: "删除地址成功",
					duration: 1200,
				});
				this.$router.back();
			});
		},
	},
};
</script>
