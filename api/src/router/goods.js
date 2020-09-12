const express = require('express')
const router = express.Router()
const {
	formatData
} = require('../utils/tools.js')
const mongo = require('../utils/mongo')


//查询商品
router.get('/', async (req, res) => {
	let {
		page = 1, size = 10, sort = 'qty'
	} = req.query
	const limit = size * 1
	const skip = (page - 1) * size


	//处理排序参数
	sort = sort.split(',')
	const result = await mongo.find('goods', {}, {
		skip,
		limit,
		sort
	})
	res.send(formatData({
		data: result
	}))

})
router.get('/:id/kucun', async (req, res) => {
	//处理排序参数
	const {id} = req.params;
	var kucun = 10
	res.send(formatData({
		data: kucun
	}))

})

//专为分也打造的接口
router.get('/paging', async (req, res) => {
	//
	//mongo
	const result = await mongo.find('goods', {}, {
		field: {
			password: false
		}
	})

	res.send(formatData({
		data: result
	}))


})

//单个商品查询

router.get('/:id',async (req,res)=>{
	
	const {id} = req.params
	
	const  result = await mongo.find('goods',{_id:id})
	
	res.send(formatData({data:result[0]}))
	
})

//商品分类查询

router.get('/classify/:id',async (req,res)=>{
	
	const {page = 1, size = 10,classify} = req.query
	const limit = size * 1
	const skip = (page - 1) * size
	
	const result = await mongo.find('goods',{classify:classify},{
		limit,
		skip,
	})
	res.send(formatData({
		data: result
	}))
	
})
//webapp商品数据接口
router.get('/list/:id',async (req,res)=>{
	
	const {classify} = req.query

	const result = await mongo.find('goods',{classify:classify},{})
	
	res.send(formatData({
		data: result
	}))
	
})

//添加商品
router.post('/', async (req, res) => {
	/* shuid:商品id
		name:商品名称
		skuprice:商品价格
		img:图片
		title:标签
		classify:商品分类
	 */
	let {
		skuid,
		name,
		skuprice,
		img,
		title,
		classify
		
	} = req.body
	let result
	try {
		result = await mongo.insert('goods', {
			skuid,
			name,
			skuprice,
			img,
			title,
			classify
		})
		res.send(formatData())
	} catch (err) {
		res.send(formatData({
			code: 0
		}))
	}

})

//修改商品

router.put('/:id', async (req, res) => {
	const {
		id
	} = req.params

	let {
		skuid,
		name,
		skuprice,
		img,
		title,
		classify
		
	} = req.body

	let newData = {
		skuid,
		name,
		skuprice,
		img,
		title,
		classify
	}

	try {

		await mongo.update('goods', {
			_id: id
		}, {
			$set: newData
		})
		res.send(formatData({
			data: {
				_id: id
			}
		}))
	} catch (err) {
		res.send(formatData({
			code: 0
		}))

	}
})

//删除商品
router.delete('/:id', async (req, res) => {
	const {
		id
	} = req.params

	try {
		const result = await mongo.remove('goods', {
			_id: id
		})
		res.send(formatData())
	} catch (err) {
		res.send(formatData({
			code: 0
		}))

	}
})

module.exports = router
