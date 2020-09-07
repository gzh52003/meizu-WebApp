<template v-slot:footer>
<div class="footer">
 <div class="dan">
      <h2 style="text-align: center;">为您推荐</h2>
      <van-grid :column-num="8" style="-webkit-flex-wrap: nowrap;overflow:auto" gutter="5px">
        <van-grid-item v-for="item of GoodsStar" :key="item._id">
            <img :src="item.img" />
            <div class="hz-title">
              <h4>{{item.name}}</h4>
              <span class="skuprice" style="color: #EE0A24;">{{item.skuprice}}</span>
            </div>
        </van-grid-item>
      </van-grid>
    </div>
    <footer>
      <ul>
        <li v-for="item of meunFoot" :key="item.name">
            <img width="100px" :src="item.img" :lazy-src="item.lazySrc" />
        
        </li>
      </ul>
      <van-row gutter="140">
        <van-col span="8">
          <van-button round type="info" icon="phone" style=";height:36px">400-788-3333</van-button>
        </van-col>
        <van-col span="8">
          <van-button round type="info" icon="service-o" style="width:160px;height:36px">在线客服</van-button>
        </van-col>
      </van-row>
      <figure style="padding:20px 15px;margin:0">
        <figcaption>
          <a href="http://www.miitbeian.gov.cn/">粤ICP备13003602号-2</a>
          <a
            href="https://www3.res.meizu.com/static/cn/_partial/footer/images/icp2_fb8db74.jpg"
          >合字B2-20170010</a>
          <a href="http://www2.res.meizu.com/zh_cn/images/common/com_licence.jpg">营业执照</a>
          &copy;2018&nbsp;Meizu&nbsp;
          <a
            href="http://www2.res.meizu.com/zh_cn/images/common/com_licence.jpg"
          >All rights reserved</a>
        </figcaption>
      </figure>
    </footer>
</div>
	
</template>

<script>
	export default{
		data(){
			return{
				GoodsStar:[],
				meunFoot: [
				  {
				    href:
				      "https://mall.meizu.com/marrive/summary.html?click=mall_index_buttom_serv_1",
				    lazySrc:
				      "https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg",
				    img:
				      " https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg ",
				  },
				  {
				    href:
				      "http://service.meizu.com/authenticity.html?click=mall_index_buttom_serv_2",
				    lazySrc:
				      "https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg",
				    img:
				      "https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg",
				  },
				  {
				    href:
				      "http://service.meizu.com/help/after_ser.html#policy3?click=mall_index_buttom_serv_3",
				    lazySrc:
				      "https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg",
				    img:
				      "https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg",
				  },
				  {
				    href:
				      "https://bbs.res.meizu.com/static_new/guide/?click=mall_index_buttom_serv_4",
				    lazySrc:
				      "https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg",
				    img:
				      "https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg",
				  },
				]
			}
		},
		async created(){
			
			const {data:GoodsStar} = await this.$request.get('/goods')
			
			this.GoodsStar = GoodsStar.data
			
		}
	}
	
	
</script>

<style lang="scss">
	.hz-title {
	  h6 {
	    color: #999;
	    width: 8.25rem;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	  }
	  em{
		 color: #cc0000;
		 &::before{
		 	content: '￥';
			}
	  }
	}
	.van-grid {
	  justify-content: space-between;
	}
	.dan {
	  h2 {
	    height: 1.92608rem;
	    line-height: 1.92608rem;
	    padding: 0 0.33336rem;
	    color: #333;
	    font-size: 18px;
	    font-weight: 500;
	  }
	  .van-grid-item {
	    .van-grid-item__content {
	      img {
	        width: 138px;
	        margin: 10px 20px 0;
	      }
	      .hz-title {
	        text-align: center;
	        h4 {
	          color: #333;
	          margin: 5px 0;
	        }
	      }
	    }
	  }
	}
	footer {
	  margin-top: 5px;
	  padding: 15px 15px 0;
	  background: #fff;
	  ul {
	    display: flex;
	
	    li {
	      width: 86px;
	      height: 68px;
	      padding: 0 12px;
	      img {
	        width: 100%;
	      }
	    }
	  }
	  .van-row {
	    margin: 20px 0 -20px 18px;
	    .van-button {
	      width: 160px;
	    }
	  }
	  figcaption{
	    color: #999;
	    text-align: center;
	    a{
	      color: #999;
	    }
	  }
	}
	.skuprice{
		&::before{
			content: '￥';
		}
	}
</style>
