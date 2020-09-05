<template>
	<div class="goods">
		<div class="detailimg" style="
        width: 375px;
        left: 0px;
        transition-duration: 0ms;
        transform: translate(0px, 0px) translateZ(0px);
        ">
        <van-image  height="235" 
        width="235"
        :src="gooddata.img" 
        fit="fill"></van-image>
        <van-icon name="arrow-left" @click="goback" class="goback"></van-icon>
        <van-icon name="wap-home-o" @click="gohome" class="gohome"></van-icon>
        </div>
        <van-divider style="margin:0"></van-divider>
        <div class="gooddescript">
            <h4 class="goodsname">
            {{gooddata.name}} 
            </h4>
            <span class="goodprice">{{gooddata.skuprice}}</span>
            <span class="goodpay">
            
            </span>
        </div>
        
	</div>
</template>

<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { createDeflate } from 'zlib';
import { Divider } from 'vant';

Vue.use(Divider);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
	export default{
        name:'Goods',
        data(){
            return{
                gooddata:[],
                
            };
        },
        methods:{
            async getData(id){
            // console.log('source=',this.$request.source);
            const{data}=await this.$request.get("/goods/"+id);
            console.log('data=',data);
            this.gooddata=data.data
            },
            goback(){
                this.$router.go(-1);
            },
            gohome(){
                this.$router.replace('/home')
            }
        },
        created(){
            console.log(666);
            const{id}=this.$route.params;
            console.log("$route=", this.$route.params.id);
            console.log("this=", this);
            this.getData(id);
        }
		
	}
</script>
	
	

<style lang="scss" scoped>
html{
    font-size: 16px;
    margin: 0;
    padding: 0;
}
.detailimg{
    background: #fff;
    text-align: center;
    overflow: hidden;
    position: relative;
    .goback{
        position: absolute;
        left: 15px;
        top: 10px;
        line-height: 1;
        font-size: 25px;
        color: #5b5b5b;
    }
    .gohome{
        position: absolute;
        right: 15px;
        top: 10px;
        line-height: 1;
        font-size: 25px;
        color: #5b5b5b;
    }
}
.gooddescript{
    padding-left: 5px;
    padding-top: 10px;
    background: #fff;
    .goodsname{
    margin: 0;
    padding: 0;
    color: #333;
    font-size: 16px;
    line-height: 16px;
    width: 7.22222rem;
    font-weight: normal;
    overflow-wrap: break-word;
    word-break: break-all;
    }
    .goodprice{
        color: #f0415f;
        font-size: 18px;
        margin-top: 5px;
    }
}

</style>
