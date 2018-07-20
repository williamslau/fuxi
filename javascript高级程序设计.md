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


## 垃圾回收
找出那些不再继续使用的变量，然后释放其占用的内存。

局部变量只在函数执行的过程中存在，执行完后会释放内存

垃圾回收的两种策略
### 标记清除&引用计数
标记要清除的数据，浏览器每隔一段时间统一清除一次
离开作用于的值将被自动标记为可回收，因此将在垃圾回收期间被删除

引用计数，每个数据都会带个下标，当下标为零的时候清除掉，ie的dom和bom就是用的引用计数，已发生的问题是两个对象相互引用，这样的话数组永远不能成零，就不会被清除
解决方法是当不再用这个数据的时候解除相互的引用，将两个对象指向null

### 性能问题
EI(ie6)的垃圾回收器根据内存分配运行的，具体一点就是:
256个变量，4096个对象字面量和数组元素，64kb字符串；
达到任何一点垃圾回收就会运行。
ie7修改了这个机制，分配内存还是这些，但是如果垃圾回收的内存低于15%了，临界值会翻倍，如果回收了85%的内存，则将临界值重置为默认值。
极大的提高了性能

IE调用window.CollectGarbage()执行垃圾回收
Opera7+调用windiw.opear.collect();


## 管理内存

分配给Web浏览器的内存数量通常要比桌面应用的少，这样做是为了防止JS网页耗尽系统内存导致系统崩溃。
确保占用最少的内存可以让页面获得更好的性能。
最好的方法就是解除引用，将其值设置为null来释放引用，适用于全局变量


## 第四章总结
基本类型的值（变量）会保存在栈内存中；
引用类型的值（对象）会保存在堆内存中；
判断基本类型的值用`typeof`;
判断引用类型的值用`instanceof`;


# 第五章 引用类型
引用类型是一种数据结构，用于将数据和功能组织在一起
也常被称为类，对象和类看起来相似，但其实并不是相同的概念
对象的创建
```
var obj=new Object();

// or

var obj={};			// 对象字面量语法

```
对象最后一个值后面添加  ','  ，会在es7，早版本Opera报错

## Array类型
var arr=new Array();
var arr=[];  	// 数组字面量语法
length数组的长度
设置的比原有的数组小的话会移除多余的项
设置的比原有的数组大的话，多出来的会是undefined
** 利用length可以在数组最后一项添加新项： **
```
var colors=['red','blue','green'];
colors[colors.length]='black';
```
数组会在插入以后重新计算length;

```
var colors=['red'];
colors[99]='black';

alert(colors.length);   // 99
```

### 数组极限
4294967295

join()方法如果不传值，则默认以,隔开

### 数组栈方法
push(),向后插入，可接受多个参数

pop(),从后移除
```

var arr=[1];	
var arrl=arr.push(2,3);	// 可以push多个参数
console.log(arrl);		//3,数组的总长度

var item=arr.pop();		
console.log(item);

```
### 数组队列方法
栈数据是后进先出
队列数据是先进先出
shift()
unshift()
```
var arr=['a','b','c']
var item = arr.shift();
console.log(item);  	// a   // 所取得值

var item2 = arr.unshift(0,10) 	// 4	数组当前的length;
```

### 重排序方法
反转
reverse();

排序
sort();
sort(funciton(a,b){
  return a-b;
});

### 操作方法
```
concat();   // 合并
slice();    // 基于当前数组创建一个新数组
// slice中参数如果是负数，则用length加上该参数来确定

splice(起始位置,需要删除的个数,之后都是要插入的项)  //删除, 插入, 替换
// splice()始终返回一个数组，为从原始苏族中删除的项
```

### 位置方法
支持ie9+
indexOf()
lastIndexOf()

### 迭代方法
es5定义了五种迭代方法 ie9+
filter() 过滤
forEaach() 循环
map() 从新组合 

every() 全都匹配返回true
some() 只要有匹配的就返回true

### 归并方法
es5
reducer((前一个值，当前值，当前索引，数组对象)=>{},第一次循环相加)
reducerRight()

### Date 类型

UTC标准
时间戳1970.1.1 00:00:00 开始的
以毫秒数保存

var Date=new Date();


```
// es5
Date.now() // 获取当前时间
var start=Date.now();
// doSomething()
var stop=Date.now();
console.log(stop-start);

// 等价于

var start=+new Date()
// doSomething()
var stop=+new Date()
console.log(stop-start);
```
### 继承的方法
按照浏览器设置地区格式化Date
`toLocaleString()`

### 日期格式化方法
`toDateString()`——以特定于实现的格式显示星期几、月、日和年；
`toTimeString()`——以特定于实现的格式显示时、分、秒和时区；
`toLocaleDateString()`——以特定于地区的格式显示星期几、月、日和年；
`toLocaleTimeString()`——以特定于实现的格式显示时、分、秒；
`toUTCString()`——以特定于实现的格式完整的 UTC 日期。

### 常用的日期方法
```
getFullYear()
setFullYear()
getMonth()    // 从零开始
setMonth()
getDate()
setDate()
getDay()
setDay()
getHours()
setHours()
getMinutes()
setMinutes()
getSeconds()
setSeconds()
```

## RegExp 正则

匹配模式
g:全局模式
i:不区分大小写
m:多行模式

.通配符指所有符号
字面量写法
```
var reg=/[.aa]/g
```
构造函数写法
```
new RegExp('[.aa]',g);
```
### 正则方法

exec()
```
var text = "cat, bat, sat, fat";
var reg = /.at/g; 

var a=reg.exec(text);

var b=reg.exec(text);
var c=reg.exec(text);
var d=reg.exec(text);
var e=reg.exec(text);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
```
执行结果
```
[ 'cat', index: 0, input: 'cat, bat, sat, fat' ]
[ 'bat', index: 5, input: 'cat, bat, sat, fat' ]
[ 'sat', index: 10, input: 'cat, bat, sat, fat' ]
[ 'fat', index: 15, input: 'cat, bat, sat, fat' ]
null
```
test()
返回值为true false
经常被用在if语句中、、、、、、、
属性
```
alert(RegExp.$_); // this has been a short summer 字符串本身
alert(RegExp["$`"]); // this has been a 被匹配单词左边部分
alert(RegExp["$'"]); // summer  被匹配单词右边部分
alert(RegExp["$&"]); // short 被匹配的单词
alert(RegExp["$+"]); // s 被匹配的值
alert(RegExp["$*"]); // false 
```


## function 类型
用var声明函数之后在var之前调用函数会报错，函数声明则不会（变量提升）
```
sun(sum())
var sum=function(){
  alert(1);
}
```
### 函数内部属性
arguments this
// 严格模式下会报错
** callee,arguments属性 **属性,这个属性是个指针，指向拥有这个arguments对象的函数
```
function a(num){
  if (num <=1) {
    return 1;
  } else {
    return num * a(num-1)
  }
} 
function a(num){
  if (num <=1) {
    return 1;
  } else {
    return num * arguments.callee(num-1)
  }
} 
```
es5规范了另一个属性
caller,这里保存着调用当前函数的函数引用，如果是全局函数，则是null

```
function outer(){
	inner();
}
function inner(){
	console.log(inner.caller);
	console.log(arguments.callee.caller);
}
outer();    // console出调用他的那个函数
```

### 函数的属性和方法

每个函数都包含`length`和`prototype`两个属性

length 表示函数希望接受的参数的个数


每个函数都包含两个非继承方法
这两个方法的用途都是在特定的作用于中调用函数，等于设置函数体内this对象的值
```
// apply()
function sum(a1,a2){
  return a1+a2;
}

function a(n1,n2){
  return sum.apply(this,arguments);
}
function b(n1,n2){
  return sum.apply(this,[n1,n2]);
}
console.log('a',a(10,20));
console.log('b',b(10,10));
call()
// 在使用call的情况下必须明确的传入每一个参数
function sum(num1, num2){
  return num1 + num2;
}
function callSum(num1, num2){
  return sum.call(this, num1, num2);
}
console.log(callSum(10,10));
```
两者唯一的不同就是传参的方式不同，apply是数组，call是一个个的参数

** 最大的作用就是从新指向this(补充作用域) **
es5还规定了bind()
```
window.color = "red";
var o = { color: 'blue' };
function a(){
  console.log(this.color);
}
a()
a.call(window); // red
a.apply(this);  // red
a.call(o);      // blue
a.bind(o)();    // blue
```
## 基本包装类型
特殊的引用类型
Boolean
Number
String
按理说只有对象才有方法，所以字符串操作的方法其实内部完成了以下操作
```
var s1 = new String("some text");
var s2 = s1.substring(2);
s1 = null; 
// 运行完后会瞬间销毁，所以不能绑定属性和方法
```
也适用于Boolean,Number

### number
```
var num = 10.005;
alert(num.toFixed(2)); //"10.01" 
```

### String类型
字符方法
```
charAt(index) // 查找相应下标的值
string[index] // 也可以查找

concat(多个参数)  // 链接
// 创建新字符串的方法
slice(开始，结束)       // 负数和字符串长度相加
substring(开始，结束)   // 不支持负数
substr(开始，多少个)    // 第一个参数和长度相加，第二个参数不持持负数
```
位置方法
```
indexOf(要搜索的值，从那个位置开始搜索)
lastIndexOf(要搜索的值，从那个位置开始搜索)
// 返回所有E的下标
var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");
while(pos > -1){
 positions.push(pos);
 pos = stringValue.indexOf("e", pos + 1);
}

alert(positions); //"3,24,32,35,52" 


trim()  // 清除左右空格
toLowerCase()   //转小写
toUpperCase()   //转大写
```
配合正则的方法
```
match()

//与 pattern.exec(text)相同
var text = "cat, bat, sat, fat";
var pattern = /.at/;
var matches = text.match(pattern); 
alert(matches[0]); //"cat" 

search()
// 返回下标
var text = "cat, bat, sat, fat";
var pos = text.search(/at/);
alert(pos); //1 

```
** replace() 替换**
```
var text = "cat, bat, sat, fat";
var result = text.replace("at", "ond");
alert(result); //"cond, bat, sat, fat" 

result = text.replace(/at/g, "ond");
alert(result); //"cond, bond, sond, fond" 

var str(替换完成的字符串)=replace(/at/g,function(item,index,string){
  return 要替换的值
});

// split() 也可以传入正则
var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(","); //["red", "blue", "green", "yellow"]
var colors2 = colorText.split(",", 2); //["red", "blue"]
var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""] 


//localeCompare() 比较两个字符串
看字母位置
var stringValue = "yellow";
alert(stringValue.localeCompare("brick")); //1
alert(stringValue.localeCompare("yellow")); //0
alert(stringValue.localeCompare("zoo")); //-1 
```





















































