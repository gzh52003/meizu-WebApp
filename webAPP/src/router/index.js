import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../views/Home.vue"
import Main from "../views/Main.vue"
Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		redirect:'/main'
	},
	{
		path:"/main",
		name:'Main',
		component:Main,
		children:[
			{
					path:'/',
					redirect:'/home'
				},
				{
				path:'/home',
				name:'Home',
				component:Home
			},
			{
				path:'/parts',
				name:'Parts',
				component:()=>import('../views/Parts.vue')
			},
			{
				path:'/mobile',
				name:'Mobile',
				component:()=>import('../views/Mobile.vue')
			
			},
			{
				path:'/beadset',
				name:'Beadset',
				component:()=>import('../views/Beadset.vue')
			}
			
		]
	}
	,
	{
		path:'/cart',
		name:'Cart',
		component:()=>import('../views/Cart.vue')
	},{
		// 详情页
		path:'/goods/:id',
		name:'Goods',
		component:()=>import('../views/Goods.vue')

	},{
		path:'/personal',
		name:'Personal',
		component:()=>import('../views/Personal.vue')
	}
]

const router = new VueRouter({
	routes
	
})

export default router
