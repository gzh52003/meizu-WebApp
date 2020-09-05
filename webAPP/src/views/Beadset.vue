<template>
	<div class="parts">
		<!--banner -->
        <van-image width="100%"  fit="fill" src="/images/beadset.jpg" ></van-image>
        <!--商品列表 -->
        <van-grid :column-num="2" :border="false" class="beadlist" gutter="5" >
            <van-grid-item v-for="item in beadlist" :key="item._id" @click="gotoDetail(item._id)" style="width:49%">
                <van-image lazy-load :src="item.img"/>
                <h4>{{item.name}} </h4>
                <p class="price">
                    <span class="van-multi-ellipsis--l2">{{item.title}}</span>
                    <em style="display:block">{{item.skuprice}} </em>
                </p>
            </van-grid-item>
        </van-grid>
	</div>
</template>

<script>
	
	export default{
        name:"Beadset",
		data(){
			return{
				beadlist:[]
			}
		},
		async created(){
			
			const {data} = await this.$request.get('/goods/list/:id',{
				params:{
					classify:"耳机"
				}
			})
			
			this.beadlist=data.data
		}
		
	}
</script>

<style lang="scss" scoped>
.van-grid-item__content{
    padding-top: 30px;

    h4{
    display: block;
    height: 4vw;
    line-height: 3.8888vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
    color: #333;
    font-size: 3.8888vw;
    width: 90%;
    }
   p{
       span{
           width: 90%;
           font-size: 3.33333vw;
           color: #999;
       }
       em{
           margin-top: 5px;
           width: 100%;
           text-align: center;
           color: #cc0000;
       }
   }
}
</style>
