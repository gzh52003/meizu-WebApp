<template>
	<div id="app">
		<van-sticky v-show="showTabbar">
			<van-row style="background:#fff">
				<van-col span="2" style="padding-left: 10px;">
					<van-icon name="search" size="26" />
				</van-col>
				<van-col span="17">
					<svg fill="#008cff" version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80px" height="20px"
					 viewBox="17.318 5.824 402.048 73.556">
						<path d="M321.513,5.824H256.91v12.878h51.478l-49.294,44.581c-8.227,7.023-2.872,16.096,3.958,16.096h65.337V66.472 h-52.117l48.964-44.554C333.52,14.473,328.535,5.824,321.513,5.824" />
						<rect x="226.517" y="5.824" width="14.426" height="73.556" />
						<path d="M104.296,5.824h-71.36c-8.576,0-15.618,7.012-15.618,15.588v57.967H31.14V23.743 c0-2.711,2.208-5.041,4.92-5.041h25.31v60.677h14.428V18.702h25.312c2.712,0,4.919,2.329,4.919,5.041v55.636h13.86V21.416 C119.888,12.841,112.872,5.824,104.296,5.824" />
						<path d="M148.765,23.614c0-2.712,2.199-4.912,4.911-4.912h55.909V5.824h-58.236c-8.576,0-15.592,7.016-15.592,15.592 v42.37c0,8.576,7.017,15.592,15.592,15.592h58.236V66.5h-55.909c-2.711,0-4.911-2.199-4.911-4.912V49.042h58.43V36.117h-58.43 V23.614z" />
						<path d="M405.506,5.824v55.637c0,2.71-2.22,5.039-4.931,5.039h-39.77c-2.711,0-4.892-2.328-4.892-5.039V5.824h-13.86 v57.963c0,8.576,7.018,15.592,15.592,15.592h46.127c8.575,0,15.592-7.017,15.592-15.592V5.824H405.506z" />
					</svg>
				</van-col>
				<van-col span="2">
					<van-icon @click="goto" name="shopping-cart-o" style="padding-right: 10px;" size="22" />
				</van-col>
				<van-col span="2" class="ellipsis" @click="showPopup">
					<van-icon name="ellipsis" size="20" />
				</van-col>
				<van-popup v-model="show" round closeable position="top" :style="{ height: '40%' }">
					<div class="header">魅族官网</div>
					<van-grid :column-num="3">
						<van-grid-item v-for="value in more" :key="value.tit" :to="value.path">
							<van-image width="45px" :src="value.Img"></van-image>
							{{value.tit}}
						</van-grid-item>
					</van-grid>
				</van-popup>
			</van-row>
			<van-tabbar :route="true" :fixed="false">
				<van-tabbar-item v-for="item in menu" :key="item.name" :to="item.path">{{item.text}}</van-tabbar-item>
			</van-tabbar>
		</van-sticky>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: "App",
		data() {
			return {
				show: false,
				active: 0,
				menu: [{
						name: "home",
						path: "/home",
						text: "推荐",
					},
					{
						name: "mobile",
						path: "/mobile",
						text: "手机",
					},
					{
						name: "beadset",
						path: "/beadset",
						text: "声学",
					},
					{
						name: "parts",
						path: "/parts",
						text: "配件",
					},
					{
						name: "life",
						path: "/life",
						text: "生活",
					},
				],
				more: [{
						name: "personal",
						Img: "/images/more1.png",
						path: "/personal",
						tit: "个人中心",
					},
					{
						Img: "/images/more2.png",
						tit: "我的订单",
					},
					{
						Img: "/images/more3.png",
						tit: "我的红包",
					},
					{
						Img: "/images/more4.png",
						tit: "我的优惠券",
					},
					{
						Img: "/images/more5.png",
						tit: "我的地址",
					},
					{
						Img: "/images/more6.png",
						tit: "我的收藏",
					},
				],
			};
		},
		computed: {
			showTabbar() {
				return this.$store.state.common.showTabbar;
			},
		},
		created() {},
		methods: {
			showPopup() {
				this.show = true;

			},
			goto() {
				this.$router.push({
					name: "Cart"
				})
			}
		},
	};
</script>

<style lang="scss">
	.van-row .ellipsis {
		transform: rotate(90deg);
		line-height: 60px;
	}

	.van-tabbar-item--active .van-tabbar-item__text {
		border-bottom: 1px solid #007bff;
	}

	.van-tabbar-item__text {
		font-size: 14px;
		padding-bottom: 5px;
	}

	.van-col {
		min-height: 50px;
		text-align: center;
		line-height: 68px;
	}

	.header {
		text-align: center;
		height: 55px;
		line-height: 55px;
		font-size: 18px;
	}
</style>
