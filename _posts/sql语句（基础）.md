---
title: sql语句（基础）
date: 2019-04-17 13:25:07
categories: 
- program
---

# 增

`INSERT INFO user VALUES(?,?)`

# 删

`DELETE FROM user WHERE id = ?`

# 改

`UPDATE user SET pwd = ? WHERE id = ?`

# 查

## 查所有数据
`SELECT * FROM user`

## 查数量
`SELECT count( * ) AS count FROM user`

## 关联查询

```
select t2.* from user t1 inner join people t2
on t1.peopleID = t2.peopleId
where t1.id = ?
```
## where后面的条件

`a = 1 AND b = 1`

`id in (3,4)`


