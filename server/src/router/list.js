const express = require('express');

const Router = express.Router();

const { insert, remove, find } = require('../db/mongo');

const { formatData } = require('../utils');

// 查（获取所有商品数据）：get /user
Router.get('/', async (req, res) => {
    let { skip, limit, sort, asc } = req.query;
    let data = await find('list', {}, { skip: skip * 1, limit: limit * 1, sort, asc });
    res.send(formatData({ data }))
})

Router.get('/renwen', async (req, res) => {
    let { skip, limit, sort, asc } = req.query;
    let data = await find('renwen', {}, { skip: skip * 1, limit: limit * 1, sort, asc });
    res.send(formatData({ data }))
})

Router.get('/haidao', async (req, res) => {
    let { skip, limit, sort, asc } = req.query;
    let data = await find('haidao', {}, { skip: skip * 1, limit: limit * 1, sort, asc });
    res.send(formatData({ data }))
})

Router.get('/wanghong', async (req, res) => {
    let { skip, limit, sort, asc } = req.query;
    let data = await find('wanghong', {}, { skip: skip * 1, limit: limit * 1, sort, asc });
    res.send(formatData({ data }))
})
module.exports = Router;