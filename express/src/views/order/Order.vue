<template>
	<div>

		<el-dropdown>

			<span class="el-dropdown-link">
				订单分类<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item></el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<el-button type="primary" icon="el-icon-plus" class="addTo" @click="addTo">新增</el-button>
		<el-table stripe style="width: 100%" height="528px">

			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" label="#">
			</el-table-column>
			<el-table-column label="商品图片" width="100" heigth="100">
				<template v-slot:default="scope">
					<el-image style="width: 100px; height: 100px" :src="scope.row.img"></el-image>
				</template>
			</el-table-column>
			<el-table-column prop="skuid" label="商品Id" width="100">
			</el-table-column>
			<el-table-column prop="name" show-overflow-tooltip label="商品名称">
			</el-table-column>
			<el-table-column prop="skuprice" label="价格" width="100">
			</el-table-column>
			<el-table-column prop="title" show-overflow-tooltip label="商品描述">
			</el-table-column>

			<el-table-column align="right">
				<template slot="header">
					<el-input size="mini" v-model="search" placeholder="输入关键字搜索" />
				</template>
				<template v-slot:default="scope">

					<el-button size="mini" @click="goto(scope.row._id)" icon="el-icon-edit" type="success">编辑</el-button>
					<el-button size="mini" @click="deleteGoods(scope.row._id)" icon="el-icon-delete" type="danger">删除</el-button>

				</template>
			</el-table-column>

		</el-table>
		<div class="pagination">
			<el-pagination style="float:left;margin-left:150px;margin-top:30px" @current-change="currentPage" background layout="prev, pager, next,jumper" :total="1000">
			</el-pagination>
		</div>

	</div>
</template>
<script>
	export default {

	}
</script>
