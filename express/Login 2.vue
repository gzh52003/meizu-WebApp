<template>
  <div>
    <van-tabbar v-model="active" active-color="#000" :border="false" :fixed="false">
      <van-tabbar-item style="font-size: 20px;">账号登陆</van-tabbar-item>
      <span style="margin-top:10px">|</span>
      <van-tabbar-item style="font-size: 20px!important;">验证码登录</van-tabbar-item>
    </van-tabbar>

    <van-form @submit="onSubmit" :modul="reul">
      <van-field
        name="用户名"
        v-model="reul.username"
        placeholder="手机号/ Flyme 账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
        maxlength="13"
        size="large"
      />
      <van-field
        name="密码"
        v-model="reul.password"
        :rules="[{ required: true, message: '请填写密码' }]"
        type="password"
        placeholder="密码"
        maxlength="12"
        size="large"
      />
      <van-field
        name="验证码"
        v-model="reul.vcode"
        center
        clearable
        placeholder="请输入短信验证码"
        size="large"
      >
        <template #button>
          <span
            @click="getVcode"
            v-html="vcodeSvg"
            class="vcode"
            size="small"
            type="primary"
            style="background:#58bc58;"
          ></span>
        </template>
      </van-field>
      <van-radio-group v-model="radio">
        <van-radio name="1" shape="square">记住登录状态</van-radio>
        <span>忘记密码？</span>
      </van-radio-group>
      <div class="btnLogin">
        <van-button type="primary">登录</van-button>
        <span @click="gotoReg">注册</span>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup } from "vant";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
export default {
  name: "Login",
  data() {
    return {
      reul: [
        {
          username: "",
          password: "",
          vcode: "",
        },
      ],
      active: 0,
      radio: true,
      vcodeSvg: "",
    };
  },
  methods: {
    // 登录
    async onSubmit(values) {
      console.log("submit", values);
      const { data } = await this.$request.get("/login", {
        params: {
          ...this.reul,
        },
      });
      console.log(data);
    },
    // 验证码
    async getVcode() {
      const {
        data: { data },
      } = await this.$request.get("/vcode");
      this.vcodeSvg = data;
    },
    gotoReg() {
      this.$router.push("/reg");
    },
  },
  created() {
    this.getVcode();
  },
};
</script>
	

<style lang="scss" scoped>
.van-cell--large {
  width: 80%;
  margin: 20px auto;
  border: 2px solid #ccc;
}
.van-radio-group {
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  span {
    color: #198ded;
  }
}
.van-field__button {
  padding: 0;
  .vcode {
    position: relative;
    overflow: hidden;
    width: 120px;
    height: 40px;
    padding: 0 10px;
    background-color: #58bc58;
  }
  .vcode svg {
    position: absolute;
    top: -3px;
    left: 0;
    height: 43px;
  }
}
.btnLogin {
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .van-button {
    margin: 40px 0 10px;
    width: 100%;
  }
}
</style>
