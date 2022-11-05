#  git进阶

---

- [链接](https://blog.csdn.net/shenlei19911210/article/details/78529939?spm=1001.2014.3001.5501)

## 一、普通发布代码

```bash
git add .
git commit -m '发布信息'
git pull
git push
```

## 二、绑定 git 仓库

```bash
git remote add origin 地址
```

## 三、线上版本回退

```bash
git reset --hard '7位数版本号'
git pull -f
```

## 四、不要本地的更改文件

```bash
git checkout .
```

## 五、导出干净代码

```bash
git archive --format zip --output "out.zip" master -0
```

## 六、两个版本之前的补丁包

比如我要 10 月 3 日 至 10 月 5 日 的补丁包

```bash
$ git diff 10月5日的7位数版本号 10月3日的7位数版本号 --name-only | xargs zip update.zip
```

## 七、不同分支开发

1. 新建分支

```bash
git checkout -b name
```

2. 发布新的分支

```bash
## 提交发布代码后：
git push origin name
```

3. 查看所有分支

```bash
git branch
```

4. 切换分支

```bash
git checkout name
```

5. 将 master 分支上的代码 pull 下来

```bash
git pull origin master
```

6. 在自己分支上修改代码并 push 到自己分支

7. 切换到 master 分支

```bash
git checkout master
```

8. 同步并 push 代码

```bash
git merge name
git push
```

或

```bash
git pull origin name
git push
```


9. 删除分支

```
git branch --delete 分支名
git push origin --delete 分支名
```

---

## 八、新电脑开发新项目

0. 使用 git 命令取消全局设置

```bash
git config --global --unset user.name
git config --global --unset user.email
```

1. 查看自己电脑的邮箱和用户名

```bash
git config --global user.email
```

2. 设置邮箱和用户名

```bash
git config --global user.email 'xx'
git config --global user.name 'xx'
```

3. 生成 SSH

```bash
ssh-keygen -t rsa -C “邮箱名称"
```

4. MAC 电脑打开 SSH 文件

```bash
open ~/.ssh
```

5. 将`id_rsa.pub`文件中的内容复制到代码仓库里面生成新的 SSH

6. 下载

```bash
git clone 'xx'
```

## 九、git 设备多帐户

- [链接](https://www.jianshu.com/p/cacf91579268)

## 十、将源码转入新的仓库

```bash
git remote rm origin
git remote add origin https://git.coding.net/**/**.git
git pull origin master --allow-unrelated-histories
```

## 十一、已存在的 Git 版本库

```bash
cd existing_repo
git remote rename origin old-origin
git remote add origin ssh://git@gittsl.com:2222/pengdan/inOne-test.git
git push -u origin --all
git push -u origin --tags
```