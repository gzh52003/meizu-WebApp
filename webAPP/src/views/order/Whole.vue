<template>
  <div class="Whole">
    <van-card
      v-for="item in goodslist"
      :num="item.qty"
      :desc="item.title"
      :title="item.name"
      :thumb="item.img"
      :key="item._id"
    >
      <template #price>
        <span class="hz-price">{{item.skuprice}}</span>
      </template>
    </van-card>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapGetters, mapMutations, MapActions } from "vuex";
import { Card, SubmitBar } from "vant";

Vue.use(SubmitBar);
Vue.use(Card);
export default {
  name: "Whole",
  data() {
    return {};
  },
  computed: {
    goodslist() {
      return this.$store.state.cart.goodslist;
    },
  },
};
</script>

<style lang="scss">
</style>