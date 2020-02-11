const express = require('express');

const Router = express.Router();

const { insert, remove, find } = require('../db/mongo');

const { formatData } = require('../utils');

// 查（获取所有商品数据）：get /user
Router.get('/', async (req, res) => {
    console.log(req.query)
    let { skip, limit, sort, asc } = req.query;
    let data = await find('banner', {}, { skip, limit, sort, asc });
    res.send(formatData({ data }))
})

module.exports = Router;