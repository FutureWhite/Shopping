<template>
	<div class="fruits-main">
		<div v-for="fruit in fruits" :key="fruit.g_id" class="fruits-main-itme">
			<div class="fruits-main-itme-name">{{ fruit.g_name }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//拿取main中水果的信息
			fruits: this.$store.state.mainShop.Fruits,
		};
	},
};
</script>
<style>
.fruits-main {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	overflow: auto;
}
.fruits-main-itme {
	margin: 5%;
	height: 20vh;
	width: 40%;
	background-color: white;
	transform: scale(1);
}
.fruits-main-itme-name {
	position: absolute;
	bottom: 0;
	width: 100%;
}
</style>
