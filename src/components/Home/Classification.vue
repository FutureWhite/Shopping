<template>
	<div class="classification">
		<div class="classification-head">
			<van-nav-bar title="商品分类">
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		<div class="classification-content">
			<div class="classification-content-left">
				<van-sidebar v-model="activeKey">
					<van-sidebar-item title="水果" @click="goFruits" />
					<van-sidebar-item title="零食" />
					<van-sidebar-item title="数码" />
				</van-sidebar>
			</div>
			<div class="classification-content-right">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			//类型侧边跳转绑定的数字
			activeKey: 0,
		};
	},
	methods: {
		goFruits() {
			this.$router.push({ name: "fruits" });
		},
	},
};
</script>

<style>
.classification-content {
	height: calc(100vh - 96px);
	display: flex;
}
.classification-content-left {
	width: 80px;
	background-color: rgb(252, 252, 252);
}
.classification-content-right {
	width: calc(100vh - 80px);
	height: calc(100vh - 96px);
}
</style>
