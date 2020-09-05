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
		test(){
			return 'cart'
		}
		
	}
}

export default cart