<template>
	<div style="background-color: #f4f4f4;">
		<van-nav-bar title="购物车">
			<template #left>
				<van-icon name="arrow-left" @click="goback" size="25" color="#5b5b5b"></van-icon>
			</template>
			<template #right>
				<p>编辑</p>
			</template>
		</van-nav-bar>
		<div class="hz-group" style="background-color: #fff;">
			<van-checkbox v-model="checkAll" style="margin-left: 10px; padding-top: 10px;">魅族
			</van-checkbox>

		</div>
		<van-card v-for="item in goodslist" :num="item.qty" :desc="item.title" :title="item.name" :thumb="item.img" :key="item._id">
			<template #tag>
				<van-checkbox style="margin-right: 10px;" v-model="item.checked"></van-checkbox>
			</template>
			<template #price>
				<span class="hz-price">{{item.skuprice}}</span>
			</template>
		</van-card>

		<van-submit-bar :price="totalPrice" button-text="提交订单">
			<van-checkbox v-model="checkAll">全选</van-checkbox>
			<template #tip>
				你的收货地址不支持同城送, <span>修改地址</span>
			</template>
		</van-submit-bar>

	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		mapState,
		mapGetters,
		mapMutations,
		MapActions
	} from 'vuex'
	import {
		Card,
		 SubmitBar
		  } from 'vant';
	
	Vue.use(SubmitBar);
	Vue.use(Card);
	export default {
		name: "Cart",
		data() {
			return {
				// checked: true
			}
		},

		methods: {
			goback() {
				this.$router.go(-1)
				
			},

		},
		computed: {
			goodslist() {
				console.log(this.$store);
				return this.$store.state.cart.goodslist
			},
			checkAll:{
				get(){
					// console.log(this.goodslist);
					return this.goodslist.every(item=>item.checked)
				
				},
				set(val){
					this.goodslist = goodslist.map(item=>{
						item.checked = val
						return item
						// console.log(this.goodslist);
					})
				},
				
			},
			totalPrice(){
				console.log('1');
				return this.$store.getters.totalPrice
				console.log(this.$store.getters.totalPrice);
			}
		}



	}
</script>

<style lang="scss" scoped>
	#app {

		.hz-group {
			margin-top: 8px;
			border-bottom: 0.5px solid #f4f4f4;
			padding-bottom: 5px;
		}

		.van-ellipsis {
			width: 8.25rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis
		}

		.hz-price {
			color: #C82333;
			&::before{
				content: '￥';
			}
		}

		.van-card {
			background-color: #fff;
			margin-top: 0px;
		}
	}
</style>
