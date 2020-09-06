<template>
	<div>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item :key="item.name" v-for="item in bannerList">
			<img :src="item.imgUrl" style="width: 100%;"/>
			 </van-swipe-item>
		
		</van-swipe>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'vant';
	
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	export default {
		name:'Home',
		data(){
			return{
				bannerList:[
					{
						name:"banner01",
						imgUrl:"/images/banner01.jpg"
					},
					{
						name:"banner02",
						imgUrl:"/images/banner02.jpg"
					},
					{
						name:"banner03",
						imgUrl:"/images/banner03.jpg"
					},
					{
						name:"banner04",
						imgUrl:"/images/banner04.jpg"
					},
					{
						name:"banner05",
						imgUrl:"/images/banner05.jpg"
					},
					{
						name:"banner06",
						imgUrl:"/images/banner06.jpg"
					},
					{
						name:"banner07",
						imgUrl:"/images/banner07.jpg"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
