<template>
	<el-container class="sl-container">
		<el-main>
			<transition name="el-zoom-in-center">
				<div class="transition-box">
					<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">

						<el-form-item label="账号" prop="user">
							<el-input type="text" v-model="ruleForm.user" autocomplete="off" placeholder="账号"></el-input>
						</el-form-item>

						<el-form-item label="密码" prop="pass">
							<el-input type="password" v-model="ruleForm.pass" autocomplete="off" show-password placeholder="密码"></el-input>
						</el-form-item>

						<el-form-item label="验证码" prop="vcode">
							<el-input type="text" v-model="ruleForm.vcode" autocomplete="off" placeholder="验证码">

								<template slot="append">
									<div v-html="vcode" @click="Rvcode" style="height:38px"></div>
								</template>
							</el-input>
						</el-form-item>

						<el-form-item>
							<el-button @click="log('ruleForm')" type="success">登录</el-button>
							<el-button @click="goReg('ruleForm')">注册</el-button>
						</el-form-item>
					</el-form>
				</div>
			</transition>
		</el-main>
	</el-container>
</template>


<script>
	export default {
		data() {
			var validateUser = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入账号"));
				} else {
					callback();
				}
			};

			var validatePass = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"));
				} else {
					callback();
				}
			};

			var validateVcode = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入验证码"));
				} else {
					callback();
				}
			};

			return {
				ruleForm: {
					user: "",
					pass: "",
					vcode: ""
				},
				rules: {
					user: [{
						validator: validateUser,
						trigger: "change"
					}],
					pass: [{
						validator: validatePass,
						trigger: "change"
					}],
					vcode: [{
						validator: validateVcode,
						trigger: "change"
					}]
				},
				vcode: {
					data: ""
				},
			};

		},
		methods: {

			async log(formName) {
				let _this = this
				let url = `/login?username=${_this.ruleForm.user}&password=${_this.ruleForm.pass}&vcode=${_this.ruleForm.vcode}`;
				const {
					data
				} = await this.$request.get(url);

				let t = new Date()
				t.setDate(t.getDate() + 1)

				this.$refs[formName].validate((valid) => {
					if (valid) {
						//登陆成功
						if (data.code === 1) {

							//存储cookie
							document.cookie = `username=${_this.ruleForm.user};expires=${t}`
							//存储localstorage
							localStorage.setItem("data", JSON.stringify(data.data[0]))

							this.$message({
								message: (document.cookie).split("=")[1] + " 登录成功",
								type: "success",
								showClose: true,
							});
							this.$router.push({
								name: "Home"
							})
					
						} else if (data.code === 0) {
							//账号密码错误
					
							this.$message({
								showClose: true,
								message: '账号或密码错误',
								type: 'error'
							});
						} else {
							//验证码错误
							this.$message({
								showClose: true,
								message: '验证码错误',
								type: 'error'
							});
						}
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			goReg() {
				this.$router.push('/reg')
			},
			async Rvcode() {
				let url = `/vcode`;
				const {
					data
				} = await this.$request.get(url);
				this.vcode = (data.data)
			}
		},

		async created() {
			let url = `/vcode`;
			const {
				data
			} = await this.$request.get(url);
			this.vcode = (data.data)
		}
	};
</script>

<style>
	* {
		margin: 0;
	}

	html {
		height: 100%;
		width: 100%;
	}

	body {
		height: 100%;
	}

	.sl-container {
		height: 100%;
		width: 100%;
		background: url("/images/logo.png") no-repeat rgb(84, 92, 100);
		background-position: center;
		background-size: 100%;
	}

	.transition-box {
		margin: 0 auto;
		margin-top: 10%;
		width: 500px;
		min-height: 250px;
		border-radius: 4px;
		background-color: rgba(221, 221, 221, 0.8);
		text-align: center;
		padding: 40px 80px 18px 20px;
		box-sizing: border-box;
	}

	svg {
		height: 40px;
		width: 100px;
		transform: translate(0, -3px);
		cursor: pointer
	}

	.el-input-group__append {
		padding: 0 !important;
	}
</style>
