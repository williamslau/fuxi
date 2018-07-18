# 第一章
## javascript的实现
核心 ECMAScript
文档对象模型 DOM(document object model)
浏览器对象模型 BOM

# 第二章
## script 属性
type 代码使用脚本语言的内容类型 text/javascript
defer 脚本可以延迟到文档被完全解析和显示之后再执行（立即下载但延迟执行）Firefox,Safari,Chrome
async 异步加载脚本（但是不保证多个脚本的执行先后顺序）Firefox,Safari,Chrome

# 第三章
## 驼峰命名法

## 注释

`//`
## 多行注释

```
/**
*
*/
```

## 严格模式

```“use strict”;```
## 赋值

```var message = 'hi';```
## 全局变量

```message = 100;```
## 逗号表达式

```
var message=1,
found=false,
age=1;
```

## 数据类型

```
undefined
boolean
string
number
object
function
```

### typeof

`null` 属于 `object`
`NaN` 属于 `Number`
`var message`
变量声明但未赋值为`undefined`
变量未声明调用为报错
`null` 空对象指针
`unfefined == null;`
永远没必要把一个值显示为`undefined` 但是可以设置为`null`,因为它是空对象指针，


### Boolean()

数据类型     true         false
Bollean     true         false
String      !""          ""
Number      !0           0,NaN
Object      任何对象      null
undefined   不适用        undefined

### Number

NaN的任何操作都会返回NaN
NaN!=NaN
isNaN() 
isNaN(true) // false true和false可以转会为数字1,0

### 数值转换

```
Number();
parseInt();
parseFloat();
```

#### Number()

特殊用法会将true,false转化为1,0。''转化为0
true,false   1，0；
00011        11  (不会转化进制)
'asda'       NaN
""           0

#### parseInt()

1234asdad    1234
1sd23        1
070          56(转化进制)
22.5         22

#### parseFloat();
0908.5       908.5

#### String

```
toString
null 'null'
undefined 'undefined'
Object
var o=new Object();
```

Object 类型的属性和方法
constructor 保存着用于创建当前对象的函数。对于当前例子而言，constructor 就是Object()

hasOwnProperty('propertyName') 用于检查给定的属性在当前对象实例中是否存在（而不是实例中的原型）
例如：o.hasOwnProperty('name');
isPrototypeOf(object) 用于检查传入的对象是否是传入对象的原型

## 操作符

### 前置递增

```
var a=1;
++a;
a=a+1;

var a=2;
var b=--a + 2 // 3

var a=2;
var b=20;
var c=--a + b  // 21;(此处已经将a-1,后面再用到a都是-1以后的)
var d=a+b      // 21;

```
### 后置递增

```
var a=2;
var b=20;
var c=a-- + b  // 22;(等级算完以后再-1)
var d=a+b      // 21;
```
### -+

一元操作符（隐式类型转换）

boolean操作符
!非（取反）
&&与（两者都true，才会返回true）属于短路操作
第一个为false,第二个就不会执行，就算未定义的变量也会忽略
||或 两者有一个为true返回值就是true 也属于短路操作
第一个为true了第二个就不会执行，就算未定义也会忽略

```
+-*\/都有隐式类型转换
而且会有Infinity 的情况
%求模（求余数）

### <><=>=
比较字符串会比较他们的编码
'B'<'b'
'23'<'3' //true 
==     有隐式类型转化
===    会判断数据类型
```
### 赋值

```
+=
-=
*=
/=
```
### 条件操作符 三目
```
var a=b?c:d;
var a=a=b?c:b=c?:d;
var max=(a>b)?a:b;
```

## 流程控制
```
if(){
}else{
}
if(a)aaa else if (b) bbb else ccc;
```
### do-while

当i<10时会返回再走do
常用于循环中的代码至少要被执行一次
```
var i=0;
do{
i++;
}while(i<10);
```
### while

如果i<10就会走循环
```
var i=0;
while(i<10){
i++;
}
```
### for

```
for(var i=0; i<arr.length; i++){}
```
只给控制表达式其实就是while循环
```
for(;i<arr.length;){} = while(i<arr.length){}
```

### for-in
循环json
`label:for(){}`  标识本次循环体 类似于var 了一个循环
`break` 跳出循环
`continue` 跳出本次循环


### with （具有）

解决重复变量.下去

例如
```
var a=location.href;
var b=location.hostname;

with(location){      //严格模式下不允许使用
  var a=href;
  var b=hostname; 
}
```

### switch
switch使用的是全等操作符。
```
switch(a){
case 1:
  a=2;
  break;
case 2;
  a=3;
  break;
default:
  a=4
}
```
## 函数
```
function a(a1,b1){
return a1+b1;
}
a(1,2);
```
arguments是函数的所有传参，这是个伪数组
arguments中对应的值修改了，对应的参数也会修改；
严格模式下arguments不能被更改

# 第四章
变量，作用于，内存
## 基本类型和引用类型
* 基本类型是单一的数据段
* 引用类型是可以由多个值构成的对象
### 基本类型有：
```
undefined
null
boolean
number
string
```

引用类型的值保存在内存中，js不允许直接访问内存中的位置
也就是不能直接操作对象的内存空间，实际上是在操作对象的引用而不是实际对象

## 执行环境及作用域
每个执行环境都有一个与之相关的变量对象，环境中定义的所有变量和函数都保存在这个对象中，我们无法访问到，解析器会用到

全局执行环境是 window 对象
执行环境中的所有代码执行完毕后环境会被销毁，其中的函数和变量也会销毁


作用于链的概念
线性的，有序的
保证对执行环境有访问的所有变量和函数有序访问，会从最里面开始一直往最外层找，直到windiw;


** 有两个方法可以延长作用于链 **
try-catch的catch模块
with











## 变量

### 复制变量的值
```
var a=5;	// 5
var b=a;	// 5
a=1;
alert(b);	// 5
```
### 引用
```
var a={};
var b=a;
a.name=111;
alert(b.name);	// 111
```
对象引用也可以用在函数传参上；
```
function a(o){
  obj.name=111;
}
var obj={};
a(obj);
console.log(obj.name);  	//	111
```
参数是按照值传递的
```
function a(obj){
  obj.name=111;
  obj={};
  obj.name=222;
  console.log(obj.name);	// 222
}
var o={};
a(o);
console.log(o.name);		// 111
```
** 即使在函数内部修改了参数的值，原始的引用仍然不变，内部重写的obj是一个局部对象，会在函数执行完以后销毁 **





















