<template>
	<div>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item :key="item.name" v-for="item in bannerList">
				<img :src="item.imgUrl" style="width: 100%;" />
			</van-swipe-item>

		</van-swipe>
		<van-row style="text-align: center;">
			<van-col span="8">
				<span class="hz-mu hz-zhigong" style="font-size: 12px;">魅族官方直供</span>
			</van-col>
			<van-col span="8">
				<span class="hz-meiyun" style="font-size: 12px;">满80免运费</span>
			</van-col>
			<van-col span="8">
				<span class="hz-mu hz-7day" style="font-size: 12px;">7天无理由退换</span>
			</van-col>
		</van-row>
		<van-grid :border="false" :column-num="4">
		  <van-grid-item v-for="item in muen" >
		    <van-image width="49" height="49" :src="item.img" />
			<p>{{item.name}}</p>
		  </van-grid-item>
		</van-grid>
		<van-row>
		  <van-col span="12">
			<van-image width="" height="" src="/images/mu-17a.jpg" />
			  </van-col>
		  <van-col span="12">
				<van-image width="" height="" src="/images/mu-17Pro.png" />
				<van-image width="" height="" src="/images/mu-usb-c.jpg" />
			 </van-col>
		</van-row>
		<van-row>
			<van-col style="text-align: center;" span="24" ><h3 style="color: #000000;">智能手机</h3></van-col>
		</van-row>
		<van-image src="/images/mu-17aa.jpg"></van-image>
		
		<van-grid :border="false" :column-num="2">
		  <van-grid-item class="hz-item" v-for="item in MobileList">
		    <van-image :src="item.img" />
			<h4>{{item.name}}</h4>
			<h6>【特惠】购机送壳膜套装</h6>
			<em>{{item.skuprice}}</em>
		  </van-grid-item>
		</van-grid>
		<van-row>
			<van-col style="text-align: center;" span="24" ><h3 style="color: #000000;">魅族声学</h3></van-col>
		</van-row>
		<van-grid :border="false" :column-num="2">
		  <van-grid-item @click="gotoDetail(item._id)" class="hz-item" v-for="item in BeadsetList">
		    <van-image :src="item.img" />
			<h4>{{item.name}}</h4>
			<h6 style="color:#999 ;;" class="van-ellipsis">{{item.title}}</h6>
			<em>{{item.skuprice}}</em>
		  </van-grid-item>
		</van-grid>
		<van-row>
			<van-col style="text-align: center;" span="24" ><h3 style="color: #000000;">智能配件</h3></van-col>
		</van-row>
		<van-grid :border="false" :column-num="2">
		  <van-grid-item @click="gotoDetail(item._id)" class="hz-item" v-for="item in Parts">
		    <van-image :src="item.img" />
			<h4>{{item.name}}</h4>
			<h6 style="color:#999 ;;" class="van-ellipsis">{{item.title}}</h6>
			<em>{{item.skuprice}}</em>
		  </van-grid-item>
		</van-grid>
		<van-row>
			<van-col style="text-align: center;" span="24" ><h3 style="color: #000000;">生活周边</h3></van-col>
		</van-row>
		<van-grid :border="false" :column-num="2">
		  <van-grid-item @click="gotoDetail(item._id)" class="hz-item" v-for="item in Life">
		    <van-image :src="item.img" />
			<h4>{{item.name}}</h4>
			<h6 style="color:#999 ;;" class="van-ellipsis">{{item.title}}</h6>
			<em>{{item.skuprice}}</em>
		  </van-grid-item>
		</van-grid>

	</div>
</template>

<script>
	import Vue from 'vue';
	
	import MzuFooter from './MzuFooter.vue'
	import {
		Swipe,
		SwipeItem
	} from 'vant';

	Vue.use(Swipe);
	Vue.use(SwipeItem);
	export default {
		name: 'Home',
		data() {
			return {
				BeadsetList:[],
				Parts:[],
				Life:[],
				bannerList: [{
						name: "banner01",
						imgUrl: "/images/banner01.jpg"
					},
					{
						name: "banner02",
						imgUrl: "/images/banner02.jpg"
					},
					{
						name: "banner03",
						imgUrl: "/images/banner03.jpg"
					},
					{
						name: "banner04",
						imgUrl: "/images/banner04.jpg"
					},
					{
						name: "banner05",
						imgUrl: "/images/banner05.jpg"
					},
					{
						name: "banner06",
						imgUrl: "/images/banner06.jpg"
					},
					{
						name: "banner07",
						imgUrl: "/images/banner07.jpg"
					}
				],
				muen:[{
					name:"开学聚",
					img:"/images/mz-kaixueju.jpg"
				},
				{
					name:"延保登记",
					img:"/images/mz-yanbao.png"
				
				},
				{
					name:"摄像大赛",
					img:"/images/mz-shexiangdasai.png"
				},
				{
					name:"mCycle",
					img:"/images/mz-mycy.jpg"
				}
				],
				MobileList:[
					{
					  name: "魅族 17",
					  skuprice: 3699,
					  priceGetStart: false,
					  img:
					    "https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png@240x240.jpg",
					  href:
					    "https://detail.meizu.com/item/meizu17.html?click=mall_list_tj_kw_1",
					  classify: "手机",
					},
					{
					  name: "魅族 17 Pro",
					  skuprice: 4299,
					  priceGetStart: false,
					  img:
					    "https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwUqAdPsoAAtCAjTT7ek670.png@240x240.jpg",
					  href:
					    "https://detail.meizu.com/item/meizu17pro.html?click=mall_list_tj_kw_2",
					  classify: "手机",
					},
				]
			}
		},
		 async created(){
			 
		const {data:BeadsetList} = await this.$request.get('/goods/classify/:id',{
			params:{
			classify:"耳机"
			},
			})
		
		this.BeadsetList=BeadsetList.data
		
		const {data:Parts} = await this.$request.get('/goods/classify/:id',{
			params:{
			classify:"配件"
			},
			})
		
		this.Parts=Parts.data
		const {data:Life} = await this.$request.get('/goods/classify/:id',{
			params:{
			classify:"生活"
			},
			})
		
		this.Life=Life.data
		
		},
		methods:{
			
		gotoDetail(id){
			this.$router.push({
				name:"Goods",
				params:{
					id
					}
			})
		}
		},
		components:{
			MzuFooter
		}
	}
</script>

<style lang="scss" scoped>
		
		
	.van-col{
		color: #999;
		
	.hz-mu {
		&::before {
			content:'';
			display: inline-block;
			width: 14px;
			height: 14px;
			vertical-align:middle;
			text-align: center;
			margin-right: 10px;
			background:url('/images/mu.png');
			background-size:cover;
			
		}
	}
	.hz-meiyun{
		&::before {
			content:'';
			display: inline-block;
			width: 14px;
			height: 14px;
			vertical-align:middle;
			text-align: center;
			margin-right: 10px;
			background:url('/images/myunf.png');
			background-size:cover;
			
		}
	}
	.hz-7day{
		&::before {
			content:'';
			display: inline-block;
			width: 14px;
			height: 14px;
			vertical-align:middle;
			text-align: center;
			margin-right: 10px;
			background:url('/images/7day.png');
			background-size:cover;
			
		}
		}
	}
	.hz-item{
		h4{
			width:10.25rem ;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis
		}
		h6{
			color: #CC0000;
			
			width:8.25rem ;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis
			
		}
		em{
			color: #CC0000;
			&::before{
				
				content: '￥';
			}
		}
	}
</style>
