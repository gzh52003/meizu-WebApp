<template>
  <div>
    <h1>订单编辑</h1>

    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item prop="skuid" label="商品Id">
        <el-input type="text" v-model="ruleForm.skuid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="img" label="商品图片">
        <el-input v-model="ruleForm.img"></el-input>
      </el-form-item>
      <el-form-item prop label="收货地址修改">
        <el-input></el-input>
      </el-form-item>
      <el-form-item prop="classify" label="商品分类">
        <el-input v-model="ruleForm.classify"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm">{{goodsName.type}}</el-button>
        <el-button type="danger" @click="back">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
    goodsName:{},
      goodsid: "",
      ruleForm: {
        skuid: "",
        img: "",
        classify: "",
      },
    };
  },
  methods: {
    async submitForm() {
      const { goodsid, ruleForm } = this;

      if (goodsid == 0) {
        const { data } = await this.$request.post("/goods", { ...ruleForm });
        if (data.code === 1) {
          this.$message({
            type: "success",
            message: "添加成功",
          });
          this.$router.push({
            name: "Goods",
          });
        } else {
          return false;
        }
      } else {
        const { data } = await this.$request.put("/goods/" + goodsid, {
          ...ruleForm,
        });

        if (data.code === 1) {
          this.$message({
            type: "success",
            message: "修改成功",
          });
          this.$router.push({
            name: "Goods",
          });
        } else {
          return false;
        }
      }
    },
    back() {
      this.$router.back();
    },
  },
  async created() {
    const { id } = this.$route.params;

    if (id == 0) {
      this.goodsName.Name = "添加商品";
      this.goodsName.type = "添加";
      this.goodsid = id;
    } else {
      this.goodsName.Name = "商品信息修改";
      this.goodsName.type = "修改";

      this.goodsName.back = "取消";

      const { data } = await this.$request.get("/goods/" + id);

      this.goodsid = id;

      Object.assign(this.ruleForm, data.data);
    }
  },
};
</script>

<style>
</style>
