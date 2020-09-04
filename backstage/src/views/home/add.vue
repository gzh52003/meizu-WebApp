<template>

	<el-container>
		<el-row class="add-row">
			<el-col class="add-col add-col1">
				<el-button class="add-button" type="success" @click="goUser">
					用户管理
				</el-button>
				<el-button class="add-button" type="danger" style="margin-left:60px" @click="goGoods">
					商品管理
				</el-button>
			</el-col>
			<el-col class="add-col add-col2">
				<el-button class="add-button" type="warning" @click="goOrder">
					订单管理
				</el-button>
				<el-button class="add-button" type="info" style="margin-left:60px" @click="goWeb">
					跳转网站
				</el-button>
			</el-col>
		</el-row>
	</el-container>
</template>

<script>
	export default {
		methods: {
			goUser() {
				this.$router.push({
					name: 'User'
				})
			},
			goGoods() {
				this.$router.push({
					name: 'Goods'
				})
			},
			goOrder() {
				this.$router.push({
					name: 'Order'
				})
			},
			goWeb() {
				location.href = "https://www.meizu.com/"
			}
		}
	}
</script>

<style>
	.add-row {
		padding-top: 30px;
	}

	.add-row {
		width: 880px !important;
		margin: 0 auto;
	}

	.add-col {
		width: 880px !important;
		margin: 0 auto;
		margin-bottom: 40px;
	}

	.add-col2 {
		margin-bottom: 0px;
	}

	.add-button {
		width: 400px !important;
		height: 260px !important;
		font-size: 20px !important;
	}
</style>
