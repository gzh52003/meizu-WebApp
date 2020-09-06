<template>
  <div>
    <van-tabbar v-model="active" active-color="#000" :border="false" :fixed="false">
      <van-tabbar-item style="font-size: 20px;">账号登陆</van-tabbar-item>
      <span style="margin-top:10px">|</span>
      <van-tabbar-item style="font-size: 20px!important;">验证码登录</van-tabbar-item>
    </van-tabbar>

    <van-form @submit="onSubmit">
      <van-field 
      name="用户名"
      v-model="text" 
      placeholder="手机号/ Flyme 账号" 
      :rules="[{ required: true, message: '请填写用户名' }]"
      maxlength="13" 
      size="large" />
      <van-field 
      name="密码"
      v-model="password" 
      :rules="[{ required: true, message: '请填写密码' }]"
      type="password" 
      placeholder="密码" 
      maxlength="12" 
      size="large" />
      <van-field 
      name="验证码"
      v-model="yzm" 
      center 
      clearable 
      placeholder="请输入短信验证码" 
      size="large">
        <template #button>
          <van-button 
          size="small" 
          type="primary">
          发送验证码</van-button>
        </template>
      </van-field>
      <van-radio-group v-model="radio">
        <van-radio name="1" shape="square">记住登录状态</van-radio>
        <span>忘记密码？</span>
      </van-radio-group>
      <div class="btnLogin">
        <van-button type="primary">大号按钮</van-button>
        <span @click="goto">注册</span>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      active: 0,
      text: "",
      password: "",
      yzm: "",
      radio: true
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
	goto(){
		this.$router.push({
			name:"Reg"
		})
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
.van-radio-group {
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
