<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        订单分类
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in classify"
          :key="item.Names"
          @click.native="addItem(item.Names)"
        >{{item.Names}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-table
      :data="goodsList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      stripe
      style="width: 100%"
      height="578px"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column label="商品图片" width="100" heigth="100">
        <template v-slot:default="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.img"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="skuid" label="商品Id" width="100"></el-table-column>
      <el-table-column prop="name" show-overflow-tooltip label="商品名称"></el-table-column>
      <el-table-column prop="" label="物流信息" width="100"></el-table-column>
      <el-table-column prop="" show-overflow-tooltip label="收货地址"></el-table-column>

      <el-table-column align="right">
        <template slot="header">
          <el-input size="mini" v-model="search" placeholder="输入关键字搜索" />
        </template>
        <template v-slot:default="scope">
          <el-button size="mini" @click="goto(scope.row._id)" icon="el-icon-edit" type="success">编辑</el-button>
          <el-button
            size="mini"
            @click="deleteGoods(scope.row._id)"
            icon="el-icon-delete"
            type="danger"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        style="float:left;margin-left:150px;margin-top:30px"
        @current-change="currentPage"
        background
        layout="prev, pager, next,jumper"
        :total="this.goodss.length"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: [],
      search: "",
      goodss: [],
      currentId: "0",
      goodsName: {
        paging: "false",
      },
      classify: [
        {
          Names: "手机",
        },
        {
          Names: "耳机",
        },
        {
          Names: "配件",
        },
        {
          Names: "生活",
        },
      ],
    };
  },
  methods: {
			async refresh(){
				
					let {data} = await this.$request.get("/goods");
					this.goodsList = data.data
					this.goodsName.paging = "false"
					},
			async addItem(name) {
				const url = "classify/:id" + "?" + "classify=" + name
				let {
					data
				} = await this.$request.get("/goods/" + url);

				this.goodsList = data.data
				this.goodsName.name = name
				this.goodsName.paging = "true"

			},
			async currentPage(idx) {
				let url = ""
				if (this.goodsName.paging === "true") {
					url = "/classify/:id" + "?" + "classify=" + this.goodsName.name + "&" + 'page=' + idx

					
				} else {
					url = '?page=' + idx
				}
				
				let {
					data
				} = await this.$request.get("/goods" + url);

				this.goodsList = data.data
			
			},

			async deleteGoods(id) {

				this.$confirm("你确定要删除吗", "提示", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",

				}).then(async () => {

					const {
						data
					} = await this.$request.delete("goods/" + id)

					if (data.code === 1) {

						this.goodsList = this.goodsList.filter((item => item._id !== id))
						this.$message({
							type: "sucss",
							message: "删除成功"
						})
					}

				})
			},
			goto(id) {
				this.$router.push({
					name: 'orderEdit',
					params: {
						id
					}

				})
			},

		},

		async created() {


			let {
				data
			} = await this.$request.get("/goods");
			this.goodsList = data.data

      const {data:goodss} = await this.$request.get("/goods/paging")
		this.goodss = goodss.data

		}

};
</script>
