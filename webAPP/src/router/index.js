import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
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
		path:'/mobile',
		name:'Mobile',
		component:()=>import('../views/Mobile.vue')
	}
	
	
]

const router = new VueRouter({
	routes
	
})

export default router