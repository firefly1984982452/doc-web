# 与 JAVA 相通的概念

## 【1】MVC、MVVM

◆ 【1.1】MVC

Model 层:模型层，比如图片放一个类，标题放一个类 View 层：显示页面，如 xml Controller 层：控制 Model 的读取、存储。如 MainActivity

◆ 【1.2】MVVM

MVVM 实现了 View 和 Model 的自动同步，当 Model 的属性改变时，我们不再手动操作 DOM，也就是双向绑定。

Model 层：后端传递的数据 View 层：页面 ViewModel 层：视图模型，连接 Model 和 View 的桥梁。将 Model 转为 View（将后端数据显示给前端）用的是数据绑定，将 View 转为 Model（将前端数据转给后端）用的 DOM 监听，这种实现方法称为为**数据的双向绑定**。

## 【2】类

js 里面的类和其它 OOP 里面的类概念是一样的。（比如，所有的车是一个类，房子是一个类）
