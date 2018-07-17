// 数组的方法

// 1.join()
var arr = [1, 2, 3];
console.log(arr.join('-'));

// 2.push,pop
var arr = [1];
arr.push(2);      // 从后面添加
console.log(arr);
arr.pop();        // 从后面删除
console.log(arr);
var arr = [1];
arr.unshift(2)    // 从前面添加
console.log(arr);
arr.shift();      // 从后面添加
console.log(arr);

let arr = [22, 3, 5, 1100];  // 排序
console.log(arr.sort((a, b) => {
  return a - b;
}));

let arr = ['b', 'aaa', 'c'];
console.log(arr.sort());

var arr = [1, 2, 3];      // 反转
console.log(arr.reverse());

// concat();    往数组里添加，链接两个数组
let arr1 = [1, 2, 3];
let arr2 = arr1.concat(4, [5, 6]);
var arr3 = arr1.concat([4, [5, 6]]);
console.log(arr1);
console.log(arr2);
console.log(arr3);


//slice()   切割数组  正数为正数，负数为倒数
var arr = [1, 3, 5, 7, 9, 11];
var arr1 = arr.slice(1);
console.log(arr1);
var arr2 = arr.slice(1, 3);
console.log(arr2);
var arr3 = arr.slice(1, -2);
console.log(arr3);
var arr3 = arr.slice(-2, -1);
console.log(arr3);


// splice();
var arr = [1, 2, 3, 4, 5];
console.log(arr.splice(2));
var arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 3));
var arr = [1, 3, 5, 7, 9, 11];
arr.splice(2, 2, 4, 6);    // 从第二个位置删除两个添加4,6
console.log(arr);

// indexOf(); lastIndexOf()
var arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(1));
console.log(arr.lastIndexOf(5));



// es5

// forEach
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (value, index, item) {
  console.log(value, index, item);
});

// map      映射
var arr = [1, 2, 3, 4, 5];
arr.map(function (value, index) {
  console.log(value, index);
});

// filter 过滤
var arr = [1, 2, 3, 4, 5];
var arr2=arr.filter(function (item, index) {
  console.log(item > 3);
  return item > 3;
});
console.log(arr2);

// some 判断数组中是否存在满足条件的项
var arr = [1, 2, 3, 4, 5];
var arr2=arr.some(function(item,index){
  return item === 2;
});
console.log(arr2);
var arr = [1, 2, 3, 4, 5];
var arr2=arr.every(function(item,index){
  return item<6;
});
console.log(arr2);




