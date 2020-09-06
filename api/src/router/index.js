import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/home/add.vue'
import User from '../views/user/User.vue'
import UserEdit from '../views/user/UserEdit.vue'
import Goods from '../views/goods/Goods.vue'
import GoodsEdit from '../views/goods/GoodsEdit.vue'
import Order from '../views/order/Order.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'

Vue.use(VueRouter)

const routes = [

	{
		path: '',
		//默认地址
		redirect: '/add'
	},
	{
		path: '',
		name: 'Home',
		component: Home,
		children: [{
				path: '',
				redirect: 'user'
			},
			{
				path: '/add',
				component: Add
			},
			{
				path: 'user',
				name: 'User',
				component: User
			},
			{
				path: 'useredit/:id',
				name: 'userEdit',
				component: UserEdit
			},
			{
				path: 'goods',
				name: 'Goods',
				component: Goods
			},
			{
				path: 'goodsedit/:id',
				name: 'goodsEdit',
				component: GoodsEdit
			},
			{
				path: 'order',
				name: 'Order',
				component: Order
			},

			//默认子路由
		],
		redirect: '/add'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},

	{
		path: '/reg',
		name: 'Reg',
		component: Reg
	},
	{
		path: '/404',
		component: NotFound
	},
	{
		path: '*',
		redirect: '/404'
	},

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
