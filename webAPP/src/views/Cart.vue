<template>
	<div style="background-color: #f4f4f4;">
		<van-nav-bar title="购物车">
			<template #left>
				<van-icon name="arrow-left" @click="goback" size="25" color="#5b5b5b"></van-icon>
			</template>
			<template #right>
				<p v-on:click="gotoDel">编辑</p>
			</template>
		</van-nav-bar>
		<div class="hz-group" style="background-color: #fff;">
			<van-checkbox v-model="checkAll" style="margin-left: 10px; padding-top: 10px;">魅族
			</van-checkbox>

		</div>
		<template v-for="item in GoodsStar">
			<van-row style="background-color: #fff;">
				<van-col span="2" style="padding:40px 0px 0px 10px; ">
					<van-checkbox @click="changeGo(item.checked,item._id)" class="hz-checkbox" style=" psomargin-right: 10px; z-index: 100;" v-model="item.checked"></van-checkbox>

				</van-col>
				<van-col span="22">
					<van-card @click="gotoDetail(item._id)" :num="item.qty" :title="item.name" :desc="item.title" :thumb="item.img" :key="item._id">
						
						<template #price>
							<span class="hz-price">{{item.skuprice}}</span>
						</template>
					</van-card>
				</van-col>
			</van-row>
		</template>

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
			changeGo(checked,_id){
					if(checked){
						
						this.$store.commit('changeTotalPrice',{_id})
					
					}else if(!checked){
						this.$store.commit('changeTotalPriceDel',{_id})
					
					}
					
					
				},
			gotoDetail(id) {
				this.$router.push('/goods/' + id);
			},
			goback() {
				this.$router.go(-1)

			},
			gotoDel() {
				this.$router.push({
					name: "DelCart"
				})
				
			}

		},
		computed: {
			GoodsStar() {

				return this.$store.state.cart.GoodsStar
				
			},
			checkAll: {
				get() {
					// console.log(this.GoodsStar);
					return this.GoodsStar.every(item => item.checked)

				},
				set(val) {
					this.GoodsStar = this.GoodsStar.map(item => {
						item.checked = val
						return item
						// console.log(this.GoodsStar);
					})
				},

			},
			totalPrice() {
				return this.$store.getters.totalPrice

			},
			// getCart(){
			// 	return console.log("cart=",this.$context);
			// }
			
		},
		created(){
			gotoCart:{
				this.$store.dispatch('getCart')
					
			}
		
			
		}



	}
</script>

<style lang="scss" scoped>
	
		
		.van-card__title{
			padding-right: 154px;
			font-weight: 16px;
			font-weight:600;
		}

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
			padding-right: 166px;
			&::before {
				content: '￥';
			}
		}

		.van-card {
			background-color: #fff;
			margin-top: 0px;
		}
	
</style>
