---
title: node接口开发
date: 2019-04-17 13:25:07
categories: 
- program
---

# 前置准备工作

## 用`jw`做`token`验证
## 用`express`做框架
## 用`mysql2`连接数据库
    `mysql2`比`mysql`多了个`promise`的功能
## 用`apidoc`做接口文档

# 接口实现

```
var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')
module.exports = router

/**
 * @api {post} /user/updatePassword 修改密码*
 * @apiGroup User
 * @apiParam {String} username 账户名
 * @apiParam {String} oldPassword 旧密码
 * @apiParam {String} password 新密码
 * @apiSuccess {Boolen} success 是否成功
 * @apiSuccess {String} msg  返回消息
 */
router.post('/updatePassword', async (req, res) => {
  try {
    let username = req.body.username || null,
      password = req.body.password || null,
      oldPassword = req.body.oldPassword || null
    if (username === null || password === null || oldPassword === null) {
      res.json({
        success: false,
        msg: '用户名或密码不能为空'
      })
      return
    }
    var userInfo = await global.pool
      .promise()
      .query('select count( * ) as count from user where userName = ? and passWord = ?',
      [username,oldPassword])
    if (userInfo[0][0].count > 0) {
      var sqlInfo = await global.pool
        .promise()
        .execute('UPDATE user SET passWord = ? WHERE userName = ?',
          [password, username])
      if (sqlInfo[0].changedRows > 0) {
        res.json(global.api.join(true, '成功', null))
      } else {
        res.json(global.api.join(false, '失败', null))
      }
    } else {
      res.json(global.api.join(false, '不存在该用户或密码错误', null))
    }
  } catch (error) {
    res.json({
      success: false,
      msg: '数据库查询异常'
    })
  }
})
```