<template>
	<div style="background-color: #f4f4f4;">
	<van-image width="100%" height="214" src="/images/phone.bg.jpg" />
		<van-grid :border="false" gutter="1" :column-num="2">
		  <van-grid-item @click="gotoDetail(item._id)" v-for="item in goodslist" :key="item._id">
		    <van-image :src="item.img" />
			<div class="hz-title">
				<h4>{{item.name}}</h4>
				<h6>{{item.title}}</h6>
				<em>{{item.skuprice}}</em>
			</div>
		  </van-grid-item>
		</van-grid>
			<mzu-footer></mzu-footer>
	</div>
</template>

<script>
	
	
	import MzuFooter from './MzuFooter.vue'
	
	export default{
		data(){
			return{
				goodslist:[],
				
			}
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
		async created(){
			
			const {data} = await this.$request.get('/goods/list/:id',{
				params:{
					classify:"手机"
				}
			})
			
			this.goodslist=data.data
			
			
		},
		mounted(){
			
		
		},
		components:{
			MzuFooter
		
		}
		
	}
</script>

<style lang="scss" scoped>
	.hz-title{
		h6{
			color:#999 ;
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
	.van-grid{
		justify-content: space-between;
	}
</style>
