---
title: JavaScript递归穷举所有排列组合并找出重复值
date: 2020-07-09 15:44:34
categories: 
- program
---

耗时：3h

# 题目：

![image.png](https://wx4.sinaimg.cn/mw690/0069qZtTgy1gho4dd67syj30uq0fuq4p.jpg)

# 解答并发现题目并不完全对

![image.png](https://wx3.sinaimg.cn/mw690/0069qZtTgy1gho4drwyz7j30p403f74g.jpg)


# 代码：

```
<template>
    <div class="page">null</div>
</template>

<script>
export default {
    data() {
        return {
            resultArr:[]
        }
    },
    mounted(){
        this.sss('aaba','abac');
        this.sss('a9310990','133990b');
        this.sss('vue','fusev');
        this.sss('ab3dc','cae3fd');
    },
    methods:{
        sss(s1,s2){
            // 列出s1和s2的所有排列组合
            let arr1 = this.recursion(s1);
            let arr2 = this.recursion(s2);
            let resultArr = [];
            // for循环遍历出重复值
            for (let index = 0; index < arr1.length; index++) {
                for (let j = 0; j < arr2.length; j++) {
                    if (arr1[index] == arr2[j]){
                        resultArr.push(arr2[j])
                    }
                    
                }
            }
            // 处理后返回最终结果
            resultArr = resultArr.length == 1 ? resultArr.join('') : resultArr
            let data = typeof resultArr == "string" ? resultArr : [...new Set(resultArr)];
            console.log(s1,s2,' => ', data)
        },
        // 遍历str的长度，每个字符都进行递归穷举出所有排列组合
        recursion(val){
            // 两个str都要用到这个数组，所以每次进来都清空
            this.resultArr = [];
            let valList = val.split('');
            let data = [];
            for (let index = 0; index < valList.length; index++) {
                const element = valList[index];
                let tempList = JSON.parse(JSON.stringify(valList))
                tempList.splice(0,index+1);
                data = this.recursionFn(element,tempList,1);
            }
            return this.resultArr;
        },
        recursionFn(val,list,number) {
            this.recursionFnFn(val,list,number).then(() => {
                if(list.length !== 0) {
                    // 每次调用数组的第一个，并删除数组的第一个再进行下次递归，直到数组为空，就得到结果
                    ++ number;
                    let tempList = JSON.parse(JSON.stringify(list))
                    tempList.splice(0,1);
                    this.recursionFn(list[0],JSON.parse(JSON.stringify(tempList)),number);
                } else {
                    // 穷举了所有排列组合，去重
                    this.resultArr = [...new Set(this.resultArr)];
                    return this.resultArr;
                }
            });
        },
        recursionFnFn(val,list,number){
            return new Promise((resolve,reject) => {
                for (let index = 0; index < list.length; index++) {
                    // 将每次值过来的val初始值，再遍历+数组所有的值，来形成排列组合
                    let element = list[index];
                    let temp = val+element;
                    this.resultArr.push(temp);
                    if(list.length !== 0) {
                        // 如果数组不为空，就递归调用自己继续排列组合
                        let newCom = new Promise((resolve,reject) => {
                            // 和上个函数调用它一样（每次调用数组的第一个，并删除数组的第一个再进行下次递归，直到数组为空，就得到结果）
                            ++number;
                            let tempList = JSON.parse(JSON.stringify(list))
                            tempList.splice(0,index+1);
                            this.recursionFnFn(temp,JSON.parse(JSON.stringify(tempList)),number);
                            resolve();
                        });
                        newCom.then(()=>{

                        });
                    }
                }
                resolve()
            })
        },
    }
}
</script>

```