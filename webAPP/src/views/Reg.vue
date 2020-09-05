<template>
  <div>
    <h2>欢迎注册</h2>
    <van-form @submit="onSubmit" :modul="reul" >
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
	  center clearable placeholder="请输入短信验证码" size="large">
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
        <van-radio name="1" shape="square">
			注册账号即表示您同意并愿意遵守
			<a href="">Flyme账号服务协议</a>、
			<a href="">法律声明</a>和
			<a href="">隐私政策</a>
		</van-radio>
      </van-radio-group>
      <div class="btnReg">
        <van-button type="primary">立即注册</van-button>
        <span @click="gotoLogin">登录</span>
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
    async onSubmit(values) {
	  console.log("submit", values);
	  const username = this.reul.username
      const { data } = await this.$request.post("/reg", {
		  ...this.reul
	  });
      console.log(data);
    },
    async getVcode() {
      const {
        data: { data },
      } = await this.$request.get("/vcode");
      this.vcodeSvg = data;
    },
    gotoLogin(){
      this.$router.push('/login')
    }
  },
  created() {
    this.getVcode();
  },
};
</script>
	

<style lang="scss" scoped>
h2{
	text-align: center;
}
.van-cell--large {
  width: 80%;
  margin: 20px auto;
  border: 2px solid #ccc;
}
.van-radio-group {
  padding: 0 40px;
  a{
	  color: #00a7ea;
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
.btnReg {
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
