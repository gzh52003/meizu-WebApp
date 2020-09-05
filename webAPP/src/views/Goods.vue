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
            分期12期免息，享受美好生活
            </span>
            <p class="goodtitle">{{gooddata.title}} </p>
            <van-divider style="margin:0"></van-divider>
        <van-cell is-link @click="show = true" class="payinfo">
          <van-icon name="passed" />花呗分期
          <van-icon name="passed" />顺丰发货
          <van-icon name="passed" />7天无理由退货
          <van-icon name="arrow" style="float:right;line-height:45px;color:#5b5b5b"/>
        </van-cell>
        <van-action-sheet v-model="show" title="服务说明" style="padding:0">
             <div class="window-content">
                <div>
                    <h5>
                    <svg t="1599277858404" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="564" width="18" height="18"><path d="M81.6 385.6c-12 36.8-15.2 76.8-15.2 116.8 0 251.2 199.2 454.4 445.6 454.4 245.6 0 445.6-203.2 445.6-454.4 0-183.2-106.4-341.6-260-413.6-56.8-26.4-108.8-32.8-120-3.2-10.4 30.4 30.4 59.2 60 72.8 29.6 13.6 110.4 52 106.4 128-3.2 76-121.6 84.8-192 55.2-69.6-28.8-171.2-72-195.2-52s-28 70.4 28 104c56.8 33.6 180.8 101.6 198.4 187.2 17.6 85.6 4.8 256.8-241.6 184C284.8 748 224 658.4 206.4 619.2c-50.4-112.8 9.6-226.4 32-260 32-48.8 32-96.8-24.8-117.6-54.4-20-98.4 39.2-132 144z" fill="#30B4FF" p-id="565"></path><path d="M576.8 167.2c40.8 16 62.4 54.4 48 85.6-14.4 31.2-59.2 44-100 28s-62.4-54.4-48-85.6c14.4-31.2 59.2-44 100-28z" fill="#30B4FF" p-id="566"></path></svg>
                    花呗分期
                    </h5>
                    <p>                                     花呗分期是由蚂蚁花呗联合魅族商城共同推出的“先购物后付款”的支付体验，支持预支蚂蚁花呗额度，免息期最长可达41天，可选择分3、6、12期还款。            
                    </p>
                </div>
                <div>
                <h5>
                <svg t="1599287592529" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="576" width="18" height="18"><path d="M511.486812 66.465784c-245.00611 0-443.623703 198.634989-443.623703 443.641099 0 245.021459 198.617593 443.623703 443.623703 443.623703s443.623703-198.60122 443.623703-443.623703C955.109492 265.100774 756.492922 66.465784 511.486812 66.465784M511.486812 909.068388c-220.337267 0-398.962527-178.62526-398.962527-398.962527 0-220.354664 178.62526-398.980947 398.962527-398.980947 220.337267 0 398.962527 178.626283 398.962527 398.980947C910.449339 730.444151 731.824079 909.068388 511.486812 909.068388" p-id="577" fill="#30B4FF"></path><path d="M771.216251 349.083513c-111.791086-50.715055-224.594221 0-224.594221 0l0 363.268584 64.165392 0L610.787422 413.265278c64.163345-42.427298 160.428829 0 160.428829 0L771.216251 349.083513z" p-id="578" fill="#30B4FF"></path><path d="M674.986583 484.845547c-6.332219 6.559393-9.857509 15.717983-9.507538 24.860201l67.949578 0c0.330528-9.142218-3.176342-18.300808-9.525957-24.860201-6.315846-6.54302-15.352663-10.397814-24.457018-10.397814C690.339246 474.447732 681.301406 478.302527 674.986583 484.845547" p-id="579" fill="#30B4FF"></path><path d="M268.198833 603.685165l0 72.451102c64.689325 54.326303 233.919611 42.951231 233.919611-75.555813 0-116.415406-169.230286-127.300314-169.230286-184.209442 0-34.157961 65.725934-61.617359 146.446373-9.333576L479.334531 344.949356c-30.267351-30.268374-218.383776-53.819766-218.383776 72.451102 0 121.089869 174.927031 115.402333 174.927031 178.01537C435.877787 664.7438 336.002079 666.296155 268.198833 603.685165" p-id="580" fill="#30B4FF"></path></svg>
                顺丰发货
                </h5>
                <p>
            该商品顺丰发货，顺丰无法到达的地区会安排转寄其他快递。
                                                        
                </p>
                </div>
                <div style="margin-bottom:200px">
                <h5>
              <svg t="1599286370822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1366" width="18" height="18"><path d="M511.219712 5.116518C231.853875 5.116518 4.577485 232.38359 4.577485 511.736013c0 279.337984 227.27639 506.60311 506.642227 506.60311 279.362765 0 506.640179-227.267072 506.640179-506.60311C1017.859891 232.384614 790.582477 5.116518 511.219712 5.116518zM511.219712 966.48919c-250.77248 0-454.789222-204.006298-454.789222-454.753178 0-250.761216 204.016742-454.768538 454.789222-454.768538 250.770432 0 454.788198 204.007322 454.788198 454.768538C966.00791 762.481869 761.990144 966.48919 511.219712 966.48919zM746.51095 394.669773l-303.348019 31.461581L443.162931 283.812951c0-14.31296-11.614003-25.926451-25.926554-25.926451-14.319718 0-25.926554 11.613491-25.926554 25.926451L391.309824 431.497525l-144.862106 15.022182c-14.238822 1.4848-24.592077 14.227046-23.117414 28.456141 1.385574 13.332685 12.642406 23.258726 25.757696 23.258726 0.895386 0 1.799066-0.0512 2.707763-0.135066l139.513037-14.465434 0 128.562051c0 74.68503 20.053504 120.984474 119.894426 120.984474l139.366711 0c28.882944 0 96.499712 0 96.499712-79.226368 0-14.31296-11.612979-25.925427-25.926554-25.925427s-25.927578 11.612467-25.927578 25.925427c0 21.706342-1.76937 27.377562-44.645581 27.377562L511.2023 681.331793c-61.76215 0-68.040397-13.098291-68.040397-69.135565L443.161903 478.251362l308.6848-32.000819c14.24599-1.4848 24.591053-14.229094 23.120486-28.458189C773.485363 403.547955 760.539034 393.267814 746.51095 394.669773z" p-id="1367" fill="#30B4FF"></path></svg>
                7天无理由退货
                </h5>
                <p>自您的订单签收7个自然日之内（含），在商品完好（手机产品未激活）的情况下，可进行无理由退货。</p>
                </div>
            </div>
                </van-action-sheet>
        </div>
        <div class="goodsku">
        <van-sku
            v-model="show"
            :sku="sku"
            :goods="goods"
            :goods-id="goodsId"
            :quota="quota"
            :quota-used="quotaUsed"
            :hide-stock="sku.hide_stock"
            :message-config="messageConfig"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
            />
        </div>
	</div>
</template>

<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { createDeflate } from 'zlib';
import { Divider } from 'vant';
import { ActionSheet } from 'vant';
import { Sku } from 'vant';

Vue.use(Sku);
Vue.use(ActionSheet);
Vue.use(Divider);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
	export default{
        name:'Goods',
        data(){
            return{
                gooddata:[],
                 show: false,
                 sku: {
        // 数据结构见下方文档
                    },
                    goods: {
                        // 数据结构见下方文档
                    },
                    messageConfig: {
                        // 数据结构见下方文档
                    },
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
	
	

<style lang="scss">
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
    width: 100%;
    margin-bottom: 5px;
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
        display:block;
        background: #fff;
    }
    .goodpay{
        display: block;
        color: #f0415f;
        font-size: 14px;
        background: #fff;
    }
    .goodtitle{
        color: #f0415f;
        font-size: 12px;
        line-height: 20px;
        background: #fff;
    }
}
.payinfo{
    background: #fff;
    color:#999;
    font-size: 12px;
    height: 45px;
    line-height: 45px;
    background: #fff;
    i{
        color: rgb(138, 206, 242);
        font-weight: bolder;
        margin: 0 3px 0 10px;
    }
}
.window-content{
    background: #fff;
    div{
        width: 90%;
        margin:0 2%;
        h5{
            font-size: 13px;
            color: #333;
            line-height: 15px;
            
        }
        p{
                margin-top: 0.13889rem;
                margin-left: 0.625rem;
                line-height: 1.4;
                color: #999;
                font-size: 12px;
        }
    }
    
}

</style>
