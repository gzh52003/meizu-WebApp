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
		path:'/list',
		name:'List',
		component:()=>import('../views/List.vue')
	}
	
	
]

const router = new VueRouter({
	routes
	
})

export default router