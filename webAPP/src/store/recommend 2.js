import request from '../utils/request'

const recomm={
	
	state:{
		meunFoot: [
		  {
		    href:
		      "https://mall.meizu.com/marrive/summary.html?click=mall_index_buttom_serv_1",
		    lazySrc:
		      "https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg",
		    img:
		      " https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg ",
		  },
		  {
		    href:
		      "http://service.meizu.com/authenticity.html?click=mall_index_buttom_serv_2",
		    lazySrc:
		      "https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg",
		    img:
		      "https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg",
		  },
		  {
		    href:
		      "http://service.meizu.com/help/after_ser.html#policy3?click=mall_index_buttom_serv_3",
		    lazySrc:
		      "https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg",
		    img:
		      "https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg",
		  },
		  {
		    href:
		      "https://bbs.res.meizu.com/static_new/guide/?click=mall_index_buttom_serv_4",
		    lazySrc:
		      "https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg",
		    img:
		      "https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg",
		  },
		],
		GoodsStar:[]
	},
	actions:{
		
	async getData(){
		const {data:GoodsStar} = await request.get('/goods')
		
		GoodsStar = GoodsStar.data
		
		console.log(GoodsStar);
	}
	}
	
	
	
	
}

export default recomm