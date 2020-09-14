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
        :rules="[{ required: true, message: '请填写验证码' }]"
        center
        clearable
        placeholder="请输入验证码"
        maxlength="4"
        size="large"
      >
        <template #button>
          <span
            @click="getVcode"
            v-html="vcodeSvg"
            class="vcode"
            size="small"
            type="primary"
          ></span>
        </template>
      </van-field>
      <van-checkbox-group v-model="result">
        <van-checkbox shape="square" name="a">记住登录状态</van-checkbox>
        <span>忘记密码？</span>
      </van-checkbox-group>
      <div class="btnLogin">
        <van-button @click="onLogin" type="primary">登录</van-button>
        <span @click="gotoReg">注册</span>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
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
      result: ["a"],
      vcodeSvg: "",
    };
  },
  methods: {
    onSubmit(values) {
     
    },
    // 登录
    async onLogin() {
      const { data } = await this.$request.get("/login", {
		  
		
        params: {
          ...this.reul,
        },
      });
	   

      if (data.code === 1) {
        Toast.success("登录成功");
        localStorage.setItem("currentUser", JSON.stringify({...data.data}));
        this.$router.push("/home");
      } else if (data.code === 0) {
        Toast.fail("账号错误或者密码错误");
      } else {
        Toast.fail("验证码错误");
      }
    },
    // 验证码
    async getVcode() {
      const {
        data: { data },
      } = await this.$request.get("/vcode");
      this.vcodeSvg = data;
    },
    // 跳转注册
    gotoReg() {
      this.$router.push("/reg");
    },
  },
  created() {
    this.getVcode();
    const authorization = localStorage.getItem("currentUser");
    if (authorization) {
      this.$router.push("/home");
    }
  },
};
</script>
	

<style lang="scss" scoped>
.van-cell--large {
  width: 80%;
  margin: 20px auto;
  border: 2px solid #ccc;
}
.van-field__button{
  position: relative;
  .vcode{
    position: absolute;
    top: -20px;
    right: -16px;
    background: #58bc58;
    svg{
      width: 120px;
    }
  }
}
.van-checkbox-group {
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  span {
    color: #198ded;
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
