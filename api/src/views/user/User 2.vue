<template>
	<div>
		<el-table :data="userlist.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))" tooltip-effect="dark" style="width: 100%" height="569px">
			<el-table-column type="selection"></el-table-column>
			<el-table-column type="index" label="#"></el-table-column>

			<el-table-column label="头像" width="200" heigth="100">
				<template v-slot:default="scope">
					<el-image style="width: 100px; height: 100px" :src="scope.row.avatarUrl"></el-image>

				</template>
			</el-table-column>
			<el-table-column label="用户名" prop="username"></el-table-column>
			<el-table-column prop="age" label="年龄"></el-table-column>
			<el-table-column prop="gender" label="性别" show-overflow-tooltip></el-table-column>
			<el-table-column align="right">
				<template slot="header">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template v-slot:default="scope">
					<el-button size="small" type="success" icon="el-icon-edit" @click="goto(scope.row._id)">编辑</el-button>
					<el-button size="small" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row._id)">删除</el-button>
				</template>
			</el-table-column>

		</el-table>
		<el-pagination style="float:left;margin-left:150px;margin-top:30px" @current-change="currentPage "  background layout="prev, pager, next,jumper" :total="this.users.length">
		</el-pagination>
		<el-button type="primary" icon="el-icon-plus" class="added" @click="added">新增</el-button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				userlist: [],
				search: "",
				users: []

			}
		},
		methods: {
			async handleDelete(id) {
				this.$confirm("你确认要删除这条数据吗", "提示", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
				}).then(async () => {
					const {
						data
					} = await this.$request.delete("/user/" + id);

					if (data.code === 1) {
						this.userlist = this.userlist.filter((item) => item._id !== id);
						this.$message({
							type: "success",
							message: "删除成功!",
						});

					}
				});
			},
			async currentPage(idx) {

				let url = "page=" + idx
				const {
					data
				} = await this.$request.get("/user" + "?" + url);



				this.userlist = data.data;


				console.log(idx);
			},
			goto(id) {
				// console.log(id);
				this.$router.push({
					name: 'userEdit',
					params: {
						id
					},
				})
			},
			added() {
				this.$router.push({
					name: 'userEdit',
					params: {
						id: "0"
					}

				})
			}
		},

		async created() {



			const {
				data
			} = await this.$request.get("/user");
			this.userlist = data.data;


		const {data:users} = await this.$request.get("/user/paging")
		this.users = users.data
		}
	}
</script>
<style lang='scss'>
	.added {
		margin: 20px 0 0 100px !important;
	}
</style>
