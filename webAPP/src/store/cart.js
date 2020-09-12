import request from '../utils/request'
import {Notify} from 'vant'

const cart = {

	state: {
		GoodsStar: [],
		totalPrice:[],
		GoodsStar:[]
	},
	getters:{
		totalPrice(state,getters,rootState,rootGetters){
			return state.totalPrice.reduce((pre,item)=>pre+item.skuprice*item.qty,0)*100
		},
		
	},

	mutations:{
		changeTotalPrice(state,{_id}){
			state.GoodsStar.filter(item=>{
			if(item._id === _id){
				
				state.totalPrice.unshift(item)
			}
				
			})
			
			
			// console.log(state.totalPrice);
		},
		changeTotalPriceDel(state,{_id}){
			state.totalPrice = state.totalPrice.filter(item=>item._id!==_id)
			
			// console.log(state.GoodsStar)
		},
		initCart(state,data){
			state.GoodsStar=data;
			
		},
		// 添加购物车
		async add(state,goods){
			state.GoodsStar.unshift(goods)
			
			const {data} =await request.post('/cart/add/:id',{...goods})
			
		},

		//修改数据
		async changeQty(state,{_id,qty}){
			state.GoodsStar=state.GoodsStar.map(item=>{
				if(item._id===_id){
					item.qty=qty;
				}
				return item
			});
			
			const {data} = await request.post('/cart/eidt/:id',{...state.GoodsStar[0]})
			console.log(data);
		},
		 // 删除商品
		 remove(state,_id){
            state.GoodsStar = state.GoodsStar.filter(item=>item._id!==_id)
        },

        // 清空购物车
        clear(state){
            state.GoodsStar = []
        }
        
	},
	actions:{
		
        // 根据库存数量来判断是否允许更改购物车商品数量
        async changeQtyAsync(context,{_id,qty}){
            console.log('context=',context);
            // 发起ajax请求，获取当前商品的库存数量
            // 库存>=qty：允许修改购物车商品数量
            // 库存<qty：不允许增加购物车商品数量
            const {data} = await request.get(`/goods/${_id}/kucun`)
            const kucun = data.data;
        
            if(kucun<qty){
                Notify({ type: 'danger', message: '库存不足' })
                qty = kucun;
            }
            context.commit('changeQty',{_id,qty})
        },
        async getCart(context){
				
            const {data} = await request.get('/cart/list');
            context.commit('initCart',data.data)
			
			console.log(this.state)
			
        },
		// async getData(state){
		// 	const {data:GoodsStar} = await request.get('/cart/list')
			
		// 	state.GoodsStar = GoodsStar.data
			
		// 	console.log(GoodsStar)
		// }
    }
}

export default cart