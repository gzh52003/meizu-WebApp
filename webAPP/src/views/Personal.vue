<template>
  <div class="Personal">
    <van-row>
      <van-col span="2">
        <van-icon name="arrow-left" @click="goback" size="25" color="#5b5b5b"></van-icon>
      </van-col>
      <van-col span="20">
        <div class="member-item" style="line-height: 40px;">
          <van-image
            round
            width="80px"
            height="80px"
            src="/images/portrait.png"
            style="margin-top:20px"
          />
          <div>
            <span v-if="currentUser" @click="loginOut">{{currentUser.username}}</span>
            <span @click="gotoLogin" v-else>登录</span>
          </div>
        </div>
      </van-col>
      <van-col span="2">
        <van-icon name="chat-o" size="20" />
      </van-col>
    </van-row>
    <van-cell
      value="查看全部订单"
      is-link
      style="border-bottom: 1px solid #f4f4f4;border-top: 10px solid #f3f3f3;"
      @click="gotoOrder"
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
        @click="gotoReady"
      />
      <van-grid-item
        color="#ccc"
        icon="peer-pay"
        text="代发货"
        style="border-right: 1px solid #ccc;"
        @click="gotoDeliver"
      />
      <van-grid-item
        color="#ccc"
        icon="logistics"
        text="待收货"
        style="border-right: 1px solid #ccc;"
        @click="gotoReceiving"
      />
      <van-grid-item color="#ccc" icon="after-sale" text="退款/售后" @click="gotoRefund" />
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
  Dialog,
} from "vant";

Vue.use(NavBar);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Dialog);

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

    gotoReady() {
      this.$router.push("/ready");
    },

    gotoDeliver() {
      this.$router.push("/deliver");
    },

    gotoReceiving() {
      this.$router.push("/receiving");
    },

    gotoRefund() {
      this.$router.push("/refund");
    },
    // 登录
    gotoLogin() {
      this.$router.push("/login");
    },
    // 登出
    loginOut() {
      Dialog.confirm({
        message: "是否要切换账号",
      })
        .then(() => {
          localStorage.removeItem("currentUser");
          this.$router.push("/login");
        })
        .catch(() => {
          return;
        });
    },
    // 获取用户名
    getCurrentUser() {
      const currentUser = localStorage.getItem("currentUser");
      this.currentUser = JSON.parse(currentUser);
    },
    //返回按钮
    goback() {
      this.$router.push("/home");
    },
    //跳转到订单页
    gotoOrder() {
      //判断用户是否登录
      const currentUser = localStorage.getItem("currentUser");
      if (currentUser) {
        //登陆了(跳转到订单页)
        this.$router.push("/whole");
      } else {
        //没登录(跳转到登录注册页面)
        this.$router.push("/login");
      }
    },
  },
  created() {
    this.getCurrentUser();
  },
};
</script>
	
<style lang='scss' scoped>
</style>
