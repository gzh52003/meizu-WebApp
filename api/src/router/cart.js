const express = require('express')
const router = express.Router()
const {
	formatData
} = require('../utils/tools.js')
const mongo = require('../utils/mongo')


//查询商品
router.get('/', async (req, res) => {


	//处理排序参数
	sort = sort.split(',')
	const result = await mongo.find('cart', {}, {})
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
		result = await mongo.insert('cart', {
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


//删除商品
router.delete('/:id', async (req, res) => {
	const {
		id
	} = req.params

	try {
		const result = await mongo.remove('cart', {
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
