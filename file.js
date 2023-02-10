//导入核心模块
const path = require('path')
const fs = require('fs')

// 获取oldFile文件夹，newFile的绝对路径
let OriginFilePath = path.resolve(__dirname, 'docs')
let CopyFilePath = path.resolve(__dirname, 'newFile')

//判断要创建的文件夹（newFile）是否存在，不存在就创建一个
if (!fs.existsSync(CopyFilePath)) {
  fs.mkdir(CopyFilePath, err => {
    // console.log(err)
  })
}

//递归 （文件夹套文件夹）的结构，直到拿到文件为止
getFiles(OriginFilePath, CopyFilePath)
function getFiles(OriginFilePath, CopyFilePath) {
  //读取newFile文件夹下的文件
  fs.readdir(OriginFilePath, { withFileTypes: true }, (err, files) => {
    for (let file of files) {
      //判断是否是文件夹，不是则直接复制文件到newFile中
      if (!file.isDirectory()) {
        //获取旧文件夹中要复制的文件
        const OriginFile = path.resolve(OriginFilePath, file.name)
        //获取新文件夹中复制的地方
        const CopyFile = path.resolve(CopyFilePath, file.name)
        //将文件从旧文件夹复制到新文件夹中
        fs.copyFileSync(OriginFile, CopyFile)
      } else {
        //如果是文件夹就递归变量把最新的文件夹路径传过去
        const CopyDirPath = path.resolve(CopyFilePath, file.name)
        const OriginDirPath = path.resolve(OriginFilePath, file.name)
        // 如果需要完全复制，将mkdir注释打开，并递归时第2个参数传CopyDirPath
        // fs.mkdir(CopyDirPath, (err) => {})
        getFiles(OriginDirPath, CopyFilePath)
      }
    }
  })
}
