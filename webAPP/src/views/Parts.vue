<template>
	<div class="parts">
		<!--banner -->
        <van-image width="100%" height="160px"  fit="fill" src="/images/partsbanner.jpg" ></van-image>
        <!--商品列表 -->
        <van-grid :column-num="2" :border="false" class="goodslist" gutter="5" >
            <van-grid-item v-for="item in partslist" :key="item._id" @click="gotoDetail(item._id)" style="width:49%">
                <van-image :src="item.img"/>
                <h4>{{item.name}} </h4>
                <p class="price">
                    <span>{{item.title}} </span>
                    <em style="display:block">{{item.skuprice}} </em>
                </p>
            </van-grid-item>
        </van-grid>
	</div>
</template>

<script>


	export default{
        name:'Parts',
        data(){
            return{
                partslist:[],
            };
        },
        components:{},
        methods:{
            // 点击事件，点击商品跳转详情页
            gotoDetail(id){
                // console.log(id);
                this.$router.push({
                    name:'Goods',
                    params:{
                        id
                    }
                })
            }
        },
		async created(){
        //列表数据
            const{
                data:{data:partslist},
            } =await this.$request.get("/goods/list/:id",{
                params:{
                    classify:"配件"
                }
            });
            this.partslist=partslist;
           
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
           display: block;
           width: 90%;
           height: 4vw;
           font-size: 3.33333vw;
           overflow: hidden;
           color: #999;
       }
       em{
           margin-top: 5px;
           width: 100%;
           text-align: center;
           color: #cc0000;
		   &::before{
		   	content: '￥';
			}
       }
   }
}
</style>
