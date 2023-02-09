# 将markdown文档转换为epub电子书

## 合并多个md文件为1个

```
cd 文件夹
cat *.md > res.md
```


## Mac安装brew

```
/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"
 ```

`homebrew` 无法安装，提示不能在根目录下使用。解决思路就是给当前用户添加目录权限：

```
sudo chown -R $(whoami) /usr/local
sudo chown -R $(whoami) $(brew --prefix)/*
```

## brew安装pandoc

```
brew install pandoc
```

## pandoc将markdown文档转换为epub电子书

```
pandoc -o test.epub title.txt pdd.md --epub-cover-image=test.png --from markdown-yaml_metadata_block
```

**title.txt**为源文件信息
```
---
title: 温故而知新
- type: main
  text: 温故而知新
- type: subtitle
  text: 温故而知新
creator:
- role: author
  text: 温故而知新
- role: editor
  text: 温故而知新
identifier:
- scheme: DOI
  text: doi:10.234234.234/33
publisher:  Self Pub
rights: test
ibooks:
  version: 1.3.4
---
```

**test.png**为封面图片