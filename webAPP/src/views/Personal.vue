<template>
  <div class="Personal">
    <van-nav-bar class="header">
      <template #left>
        <van-icon name="arrow-left" @click="goback" size="25" color="#5b5b5b"></van-icon>
      </template>
      <template #right>
        <div class="member-item">
          <van-image
            round
            width="80px"
            height="80px"
            src="/images/portrait.png"
            style="margin-top:20px"
          />

          <template>
            <span v-if="currentUser" @click="loginOut" type="primary">{{currentUser.username}}</span>
            <span @click="gotoLogin" v-else>登录</span>
          </template>

        </div>
        <van-icon name="chat-o" size="20" />
      </template>
    </van-nav-bar>
    <van-cell
      value="查看全部订单"
      is-link
      style="margin-top:110px;border-bottom: 1px solid #f4f4f4;border-top: 10px solid #f3f3f3;"
      @click="gotoOrder('/order')"
    >
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">我的订单</span>
      </template>
    </van-cell>
    <van-grid style="border-bottom: 10px solid #f3f3f3;">
      <van-grid-item
        color="#ccc"
        icon="pending-payment"
        text="代付款"
        style="border-right: 1px solid #ccc;"
      />
      <van-grid-item color="#ccc" icon="peer-pay" text="代发货" style="border-right: 1px solid #ccc;" />
      <van-grid-item
        color="#ccc"
        icon="logistics"
        text="待收货"
        style="border-right: 1px solid #ccc;"
      />
      <van-grid-item color="#ccc" icon="after-sale" text="退款/售后" />
    </van-grid>
    <van-grid :border="false" :column-num="4" style="border-bottom: 10px solid #f3f3f3;">
      <van-grid-item>
        <van-image src="/images/xing.png" style="width:29px" />
        <span style="font-size:14px;margin-top:10px;color:#666">我的收藏</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/images/dizhi.png" style="width:30px" />
        <span style="font-size:14px;margin-top:10px;color:#666">我的地址</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/images/hongbao.png" style="width:30px" />
        <span style="font-size:14px;margin-top:10px;color:#666">我的红包</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/images/juan.png" style="width:30px" />
        <span style="font-size:14px;margin-top:10px;color:#666">我的优惠券</span>
      </van-grid-item>
    </van-grid>
    <van-cell title="M码通道" is-link style="height:53px;line-height: 42px;" />
    <van-cell title="手机号查询订单" is-link style="height:53px;line-height: 42px;" />
    <van-cell title="以旧换新" is-link style="height:53px;line-height: 42px;" />
    <van-cell title="百城速达" is-link style="height:53px;line-height: 42px;" />
    <van-cell title="联系客服" is-link style="height:53px;line-height: 42px;" />
    <van-cell title="意见反馈" is-link style="height:53px;line-height: 42px;" />
  </div>
</template>

<script>
import Vue from "vue";
import {
  NavBar,
  Grid,
  GridItem,
  Image as VanImage,
  Icon,
  Cell,
  CellGroup,
} from "vant";

Vue.use(NavBar);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);

export default {
  name: "Personal",
  data() {
    return {
      currentUser: {},
    };
  },
  mounted() {
    // 控制菜单显示/隐藏
    this.$store.commit("displayTabbar", false);
  },
  destroyed() {
    this.$store.commit("displayTabbar", true);
  },


  methods: {
    // 登录
    gotoLogin() {
      this.$router.push("/login");
    },
    // 登出
    loginOut() {
      localStorage.removeItem("data");
      this.$router.push("/login");
    },
    // 获取用户名
    getCurrentUser() {
      const currentUser = localStorage.getItem("data");
      this.currentUser = JSON.parse(currentUser)[0];
    },
    //返回按钮
    goback() {
      this.$router.push("/home");
    },
    //跳转到订单页
    gotoOrder(path) {
      //1.点击查看订单
      //2.判断用户是否登录
      //3.登陆了(跳转到订单页)
      //4.没登录(跳转到登录注册页面)
      this.$router.push(path);
    },
  },
  created() {
    this.getCurrentUser();
  },

};
</script>
	
<style lang='scss' scoped>
.Personal {
  .header {
    .member-item {
      width: 80px;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      height: 150px;
      span {
        font-size: 18px;
      }
    }
  }
}
</style>
