<template>
	<div style="height: 100%">
		<div class="container">
			<div class="main">
				<div class="main-son" :class="{ tranFF: isActive }">
					<div class="front">
						<div class="atitle">登录</div>
						<user-info @tran-f-f="tranfff"></user-info>
					</div>
					<div class="back">
						<div class="atitle2">注册</div>
						<user-info showCheck @tran-f-f="tranfff"></user-info>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import UserInfo from "../components/UserInfo.vue";
export default defineComponent({
	components: {
		UserInfo,
	},
	setup() {
		let isActive = ref(false);
		const tranfff = () => {
			isActive.value = !isActive.value;
		};
		return {
			isActive,
			tranfff,
		};
	},
});
</script>

<style>
.container {
	height: 100%;
	background: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-form {
	background-color: #fff;
	width: 100%;
	max-width: 350px;
	height: 500px;
	border-radius: 15px;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.text {
	font-size: 30px;
	font-weight: bold;

	text-align: center;
	line-height: 80px;
	margin-top: 40px;
}
.form-item,
.btn,
.other {
	margin: 40px auto;
	width: 90%;
}
@keyframes bBottom {
	50% {
		border-bottom: 1px solid #a6c1ee;
	}
}
.btn {
	height: 40px;
	line-height: 40px;
	color: #fff;
	font-weight: bold;
	letter-spacing: 10px;
	text-align: center;
	cursor: pointer;
	border-radius: 10px;
	background: linear-gradient(to right, #fbc2eb, #a6c1ee, #fbc2eb);
	background-size: 200%;
}
.btn:hover {
	animation: btnAnimate 1s infinite;
}
@keyframes btnAnimate {
	50% {
		background-position: 200%;
	}
}

a {
	text-decoration: none;
	color: #fbc2eb;
}

.main {
	perspective: 800px;
	-webkit-perspective: 800px;
	width: 100%;
	max-width: 350px;
	height: 500px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.main-son {
	transform-style: preserve-3d;
	transition: 1s;
	background-color: #fff;
	width: 100%;
	max-width: 350px;
	height: 500px;
	border-radius: 15px;
	text-align: center;
}
.front {
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
	position: absolute;
	width: 100%;
	z-index: 1;
}
.back {
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
	position: absolute;
	transform: rotateY(180deg);
	width: 100%;
	height: 100%;
}
.atitle {
	height: 150px;
	text-align: center;
	line-height: 150px;
	font-size: 25px;
	width: 350px;
}
.atitle2 {
	height: 110px;
	text-align: center;
	line-height: 110px;
	font-size: 25px;
	width: 350px;
}
.tranFF {
	transform: rotateY(180deg);
}
</style>
