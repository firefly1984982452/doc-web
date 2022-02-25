#  sql语句（基础）

---

# 增

```sql
INSERT INFO user VALUES(?,?)
```

# 删

```sql
DELETE FROM user WHERE id = ?
```

# 改

```sql
UPDATE user SET pwd = ? WHERE id = ?
```

# 查

## 查所有数据
```sql
SELECT * FROM user
```

## 查数量
```sql
SELECT count( * ) AS count FROM user
```

## 关联查询

```sql
select t2.* from user t1 inner join people t2
on t1.peopleID = t2.peopleId
where t1.id = ?
```
## where后面的条件

```
a = 1 AND b = 1
```

```
id in (3,4)
```
