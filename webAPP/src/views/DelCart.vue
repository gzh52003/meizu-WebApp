<template>
	<div style="background-color: #f4f4f4;">
		<van-nav-bar title="购物车">
			<template #left>
				<van-icon name="arrow-left" @click="goback" size="25" color="#5b5b5b"></van-icon>
			</template>
			<template #right>
				<p v-on:click="goto">完成</p>
			</template>
		</van-nav-bar>
		<div class="hz-group" style="background-color: #fff;">
			<van-checkbox v-model="checkAll" style="margin-left: 10px; padding-top: 10px;">魅族
			</van-checkbox>

		</div>
		<van-card v-for="item in goodslist" :desc="item.title" :title="item.name" :thumb="item.img" :key="item._id">
			<template #tag>
				<van-checkbox style="margin-right: 10px;" v-model="item.checked"></van-checkbox>
			</template>
			<template #price>
				<span class="hz-price">{{item.skuprice}}</span>
			</template>
			
			<template #footer>
				<van-stepper :value="item.qty" input-width="20px" button-size="20px" theme="round" async-change integer @change="changeQty(item._id,$event)" />
				  <!-- async-change: 点击按钮时不会直接修改数量，而是根据value的值来显示 -->
				</p>
			</template>
		</van-card>

		<van-submit-bar  button-text="删除">
		<div style="position: absolute; left: 10px;">
			
			<van-checkbox v-model="checkAll">全选</van-checkbox>
		</div>
			
	
			
		</van-submit-bar>

	</div>
</template>

<script>
	import Vue from 'vue';
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
import { Card, Step, Steps, SubmitBar, Stepper } from "vant";
	
	Vue.use(Card);
	Vue.use(Step);
	Vue.use(Steps);
	Vue.use(SubmitBar)
	Vue.use(Stepper)
	export default {
		name: "DelCart",
		data() {
			return {
				// checked: true
			}
		},

		methods: {
			goback() {
				this.$router.go(-1)
				
			},
			goto(){
				this.$router.push({
					name:"Cart"
				})
			},
				changeQty(id,qty){
				this.$store.dispatch('changeQtyAsync',{_id:id,qty})
				}
				
			
			

		},
		computed: {
			goodslist() {
				
				return this.$store.state.cart.goodslist
			},
			checkAll:{
				get(){
					// console.log(this.goodslist);
					return this.goodslist.every(item=>item.checked)
				
				},
				set(val){
					this.goodslist = this.goodslist.map(item=>{
						item.checked = val
						return item
						// console.log(this.goodslist);
					})
				},
				
			},
			
			
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
