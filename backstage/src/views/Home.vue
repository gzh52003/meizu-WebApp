<template>

	<el-container style="height:100%">
		<el-header class="header">
			<el-row>
				<el-col :span="12" class="logo">
					<svg fill="#008cff" version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80px" viewBox="17.318 5.824 402.048 73.556" @click="goAdd">
						<path d="M321.513,5.824H256.91v12.878h51.478l-49.294,44.581c-8.227,7.023-2.872,16.096,3.958,16.096h65.337V66.472 h-52.117l48.964-44.554C333.52,14.473,328.535,5.824,321.513,5.824" />
						<rect x="226.517" y="5.824" width="14.426" height="73.556" />
						<path d="M104.296,5.824h-71.36c-8.576,0-15.618,7.012-15.618,15.588v57.967H31.14V23.743 c0-2.711,2.208-5.041,4.92-5.041h25.31v60.677h14.428V18.702h25.312c2.712,0,4.919,2.329,4.919,5.041v55.636h13.86V21.416 C119.888,12.841,112.872,5.824,104.296,5.824" />
						<path d="M148.765,23.614c0-2.712,2.199-4.912,4.911-4.912h55.909V5.824h-58.236c-8.576,0-15.592,7.016-15.592,15.592 v42.37c0,8.576,7.017,15.592,15.592,15.592h58.236V66.5h-55.909c-2.711,0-4.911-2.199-4.911-4.912V49.042h58.43V36.117h-58.43 V23.614z" />
						<path d="M405.506,5.824v55.637c0,2.71-2.22,5.039-4.931,5.039h-39.77c-2.711,0-4.892-2.328-4.892-5.039V5.824h-13.86 v57.963c0,8.576,7.018,15.592,15.592,15.592h46.127c8.575,0,15.592-7.017,15.592-15.592V5.824H405.506z" />
					</svg>魅族后台管理系统
				</el-col>
				<el-col :span="12" style="text-align:right">
					{{cookie.username}}
					<el-popconfirm title="确定登出吗？" @onConfirm="logOut" iconColor="red">
						<el-button type="text" margin="20px" slot="reference">登出</el-button>
					</el-popconfirm>
				</el-col>
			</el-row>
		</el-header>

		<el-container>
			<el-aside width="200px">
				<el-menu style="heights:100%" :default-active="activeIndex" mode="vertical" background-color="#545c64" text-color="#fff" active-text-color="#008cff" @select="changeMenu" :default-openeds="openMenu" router>
					<template v-for="item in menu">
						<el-menu-item :index="item.path" :key="item.path" v-if="!item.submenu">
							<i :class="item.icon" style="color:#fff"></i>
							{{item.text}}
						</el-menu-item>
						<el-submenu :key="item.path" :index="item.path" v-else>
							<template v-slot:title>
								<i :class="item.icon" style="color:#fff"></i>
								{{item.text}}
							</template>
							<el-menu-item :key="sub.path" :index="item.path+sub.path" v-for="sub in item.submenu">{{sub.text}}</el-menu-item>
						</el-submenu>
					</template>
				</el-menu>
			</el-aside>

			<el-main class="sl-main">
				<div class="sl-box">
					<router-view />
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
	export default {
		name: "App",
		data() {
			return {
				cookie: {
					username: ""
				},
				activeIndex: "/home",

				openMenu: [],
				menu: [{
						text: "首页",
						path: "/add",
						icon: "el-icon-s-home",
					},
					{
						text: "用户管理",
						path: "/user",
						icon: "el-icon-user-solid",
					},
					{
						text: "商品管理",
						path: "/goods",
						icon: "el-icon-s-goods",
					},
					{
						text: "订单管理",
						path: "/order",
						icon: "el-icon-s-order",
					},
				],
				currentIndex: 0,
			};
		},
		methods: {
			goAdd() {
				this.$router.push({
					name: "Home",
				});
			},
			goto(path, idx) {
				this.$router.push(path);
				// this.$router.replace(path);
				this.currentIndex = idx;
			},
			back() {
				this.$router.back();
			},
			changeMenu(path) {
				this.activeIndex = path;
			},
			logOut() {
				//删除cookie
				document.cookie = `username =  1 ; expires = ${new Date(0).toUTCString()}`;
				this.$router.push({
					name: "Login",
				});

				//删除localStorage
				localStorage.removeItem('data')

				this.$message({
					message: "已登出",
					type: "success",
					showClose: true,
				});
			},
		},
		components: {},

		created() {
			this.cookie.username = document.cookie.split("=")[1];
			if (!this.cookie.username) {
				this.$router.push({
					name: "Login"
				});
			}
		},
	};
</script>


<style lang="scss">
	html {
		height: 100%;
	}

	body {
		margin: 0;
		height: 100%;
		background-color: #fff;
	}
	.el-menu{
		height: 100%;
		}
	.header {
		line-height: 60px;
		color: #fff;
		background-color: rgba(84, 92, 100, 0.9);
		user-select: none;

		.logo {
			font-size: 24px;
			color: #f2f2f2;

			svg {
				vertical-align: middle;
				margin-right: 20px;
			}
		}
	}

	.sl-box {
		height: 100%;
		background: rgba(255, 255, 255, 0.9);
	}

	.sl-main {
		height: 100%;
		width: 100%;
		background: url("/images/logo.png") no-repeat;
		background-position: center;
		background-size: 100%;
	}

	.el-table {
		background: none !important;
	}

	.el-table tr {
		background: none !important;
	}

	.el-table--enable-row-hover .el-table__body tr:hover>td {
		background-color: rgba(245, 247, 250, 0.8) !important;
	}

	.el-table--striped .el-table__body tr.el-table__row--striped td {
		background: rgba(250, 250, 250, 0.8) !important;
	}

	.is-active {
		i {
			//inherit继承
			color: inherit !important;
		}
	}
</style>
