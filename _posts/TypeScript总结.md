---
title: TypeScript总结
date: 2020-09-01 18:50:17
categories:
  - program
---

[链接](https://jspang.com/detailed?id=63)

# 安装及使用

## 安装

```
npm install typescript -g
```

或

```
yarn global add typescript
```

## 使用

**新建`demo.ts`：**

```
function test() {
    let web: string="hello world"
    console.log(web);
}
test();
```

**编译：**

```
tsc temo.ts
node temo.js
```

**或**

```
npm install -g ts-node
```

安装成功后：

```
ts-node Demo1.ts
```

---

# 静态类型

被定义后就不可改变变量的类型了。

js 是弱类型语言，可以被改变。

## 【1】基本使用

```
// 定义count是number类型
const count : number = 1;
count = 'hello'; // 此时改变类型为string就会报错编译不通过
```

## 【2】自定义静态类型

```
interface XisoJieJie {
    uname: string,
    age: number
}
const xh : XisoJieJie = {
    uname: '小红',
    age: 15
}
console.log(xh);
```

## 【3】基础静态类型和对象类型

### 【3.1】静态类型

`null`,`undefinde`,`symbol`,`boolean`，`void`等。

### 【3.2】对象类型

- 对象类型
- 数组类型
- 类类型
- 函数类型

**【3.2.1】对象类型**

```
const xiaoJieJie: {
    name: string,
    age: number
} = {
    name: '小明',
    age: 14
}
console.log(xiaoJieJie.name)
```

**【3.2.2】数组类型**

```
const arr : number [] = [1,2,3];
const xiaoJieJies : String [] = ['小明','小红','小黄'];
console.log(xiaoJieJies)
```

**【3.2.3】类类型**

```
class Person{}
const xm : Person = new Person();
console.log(xm);
```

**【3.2.4】函数类型**

```
const j : () => string = ()=> {return '小明'};
console.log(j);
```

---

# 类型注释和类型推断

## 【1】类型注释

```
let count : number;
count = 123
```

## 【2】类型推断

```
let countInference = 123
```

这时编辑器和编译器都会推断出是 number 类型。

---

# 函数参数和返回类型定义

## 【1】类型定义

**无定义时：**

```
function getTotal(one : number, two :number){
    return one + two
}
const total = getTotal(1,2)
```

虽然能推断出是返回 number，但这样不规范。

**定义时：**

```
function getTotal(one : number, two :number) : number{
    return one + two
}

const total = getTotal(1,2)
```

**无需 return 时：void**

```
function sayHello(){
	console.log('hello world!);
}
```

**异常或死循环：never 返回值类型**

异常：

```
 function errorFuntion() : never{
    throw new Error()
    console.log('Hello World')
 }
```

死循环：

```
 function forNever() : never{
     while(true){}
     console.log('Hello JSPang')
 }
```

## 【2】函数参数为对象（解构）时

TS 函数参数解构：

```
function add ({one, two} : {one: number, two: number}) {
    return one + two;
}
const three = add({one:1,two:3});

console.log(three); // 4
```

ES6 函数参数解构：

```
function add({x,y} = {}){
    return x+y;
}
var sum = add({x:3,y:5});
console.log(sum); // 8
```

---

# 数组

## 各种类型

```
const numberArr : number [] = [1,2,3];

const stringArr : string [] = ['a','b','c'];

const undefinedArr : undefined [] = [undefined, undefined];

const emptyArr : null [] = [null,null];

const arr : (number | string) [] = [1,'a',1,2,'b'];

// 类型别名
type Lady = {name: string, age: number};
const xiaoJieJies: Lady[] = [{
    name: '小明',age:14
},{
    name: '小红', age: 35
}]

class Lady1  {name: string;age: number};
const xiaoJieJies1: Lady1[] = [{
    name: '小明',age:14
},{
    name: '小红', age: 35
}]
```

`type`和`class`的区别是`class`会编译出来，`type`会忽略。

---

# 元组

```
// 无约束
const arr1 : (number | string) [] = [1,'a',1,2,'b'];

// 有约束
const arr2 : [string,string,number] = ['a','b',3];
```

---

# 接口

## 【1】定义接口

```
interface Girl {
    name: string;
    age: number;
    bust: number
}

const getResume = (girl: Girl) => {
    console.log(girl.name);
}

const xh = {
    name: '小红',
    age: 19,
    bust:38
}

getResume(xh);
```

## 【2】接口(`interface`)和类型别名(`type`)的区别

- 类型别名可以直接给类型，比如`string`，但接口必须给对象。

## 【3】接口定义非必填值`?:`

语法：`?:`

```
interface Girl {
    name: string;
    age: number;
    bust ?: number
}
```

## 【4】接口允许加入任意值`[anyname:string]:any;`

语法：`[anyname:string]:any;`

`string`的意思是对象名是 string 类型，`any`的意思是对象值是任意类型。

```
interface Girl1 {
    name: string;
    age: number;
    bust ?: number;
    [anyname:string]: any;
}
const xh = {
    name: '小红',
    age: 19,
    sex:'女',
    hobby:'兴趣',
    year:22
}
```

## 【5】接口里定义方法

语法：`fun(): type`

比如：`say(): string;`代表`say`方法返回`string`类型的值。

```
interface Girl1 {
    name: string;
    age: number;
    bust ?: number;
    [anyname:string]: any;
    say(): string;
}
const xh = {
    name: '小红',
    age: 19,
    sex:'女',
    hobby:'兴趣',
    year:22,
    say(){
        return 'hello World!';
    }
}
```

## 【6】类实现接口

类实现接口时必须把**所有**要必填的属性和方法实现，否则就会报错。

错误的：

```
class XiaoJieJie implements Girl{
}
```

正确的：

```
class XiaoJieJie implements Girl{
    name = '小红';
    age = 12;
    bust= 90;
    say(){
        return '你好'
    }
}
console.log(XiaoJieJie)
```

## 【7】接口继承接口

重点：

- `interface...extends`；
- `function`里面的约束定型改为新接口名；
- 新的对象里面除了原接口约束的属性，也要把新的属性加上。

```
interface Teacher extends Girl {
    teach():string;
}

const getResume2 = (girl: Teacher) => {
    ...
    girl.teach();
}

const girl2 = {
    ... // girl的所有属性
    teach(){
        return 'hello';
    }
}

getResume2(girl2);
```

## 【8】自我总结

接口更像是一种约束，约束用户的对象的属性类型。

---

# 类

类描述对象的属性和方法。接口则包含类要实现的方法。

## 【1】继承与重写

```
class Lady {
    content = 'hello world!';
    sayHello () {
        return this.content
    };
}

class XiaoJieJie extends Lady {
    sayLove () {
        return 'I love you.'
    };
    sayHello () {
        return super.sayHello() + ' 你好！';
    }
}
```

JAVA 中类的继承

```
class Animal{
    public void move(){
        System.out.println("动物可以移动");
    }
}

class Dog extends Animal{
    @Override // 表示方法重写
    public void move(){
        super.move(); // 引用父类的方法
        System.out.println("狗可以跑和走");
    }
}
```

区别：

- java 中要用到`@Override`标签

**@Override 标签的作用与好处**

- 它是伪代码，表示方法重写
- 作为注释，帮助检查是否正确复写了父类中已有的方法
- 编译器可以验证该方法是否在父类中已有
- 非必填。如果没写@Override，方法名与父类一模一样，如果返回类型相同，视为重写，反之，视为新方法

## 【2】访问类型

### 【2.1】public

默认就是它

### 【2.2】private

私有，只有自己能用。

```
class Lady {
    private content = 'hello world!';
    private privateFn () {
        return 'private' + this.content; // 能用
    };
}
class XiaoJieJie extends Lady {
    privateFn() { // 编译不通过
        return 'e';
    };
}
console.log(new Lady().privateFn()); // 编译不通过
```

### 【2.3】protected

受保护，只能在自己及子类用。

```
class Lady {
    protected protectedFn () {
        return 'protected';
    };
}

class XiaoJieJie extends Lady {
    protectedFn () {
        return 'xj';
    }
}

console.log(new Lady().protectedFn()); // 编译不通过
```

### 【2.4】对比表

|            类型             | public | protected | private |
| :-------------------------: | :----: | :-------: | :-----: |
|        自己（父类）         |   ✓    |     ✓     |    ✓    |
|        继承（子类）         |   ✓    |     ×     |    ×    |
| 外部（`new Class().fun()`） |   ✓    |     ✓     |    ×    |

附：JAVA 异同表

|            类型             | public | protected | private |
| :-------------------------: | :----: | :-------: | :-----: |
|        自己（父类）         |   ✓    |     ✓     |    ✓    |
|        继承（子类）         |   ✓    |     ✓     |    ×    |
| 外部（`new Class().fun()`） |   ✓    |     ×     |    ×    |

## 【3】构造函数

构造函数及继承

```
class People {
    constructor (public name: string,public sex:string) {
        this.name = name;
        this.sex = sex;
    }
}

class Teacher extends People {
    constructor (public age:number){
        super('小明','女');
    }
}

var people = new People('小红','女');
console.log(people.name)

var teacher = new Teacher(19);
console.log(teacher,teacher.age);
```

ES6 实现对比：

```
class People {
    constructor (name,sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Teacher extends People {
    constructor (name,sex,age){
        super(name,sex);
        this.age = age;
    }
}

var people = new People('小红','女');
console.log(people.name)

var teacher = new Teacher('小明','女',19);
console.log(teacher,teacher.age);
```

JAVA 实现对比：

```

class People {
    public String name;
    public int sex;
    public People (String name){System.out.println(name)};
    public People (int sex ){};
    public People (Stirng name, int sex){}
    public People (){}
}

public class Teacher extends People {
...
}
```

## 【4】get 和 set

```
class XiaoJieJie {
    constructor(private _age:number,private _name: string){
    }
    get age(){
        return this._age-2;
    };
    set age(age:number){
        this._age = age;
    }
    get name(){
        return this._name+'人';
    };
    set name(name:string){
        this._name = name;
    }
}

const xj =  new XiaoJieJie(18,'小明');
console.log(xj,xj.age); // XiaoJieJie { _age: 18, _name: '小明' } 16
```

编译如果无法通过需要加上 es5：

```
tsc demo.ts -t es5
node demo.js
```

java 中

```
class Stutent1{
    private String name;
    private int age;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public void showStu1(){
        System.out.println("学生叫做"+name+",年龄"+age);
    }
}
```

## 【5】static 装饰符

不用 new 新建就可以创建

```
class Girl {
    static sayLove(){
        return '你好';
    }
}

console.log(Girl.sayLove());
```

不用 new Girl()就可以调用方法了。

## 【6】只读属性 readonly

```
class XiaoJieJie {
    constructor(private readonly _age:number,private _name: string){
    }
    get age(){
        return this._age-2;
    }
    set age(age:number){ // 报错
        this._age = age;
    }
    get name(){
        return this._name+'人';
    };
    set name(name:string){
        this._name = name;
    }
}

const xj =  new XiaoJieJie(18,'小明');
xj.name = '小红';
xj.age = 33; // 报错
console.log(xj,xj.age);
```

## 【7】抽象类

### 【7.1】不加 abstract 时

特点：

- 普通的类继承
- 普通的重写
- 可以调用父类

```
class Girl {
    skill(){
        conso.log('skill)
    }
}

class Girl1 extends Girl {
    skill(){
        console.log('cooking');
    }
}

class Girl2 extends Girl {
    skill(){
        console.log('make cloths')
    }
}

class Girl3 extends Girl {
    skill(){
        console.log('do gardening')
    }
}

console.log(new Girl1().skill())
console.log(new Girl2().skill())
console.log(new Girl3().skill())
console.log(new Girl().skill())

```

### 【7.2】加 abstract 关键字时

特点：

- 不能调用父类
- abstract 方法不能有具体实现内容

```
abstract class Girl {
    abstract skill()
}

class Girl1 extends Girl {
    skill(){
        console.log('cooking');
    }
}

class Girl2 extends Girl {
    skill(){
        console.log('make cloths')
    }
}

class Girl3 extends Girl {
    skill(){
        console.log('do gardening')
    }
}

console.log(new Girl1().skill())
console.log(new Girl2().skill())
console.log(new Girl3().skill())

```

区别：写了`abstract`关键字就是抽象类，如果不加，就是`重写（Override）`，也视为多态。

### 【7.3】多态

多态是同一个行为具有多个不同表现形式或形态的能力。比如打印机有打印方法，彩色打印机类打印方法是彩色，黑色打印机类打印方法是黑色。

java 中多态的实现方式

- 方式一：重写
- 方式二：接口
- 方式三：抽象类和抽象方法

```
abstract class Animal {
    abstract void eat();
}

class Cat extends Animal {
    public void eat() {
        System.out.println("吃鱼");
    }
    public void work() {
        System.out.println("抓老鼠");
    }
}

class Dog extends Animal {
    public void eat() {
        System.out.println("吃骨头");
    }
    public void work() {
        System.out.println("看家");
    }
}
```

其它：写了`abstract`关键字就是抽象类，如果不加，就是`重写（Override）`，也视为多态。

---

# 配置项 tsconfig.json

`tsconfig.json`为配置文件，该配置文件通过`tsc --init`命令行来生成。

## 【1】include、exclude、files

直接在命令行输入`tsc`不带任何文件的话会默认编译所有文件。

`include`属性是用来指定要编译的文件

```
{
  "include":["demo.ts"],
  "compilerOptions": {
      //any something
      //........
  }
}
```

`exclude`属性是用来指定不要编译的文件

```
{
  "exclude":["demo.ts"],
  "compilerOptions": {
      //any something
      //........
  }
}
```

`files`属性是用来指定要编译的文件，和`include`相同

```
{
  "files":["demo.ts"],
  "compilerOptions": {
      //any something
      //........
  }
}
```

## 【2】compilerOptions 配置

- `removeComments`：编译文件是否显示注释
- `static`：是否按严格模式编译和书写
- `nolmplicitAny`：是否允许注解类型 any 不用声明
- `strictNullChecks`：是否允许非空检查
- `rootDir`：项目文件夹
- `outDir`：编译文件夹

---

# 联合类型和类型保护

## 【1】联合类型

```
interface Waiter {
    anjiao: boolean,
    say:()=>{}
}

interface Teacher {
    anjiao: boolean,
    skill:()=>{}
}

function test(animal: Waiter | Teacher){})
```

上例就是联合类型，`function test(animal: Waiter | Teacher){animal.say()})`会报错，所以需要类型保护。

## 【2】类型保护-类型断言

根据具体的值来断言用哪个接口

```
function test(animal: Waiter | Teacher){
    // 方法一：类型断言：根据某个值来判断用哪个方法
    if(animal.anjiao){
        console.log((animal as Waiter).say());
    } else {
        console.log((animal as Teacher).skill());
    }
}
```

## 【3】类型保护-in 语法

判断在对象中是否存在该方法

```
function test(animal: Waiter | Teacher){
    // 方法二：in语法：判断在对象中是否存在该方法
    if('skill' in animal){
        console.log(animal.skill());
    } else {
        console.log(animal.say());
    }
}

```

## 【4】断言和 in 的实例

```
interface Waiter {
    anjiao: boolean,
    say:()=>{}
}

interface Teacher {
    anjiao: boolean,
    skill:()=>{}
}

function test(animal: Waiter | Teacher){
    // 方法一：类型断言：根据某个值来判断用哪个方法
    if(animal.anjiao){
        console.log((animal as Waiter).say());
    } else {
        console.log((animal as Teacher).skill());
    }
    // 方法二：in语法：判断在对象中是否存在该方法
    if('skill' in animal){
        console.log(animal.skill());
    } else {
        console.log(animal.say());
    }
}

const xiaohong : Teacher = {
    anjiao: false,
    skill(){
        return '你好';
    }
}
const xiaoming : Waiter = {
    anjiao: true,
    say(){
        return 'hello';
    },

}

test(xiaohong);
test(xiaoming);
```

## 【5】类型保护-typeof 语法

判断是不是不同的类型

```
function add(first: string | number, second: string | number){
    if(typeof first == 'string' || typeof second == 'string'){
        return `${first}${second}`;
    }
    return first + second;
}
console.log(add(1,'2')) // 12
console.log(add(1,2)) // 3
```

## 【6】类型保护-instanceof 语法

```

class NumberObj{
    count: number
}

function addObj(first: object , second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}

// 当是普通object时
const obj1 : {
    count: number
} = {
    count: 1
}
const obj2 : {
    count: number
} = {
    count: 3
}
console.log(addObj(obj1,obj2)) // 0


// 当是NumberObj对象时
const obj3 = new NumberObj();
obj3.count = 45;
const obj4 = new NumberObj();
obj4.count = 435;
console.log(addObj(obj3,obj4)) // 480
```

---

# 枚举

```
enum Data {
    MASSAGE,
    STATU,
    DATA
}
console.log(Data[1],Data.DATA,Data)
```

打印出来是：

```
STATU
2
{
  '0': 'MASSAGE',
  '1': 'STATU',
  '2': 'DATA',
  MASSAGE: 0,
  STATU: 1,
  DATA: 2
}
```

即`Data[1]`不是第`2`个，而是属性为`1`的的值。

枚举可以自定义值：

```
enum Data {
    MASSAGE = 'success',
    STATU = 3,
    DATA
}
```

打印：

```
undefined
4
{ '3': 'STATU', '4': 'DATA', MASSAGE: 'success', STATU: 3, DATA: 4 }
```

如果是数字，会累加。

枚举可实现的，对象也可以实现，但是它可以实现`反射映射`。

---

# 泛型

## 【1】在方法中使用

```
function join<T>(first: T, second: T){
    return `${first}${second}`;
}
console.log(join <string> ('peng','dan')) // 'pengdan'
console.log(join <number> (3,2)) // 32
```

参数 1 和参数 2 可以是任意类型，但 2 者得同时是同一类型。

优化：

```
function join<T1,T2>(first: T1, second: T2){
    return `${first}${second}`;
}
console.log(join <number,string> (3,'date')) // 3date
```

## 【2】在类中使用

```
class SelectGirl {
    constructor (private girls: string){}
    getGirl(index: number): string {
        return this.girls[index];
    }
}
const selectGirl = new SelectGirl(['小A','小B','小C']);
```

这时只能使用 string 类型的，改为泛型即可使用任意类型。

```
class SelectGirl<T> {
    constructor (private girls: T){}
    getGirl(index: number): T {
        return this.girls[index];
    }
}
const selectGirl1 = new SelectGirl(['小A','小B','小C']);
const selectGirl2 = new SelectGirl([1,2,3]);

```

---

# 搭建浏览器开发环境

1. 建立好文件夹后，打开 `VSCode`，把文件夹拉到编辑器当中，然后打开终端，运行`npm init -y`,创建`package.json`文件。
2. 生成文件后，我们接着在终端中运行`tsc -init`,生成`tsconfig.json`文件。
3. 新建`src`和`build`文件夹，再建一个`index.html`文件。
4. 在`src`目录下，新建一个`page.ts`文件，这就是我们要编写的`ts`文件了。
5. 配置`tsconfig.json`文件，设置`outDir`和`rootDir`(在 15 行左右)，也就是设置需要编译的文件目录，和编译好的文件目录。
6. 然后编写`index.html`，引入`<script src="./build/page.js"></script>`,当让我们现在还没有`page.js`文件。
7. 编写`page.ts`文件，加入一句输出`console.log('jspang.com')`,再在控制台输入`tsc`,就会生成`page.js`文件
8. 再到浏览器中查看`index.html`文件，如果按`F12`可以看到`jspang.com`，说明我们的搭建正常了。

---

# 命名空间 namespace

## 【1】当不使用命名空间时

在 page.ts 文件里，写出下面的代码：

```
class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header";
    document.body.appendChild(elem);
  }
}

class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content";
    document.body.appendChild(elem);
  }
}

class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer";
    document.body.appendChild(elem);
  }
}

class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
```

写完后我们用`tsc`进行编译一次，然后修改`index.html`文件，在`<body>`标签里引入`<script>`标签，并实例化`Page`，代码如下:

```
<body>
  <script>new Page();</script>
</body>
```

此时控制台(Console)中，分别输入`Header`、`Content`、`Footer`和`Page`都时可以拿到对应的变量的,说明他们全都是全局变量。

## 【2】使用命名空间

用 namespace 和 export 导出，用 Home.page()实例化。

```
namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Header";
      document.body.appendChild(elem);
    }
  }

  class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Content";
      document.body.appendChild(elem);
    }
  }

  class Footer {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Footer";
      document.body.appendChild(elem);
    }
  }

  export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
```

```
new Home.Page();
```

## 【3】组件化

新建一个`components.ts`文件作为组件

```
namespace Components {
  export class Header1 {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "A";
      document.body.appendChild(elem);
    }
  }
}
```

在`page.ts`里面使用

```
namespace Home {
  export class Page {
    constructor() {
      new Components.Header1();
    }
  }
}
```

在`index.html`中引用新编辑的文件

```
<script src="./build/page.js"></script>
<script src="./build/components.js"></script>
```

## 【4】多文件编译成一个文件

将`tsconfig.json`中的`"module":"commonjs"`改为`"module":"amd"`；然后修改`outFile`配置项。

```
{
  "outFile": "./build/page.js"
}
```

此时`index.html`文件不引用`component.js`也可以正常使用了。

## 【5】子命名空间

在`Components.ts`文件下编写：

```
namespace Components {
  export namespace SubComponents {
    export class Test {}
  }

  //someting ...
}
```

使用：`Components.SubComponents.Test`

---

# 使用 import 和 export

修改`compontens.ts`，删除`namespace`

```
export class Header1 {
    constructor() {
    const elem = document.createElement("div");
    elem.innerText = "A";
    document.body.appendChild(elem);
    }
}

export class Content1 {
    constructor() {
    const elem = document.createElement("div");
    elem.innerText = "B";
    document.body.appendChild(elem);
    }
}
```

## 【1】直接使用

`page.ts`：

```
import { Header1, Content1 } from "./components";
export class Page {
  constructor() {
    new Header1();
    new Content1();
  }
}
```

`html`：

```
<script>new Home.Page();</script>
```

## 【2】使用 require

**【2.1】引入：**

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js"></script>
```

**【2.2】使用`default`关键字：**

```
import { Header1, Content1 } from "./components";
export default class Page {
  constructor() {
    new Header1();
    new Content1();
  }
}
```

**【2.3】使用：**

```
<script>
    require(['page'], function(page){
        new page.default();
    })
</script>
```

---

# 使用 parcel 打包

安装

```
yarn add --dev parcel@next
```

修改`package.json`里边的代码。

{

"scripts": { "test": "parcel ./src/index.html" }, }

输入`yarn test`，打包出地址：`http://localhost:1234`

---

# 结语

学习开始于 2020-09-01，结束于 2020-10-26，耗时 55 天。
