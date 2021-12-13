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
		},
	},
};
</script>

<style>
.updataaddress-main {
	height: calc(100vh - 50px);
}
</style>
