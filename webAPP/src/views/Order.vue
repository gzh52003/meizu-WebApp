<template>
  <div class="Order">
    <van-nav-bar title="我的订单">
      <template #left>
        <van-icon name="arrow-left" @click="goback" size="25" color="#5b5b5b"></van-icon>
      </template>
    </van-nav-bar>
    <van-tabbar :route="true" :fixed="false">
      <van-tabbar-item v-for="item in Orderlist" :key="item.name" :to="item.path">{{item.text}}</van-tabbar-item>
    </van-tabbar>
		<div>
			<router-view></router-view>
		</div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Order",
  data() {
    return {
      Orderlist: [
        {
          name: "whole",
          path: "/whole",
          text: "全部",
        },
        {
          name: "ready",
          path: "/ready",
          text: "待付款",
        },
        {
          name: "deliver",
          path: "/deliver",
          text: "待发货",
        },
        {
          name: "receiving",
          path: "/receiving",
          text: "待收货",
        },
        {
          name: "refund",
          path: "/refund",
          text: "退款/售后",
        },
      ],
    };
  },
  methods: {
    goback() {
      this.$router.push('/Personal');
    },
  },
};
</script>

<style lang="scss">
.Order {
  .van-nav-bar {
    height: 60px;
    border-bottom: 2px solid #f2f2f2;
    .van-nav-bar__title {
      font-size: 20px;
    }
  }
}
</style>
