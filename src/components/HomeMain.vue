<template lang="">
	<div>
		<div class="home-head">
			<van-search
				v-model="value"
				shape="round"
				placeholder="请输入搜索关键词"
			/>
		</div>
		<div class="home-content">
			<div class="home-nav">
				<div style="width: 100%">
					<van-swipe
						class="my-swipe"
						:autoplay="3000"
						indicator-color="white"
					>
						<van-swipe-item class="van-swipe-item"
							><img
								src="../assets/pexels-lukas-1352243.jpg"
								alt=""
						/></van-swipe-item>
						<van-swipe-item class="van-swipe-item"
							><img
								src="../assets/pexels-mehran-b-86649.jpg"
								alt=""
						/></van-swipe-item>
						<van-swipe-item class="van-swipe-item"
							><img
								src="../assets/pexels-pixabay-36756.jpg"
								alt=""
						/></van-swipe-item>
						<van-swipe-item class="van-swipe-item"
							><img
								src="../assets/pexels-sharon-mccutcheon-1407346.jpg"
								alt=""
						/></van-swipe-item>
					</van-swipe>
				</div>

				<div class="home-nav-sort">
					<div class="home-nav-sort-itme">
						<div class="home-nav-sort-itme-dec">
							<van-icon name="bag-o" size="30" color="#ffffff" />
						</div>
						<div class="home-nav-sort-itme-word">全部商品</div>
					</div>
					<div class="home-nav-sort-itme">
						<div class="home-nav-sort-itme-dec">
							<van-icon
								name="award-o"
								size="30"
								color="#ffffff"
							/>
						</div>
						<div class="home-nav-sort-itme-word">优惠券</div>
					</div>
					<div class="home-nav-sort-itme">
						<div class="home-nav-sort-itme-dec">
							<van-icon name="points" size="30" color="#ffffff" />
						</div>
						<div class="home-nav-sort-itme-word">积分商城</div>
					</div>
					<div class="home-nav-sort-itme">
						<div class="home-nav-sort-itme-dec">
							<van-icon
								name="label-o"
								size="30"
								color="#ffffff"
							/>
						</div>
						<div class="home-nav-sort-itme-word">积分签到</div>
					</div>
				</div>
			</div>
			<div class="home-content-collage">
				<div class="home-content-collage-head">限时拼团</div>
			</div>
			<div class="home-content-collage">
				<div class="home-content-collage-head">精品推荐</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: "",
		};
	},
};
</script>
