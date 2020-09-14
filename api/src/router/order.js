const express = require('express')

const router = express.Router()
const {formatData} = require('../utils/tools.js')
const mongo = require('../utils/mongo.js')

//添加订单
router.post('/', async (req, res) => {

	let {userid,goodslist,total} = req.body
	
	let result
	try {
		result = await mongo.insert('order', {
			userid,
			goodslist,
			total
		})
		res.send(formatData())
	} catch (err) {
		res.send(formatData({
			code: 0
		}))
	}
})

//查询订单 
router.get('/', async (req, res) => {
	let {
		page = 1, size = 10, sort = 'userid'
	} = req.query
	const limit = size * 1
	const skip = (page - 1) * size


	//处理排序参数
	sort = sort.split(',')
	const result = await mongo.find('order', {}, {
		skip,
		limit,
		sort
	})
	res.send(formatData({
		data: result
	}))

})
//删除订单
router.delete('/:id', async (req, res) => {
	const {
		id
	} = req.params

	try {
		const result = await mongo.remove('order', {
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