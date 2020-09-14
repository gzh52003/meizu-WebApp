<template>
	<div style="background-color: #f4f4f4;margin-bottom: 60px;">
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
		<template v-for="item in GoodsStar">
			<van-row style="background-color: #fff;">
				<van-col span="2" style="padding:40px 0px 0px 10px; ">
					<van-checkbox class="hz-checkbox" style=" psomargin-right: 10px; z-index: 100;" v-model="item.checked"></van-checkbox>

				</van-col>
				<van-col span="22">


					<van-card :desc="item.title" :title="item.name" :thumb="item.img" :key="item._id">
						<template #price>
							<span class="hz-price">{{item.skuprice}}</span>
						</template>

						<template #footer>
							<van-stepper :value="item.qty" input-width="20px" button-size="20px" theme="round" async-change integer @change="changeQty(item._id,$event)" />
							<!-- async-change: 点击按钮时不会直接修改数量，而是根据value的值来显示 -->
							</p>
						</template>
					</van-card>
				</van-col>
			</van-row>
		</template>


		<van-submit-bar button-text="删除">
			<div style="position: absolute; left: 10px;">

				<van-checkbox v-model="checkAll">全选</van-checkbox>
			</div>



		</van-submit-bar>

	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';
	import {
		Card,
		Step,
		Steps,
		SubmitBar,
		Stepper
	} from "vant";

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
			goto() {
				this.$router.push({
					name: "Cart"
				})
			},
			changeQty(id, qty) {
				this.$store.dispatch('changeQtyAsync', {
					_id: id,
					qty
				})
			}




		},
		computed: {
			GoodsStar() {

				return this.$store.state.cart.GoodsStar
			},
			checkAll: {
				get() {
					
					return this.GoodsStar.every(item => item.checked)

				},
				set(val) {
					this.GoodsStar = this.GoodsStar.map(item => {
						item.checked = val
						return item
						
					})
				},

			},


		}



	}
</script>

<style lang="scss" scoped>
	#app {
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
	}
</style>
