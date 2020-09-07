import request from '../utils/request'
import {Notify} from 'vant'

const cart = {

	state: {
		goodslist: [{
			"skuid": "10032",
			"name": "魅族 Note9",
			"skuprice": 1199,
			"priceGetStart": false,
			"title": "骁龙675 | 后置4800万 | 前置2000万 | 独家定制水滴设计全面屏 | 4000mAh大容量电池 | 18W mCharge快充 ",
			"img": "http://39.107.234.250:2003/images/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@240x240.jpg",
			"classify": "手机",
			qty:1,
			checked: false
		}, {
			"skuid": "10090",
			"name": "魅族 Note8",
			"skuprice": 899,
			"priceGetStart": false,
			"title": "骁龙632 | 6.0 英寸全面屏 | 3600mAh 大电池 | mCharge 快充加持 | Dual PD 全像素双核对焦 |人脸指纹双解锁",
			"img": "http://39.107.234.250:2003/images/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png@240x240.jpg",
			"classify": "手机",
			qty:4,
			checked: false
		}, {
			"skuid": "10390",
			"name": "魅族 16X",
			"skuprice": 1198,
			"priceGetStart": false,
			"title": "骁龙710 | 屏幕下指纹 | 对称式全面屏 | 前置2000万像素 + AI人脸识别 | 后置索尼2000万像素双摄 + 光学防抖",
			"img": "http://39.107.234.250:2003/images/Cgbj0VvINL-AGM20AAw4GirVtYA698.png@240x240.jpg",
			"classify": "手机",
			qty:10,
			checked: false
		}]
	},
	getters:{
		totalPrice(state,getters,rootState,rootGetters){
			return state.goodslist.reduce((pre,item)=>pre+item.skuprice*item.qty,0)*100
		},
	
		
	},

	mutations:{
		initCart(state,data){
			state.goodslist=data;
		},
		// 添加购物车
		add(state,goods){
			state.goodslist.unshift(goods)
			console.log('add to cart',gooods);
		},

		//修改数据
		changeQty(state,{_id,qty}){
			state.goods=state.goodslist.map(item=>{
				if(item._id===_id){
					item.qty=qty;
				}
				return item
			});
			console.log(state.goodslist);
		},
		 // 删除商品
		 remove(state,_id){
            state.goodslist = state.goodslist.filter(item=>item._id!==_id)
        },

        // 清空购物车
        clear(state){
            state.goodslist = []
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
            console.log('kucun=',kucun)

            if(kucun<qty){
                Notify({ type: 'danger', message: '库存不足' })
                qty = kucun;
            }
            context.commit('changeQty',{_id,qty})
        },
        async getCart(){
            const {data} = await request.get(`/cart`);
            context.commit('initCart',data.data)

        }
    }
}

export default cart