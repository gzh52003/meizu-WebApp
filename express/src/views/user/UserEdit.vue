<template>
	<div>

		<h1>{{userName.Name}}</h1>
		<el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px">
			<el-form-item label="用户名" prop="username">

				<el-input type="text" v-model="ruleForm.username" v-bind:disabled="userName.a" clearable></el-input>

			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="ruleForm.password" autocomplete="off" clearable></el-input>
			</el-form-item>
			<el-form-item label="性别" prop="gender">
				<el-select v-model="ruleForm.gender">
					<el-option label="男" value="男"></el-option>
					<el-option label="女" value="女"></el-option>
					<el-option label="保密" value="保密"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="年龄" prop="age">
				<el-input v-model.number="ruleForm.age"></el-input>
			</el-form-item>
			<el-form-item>


				<el-button type="success" @click="submitForm">{{userName.type}}</el-button>
				<el-button type="danger" @click="back">取消</el-button>
			</el-form-item>
			<el-col>
				<img :src="ruleForm.pic" alt width="150" style="margin-left:150px" />

				<input type="file" @change="upload" class="upload-input">
			</el-col>
		</el-form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				userName: {},

				userid: "",
				ruleForm: {
					username: '',
					password: "",
					gender: "",
					age: "",
					pic: ""

				}
			};


		},
		methods: {
			submitForm() {
				this.$refs["ruleForm"].validate(async (valid) => {
					// valid为校验结果，全部校验通过是值为true,否则为false
					if (valid) {
						const {
							userid,
							ruleForm
						} = this


						if (userid == 0) {

							const {
								data
							} = await this.$request.post("/user", { ...ruleForm
							});

							if (data.code === 1) {
								ruleForm.username =
									this.$message({
										type: "success",
										message: "添加成功",
									});
								this.$router.push({
									name: "User"
								})
							} else {
								return false
							}
						} else {
							const {
								data
							} = await this.$request.put("/user/" + userid, {
								...ruleForm
							});
							if (data.code === 1) {
								this.$message({
									type: "success",
									message: "修改成功",
								});
								this.$router.push({
									name: "User"
								})
							} else {
								return false;
							}
						}
					}
				});
			},
			//上传头像

			async upload(e) {

				const data = new FormData();

				data.set('_id', this.ruleForm._id);

				data.set('avatar', e.target.files[0]);

				const result = await this.$request.post("/upload/avatar", data, {
					// contentType:false,
					'Content-Type': 'multipart/form-data',
				})

				this.ruleForm.pic = 'http://47.112.180.216:2003' + result.data.data.avatarUrl;


			},
			back() {
				this.$router.back();
			},

		},
		async created() {
			const {
				id
			} = this.$route.params;

			if (id == 0) {

				this.userName.Name = "添加用户";
				this.userName.type = "添加";
				this.userid = id
			
			} else {
				this.userName.Name = "用户信息修改";
				this.userName.a = "disabled";
				this.userName.type = "修改";
				const {
					data
				} = await this.$request.get("/user/" + id);
			
				this.userid = id;
				Object.assign(this.ruleForm, data.data);
			}

		},
	};
</script>
<style lang="scss">
	.active:disabled {
		color: #000;
	}

	h1 {
		margin-bottom: 25px;
	}

	.upload-input {
		margin-left: 100px;
		margin-bottom: 20px;

		margin-top: 20px;

		z-index: 999;
	}
</style>
