<template>
	<div class="shopping-main">
		<div class="shopping-main-head">
			<van-nav-bar title="购物车">
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		<div class="shopping-main-content">
			<van-swipe-cell
				v-for="shoppingList in shoppingLists"
				:key="shoppingList.id"
			>
				<van-card
					:num="shoppingList.quantity"
					:price="shoppingList.price"
					desc="描述信息"
					:title="shoppingList.name"
					class="goods-card"
					thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
				/>
				<template #right>
					<van-button
						square
						text="删除"
						type="danger"
						class="delete-button"
						@click="shoppingDel(shoppingList)"
					/>
				</template>
			</van-swipe-cell>
		</div>
		<div class="shopping-main-foot">
			<van-submit-bar
				:price="getAllMoney"
				button-text="提交订单"
				class="shopping-commit"
			/>
		</div>
	</div>
</template>

<script>
import { ShoppingB } from "../../common/service.js";
import { shoppingD } from "../../common/service.js";
export default {
	data() {
		return {
			shoppingLists: this.$store.state.shopping,
			userid: this.$store.state.userInformation.id,
		};
	},
	methods: {
		shoppingDel(shoppingList) {
			shoppingD(shoppingList.id, this.userid).then((res) => {
				console.log(res);
				this.shoppingLists = res.data.shopping;
				this.$emit("childrenLenght", res.data.length);
				this.$store.commit("resShoppingLenght", res.data.length);
			});
		},
	},
	created() {
		ShoppingB(this.userid).then((res) => {
			this.shoppingLists = res.data;
		});
	},
	computed: {
		getAllMoney: function () {
			let money = 0;
			for (let i = 0; i < this.shoppingLists.length; i++) {
				money = this.shoppingLists[i].price + money;
			}
			return money * 100;
		},
	},
};
</script>

<style>
.shopping-main-content {
	height: calc(100vh - 150px);
	width: 100%;
	overflow: auto;
}
.shopping-main-foot {
	transform: calc(1);
	height: 50px;
}
.shopping-commit {
	bottom: 50px !important;
}
.goods-card {
	top: 1px;
	background: rgb(255, 253, 255) !important;
}
.delete-button {
	height: 100% !important;
	right: -1px;
}
</style>
