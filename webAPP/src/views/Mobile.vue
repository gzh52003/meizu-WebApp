<template>
	<div style="background-color: #f4f4f4;">
	<van-image width="100%" height="214" src="/images/phone.bg.jpg" />
		<van-grid :border="false" gutter="2" :column-num="2">
		  <van-grid-item v-for="item in goodslist" :key="item._id">
		    <van-image :src="item.img" />
			<div class="hz-title">
				<h4>{{item.name}}</h4>
				<h6>{{item.title}}</h6>
				<span class="skuprice" style="color: #EE0A24;">{{item.skuprice}}</span>
			</div>
		  </van-grid-item>
		</van-grid>
		
		
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				goodslist:[]
			}
		},
		async created(){
			
			const {data} = await this.$request.get('/goods/list/:id',{
				params:{
					classify:"手机"
				}
			})
			
			this.goodslist=data.data
			console.log(this.goodslist)
		}
		
	}
</script>

<style lang="scss">
	.hz-title{
		h6{
			color:#999 ;
			width:8.25rem ;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis
		}
	}
	.van-grid{
		justify-content: space-between;
	}
</style>
