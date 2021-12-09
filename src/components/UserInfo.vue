<template>
	<el-form
		ref="formRef"
		:model="formModel"
		status-icon
		:rules="rules"
		style="height: 350px"
	>
		<el-form-item prop="name" class="ainput">
			<el-input
				v-model="formModel.name"
				placeholder="请输入用户名"
			></el-input>
		</el-form-item>
		<el-form-item prop="password" class="ainput">
			<el-input
				v-model="formModel.password"
				type="password"
				autocomplete="off"
				placeholder="请输入密码"
			></el-input>
		</el-form-item>
		<el-form-item v-if="showCheck" prop="checkPass" class="ainput">
			<el-input
				v-model="formModel.checkPass"
				type="password"
				autocomplete="off"
				placeholder="请再次输入密码"
			></el-input>
		</el-form-item>
		<el-form-item>
			<div @click="submitForm()" class="btn">
				{{ showCheck ? "注册" : "登录" }}
			</div>
			<div class="other">
				{{ showCheck ? "已有账号？" : "没有账号？"
				}}<a href="#" @click="showChange">{{
					showCheck ? "去登录" : "去注册"
				}}</a>
			</div>
		</el-form-item>
	</el-form>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { login, register } from "../common/service.js";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
	name: "UserInfo",
	props: {
		showCheck: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["tranFF"],
	setup(props, { emit }) {
		const formModel = reactive({
			password: "",
			checkPass: "",
			name: "",
		});
		const rules = {
			password: [
				{
					required: true,
					message: "请输入密码",
				},
			],
			checkPass: [
				{
					required: true,
					message: "请再次输入密码",
				},
				{
					validator: (rule, value, callback) => {
						if (formModel.checkPass == formModel.password) {
							callback();
						} else {
							callback(new Error("两次密码不一样"));
						}
					},
					trigger: "blur",
				},
			],
			name: [
				{
					required: true,
					message: "请输入名字",
				},
			],
		};
		const formRef = ref();
		const submitForm = () => {
			formRef.value.validate((valid) => {
				if (valid) {
					if (props.showCheck == true) {
						register(formModel.name, formModel.password).then(
							(res) => {
								console.log(res);
								if (res.status == 200) {
									if (res.data == "yes") {
										ElMessage({
											message: "注册成功,请返回登录",
											type: "success",
											center: true,
										});
									} else {
										ElMessage.error("用户已存在");
									}
								} else {
									console.log(res);
								}
							},
							() => {
								ElMessage({
									message: "网络超时",
									type: "error",
									center: true,
								});
							}
						);
					} else {
						login(formModel.name, formModel.password).then(
							(res) => {
								if (res.status == 200) {
									if (res.data == "no") {
										ElMessage({
											message: "账号密码错误！",
											type: "error",
											center: true,
										});
									} else {
										ElMessage({
											message: "登录成功！",
											type: "success",
											center: true,
											duration: 1000,
										});
										console.log(res);
										store.commit("resUser", res.data);
										setTimeout(() => {
											router.push("/Home/Main");
										}, 1000);
									}
								} else {
									ElMessage.error("请求失败");
								}
							},
							() => {
								ElMessage.error("网络超时");
							}
						);
					}
				} else {
					console.log(valid);
				}
			});
		};
		const showChange = () => {
			emit("tranFF");
		};
		const store = useStore();
		const router = useRouter();
		return {
			rules,
			formModel,
			formRef,
			submitForm,
			showChange,
			store,
			router,
		};
	},
});
</script>

<style>
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
.ainput {
	padding-left: 50px;
	padding-right: 50px;
}
</style>
