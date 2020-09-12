const express = require('express')
const router = express.Router()
const {
	formatData
} = require('../utils/tools.js')
const mongo = require('../utils/mongo')


//查询购物车数据
router.get('/list', async (req, res) => {



	const result = await mongo.find('cart', {}, {})

	res.send(formatData({
		data: result
	}))

})
//新增购物车商品
router.post('/add/:id', async (req, res) => {

	let {
		name,
		_id,
		skuprice,
		img,
		title,
		qty
	} = req.body

	try {
		result = await mongo.insert('cart', {
			name,
			_id,
			skuprice,
			img,
			title,
			qty
		})
		res.send(formatData())
	} catch (err) {
		res.send(formatData({
			code: 0
		}))
	}

})
//购物车商品数量修改
router.post('/eidt/:id', async (req, res) => {
	let {
		name,
		_id,
		skuprice,
		img,
		title,
		qty
	} = req.body
	

	let newData = {
		name,
		_id,
		skuprice,
		img,
		title,
		qty
	}



	try {

		await mongo.update('cart', {
			_id: _id
		}, {
			$set: newData
		})
		res.send(formatData({
			data: {
				_id: _id
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
