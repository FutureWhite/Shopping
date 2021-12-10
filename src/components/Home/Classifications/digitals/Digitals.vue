<template>
	<div class="Digitals-main">
		<div
			v-for="Digital in Digitals"
			:key="Digital.electronics_id"
			class="Digitals-main-itme"
			@click="digitalsClick(Digital)"
		>
			<div class="Digitals-main-itme-name">{{ Digital.g_name }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//拿取main中数码的信息
			Digitals: this.$store.state.mainShop.Electronic,
		};
	},
	methods: {
		digitalsClick(Digital) {
			//判断是否点击电脑
			if (Digital.g_name === "电脑") {
				this.$store.commit("resMainShopComputer", Digital);
				this.$router.push({ name: "computer" });
			}
			//判断是否点击手机
			if (Digital.g_name === "手机") {
				this.$store.commit("resMainShopPhone", Digital);
				this.$router.push({ name: "phone" });
			}
			//判断是否点击键盘
			if (Digital.g_name === "键盘") {
				this.$store.commit("resMainShopKeybroad", Digital);
				this.$router.push({ name: "keybroad" });
			}
		},
	},
};
</script>

<style>
.Digitals-main {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	overflow: auto;
}
.Digitals-main-itme {
	margin: 5%;
	height: 20vh;
	width: 40%;
	background-color: white;
	transform: scale(1);
}
.Digitals-main-itme-name {
	position: absolute;
	bottom: 0;
	width: 100%;
}
</style>
