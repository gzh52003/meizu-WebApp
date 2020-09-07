  <template>
  <div style="background-color: #f4f4f4;">
    <van-image width="100%" height="214" src="/images/phone.bg.jpg" />
    <van-grid :border="false" gutter="2" :column-num="2">
      <van-grid-item @click="gotoDetail(item._id)" v-for="item in goodslist" :key="item._id">
        <van-image :src="item.img" />
        <div class="hz-title">
          <h4>{{item.name}}</h4>
          <h6>{{item.title}}</h6>
          <em style="display:block">{{item.skuprice}} </em>
        </div>
      </van-grid-item>
    </van-grid>
   <MzuFooter></MzuFooter>
  </div>
</template>

<script>
	import MzuFooter from './MzuFooter.vue'
export default {
  data() {
    return {
      goodslist: [],
     
    };
  },
  async created() {
    const {
      data: { data },
    } = await this.$request.get("/goods/list/:id", {
      params: {
        classify: "生活",
      },
    });
    this.goodslist = data;
  
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
};
</script>

<style lang="scss" scoped>
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

</style>