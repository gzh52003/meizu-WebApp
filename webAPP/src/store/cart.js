import request from '../utils/request'
import {Notify} from 'vant'

const cart = {

	state: {
		GoodsStar: [],
		totalPrice:[],
	
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
			
			
			
		},
		changeTotalPriceDel(state,{_id}){
			state.totalPrice = state.totalPrice.filter(item=>item._id!==_id)
			
			
		},
		initCart(state,data){
			state.GoodsStar=data;
			
		},
		// 添加购物车
		async add(state,goods){
			state.GoodsStar.unshift(goods)
			
			const {data} =await request.post('/cart/add',{...goods})
			
		},

		//修改数据
		async changeQty(state,{_id,qty}){
		     let goodsList=state.GoodsStar.filter(item=>{
				if(item._id===_id){
					item.qty=qty;
					
				return item
				}
				
			});
			 goodsList = goodsList[0]
			
			 const {data} = await request.put('/cart/eidt/'+_id,{qty:goodsList.qty})
			
		},
		 // 删除商品
		 async remove(state,{_id}){
          
			
			const {data} = await request.delete('/cart/'+_id)
			if(data.code===1){
				 state.GoodsStar = state.GoodsStar.filter(item=>item._id!==_id)
				 Notify({ type: 'danger', message: '删除成功' })
			}
			
        },

        // 清空购物车
        clear(state){
            state.GoodsStar = []
        }
        
	},
	actions:{
		
        // 根据库存数量来判断是否允许更改购物车商品数量
        async changeQtyAsync(context,{_id,qty}){
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
			
		
			
        },
	
    }
}

export default cart