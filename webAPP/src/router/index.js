import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../views/Home.vue"
import Main from "../views/Main.vue"
import Order from "../views/Order.vue"
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/main'
	},
	{
		path: "/main",
		name: 'Main',
		component: Main,
		children: [
			{
				path: '/',
				redirect: '/home'
			},
			{
				path: '/home',
				name: 'Home',
				component: Home
			},
			{
				path: '/parts',
				name: 'Parts',
				component: () => import('../views/Parts.vue')
			},
			{
				path: '/mobile',
				name: 'Mobile',
				component: () => import('../views/Mobile.vue')

			},
			{
				path: '/beadset',
				name: 'Beadset',
				component: () => import('../views/Beadset.vue')
			},
			{
				path: '/life',
				name: 'Life',
				component: () => import('../views/Life.vue')
			},


		]
	}
	,
	{
		path: '/delcart',
		name: 'DelCart',
		component: () => import('../views/DelCart.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},

	{
		path: '/reg',
		name: 'Reg',
		component: () => import('../views/Reg.vue')
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/Cart.vue')
	}, {
		// 详情页
		path: '/goods/:id',
		name: 'Goods',
		component: () => import('../views/Goods.vue')

	}, {
		path: '/personal',
		name: 'Personal',
		component: () => import('../views/Personal.vue')

	},
	{
		path: "/order",
		name: 'Order',
		component: Order,
		children: [
			{
				path: '/',
				redirect: '/whole'
			},
			{
				path: '/whole',
				name: 'Whole',
				component: () => import('../views/order/Whole.vue')
			},
			{
				path: '/ready',
				name: 'Ready',
				component: () => import('../views/order/Ready.vue')
			},
			{
				path: '/deliver',
				name: 'Deliver',
				component: () => import('../views/order/Deliver.vue')

			},
			{
				path: '/receiving',
				name: 'Receiving',
				component: () => import('../views/order/Receiving.vue')
			},
			{
				path: '/refund',
				name: 'Refund',
				component: () => import('../views/order/Refund.vue')
			}

		]
	},
	{
		path: '/ready',
		name: 'Ready',
		component: () => import('../views/order/Ready.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	routes

})

export default router
