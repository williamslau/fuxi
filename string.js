// 字符串方法

var a = 'aaa';
let b = 'bbb';
let c = a.concat(b);
console.log(c);

let a = '0123456789';
console.log(a.indexOf(1));
console.log(a.lastIndexOf(9));
console.log(a.charAt(5));

// 切割字符串
console.log(a.substring(1, 6));
console.log(a.slice(1, 6));

//转化为数组
console.log(a.split(''));
// 替换
console.log(a.replace('0', '111'));

// 转大写
let str = 'abcdefg';
console.log(str.toLowerCase());
console.log(str.toUpperCase());


//字符串函数扩展补充

// 去除左边空格

let a = '  ss   df   ';
console.log(a.replace(/^\s*/g, ''));
console.log(a.replace(/\s*$/g, ''));
console.log(a.replace(/\^\s*|s*$/g, ''));
console.log(a.replace(/\s*/g, ''));


// 数组的复制，不影响原数组
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.concat();
arr1.push(11)
console.log(arr);
console.log(arr1);

let arr = [1, 2, 3, 4, 5];
let arr1 = arr.slice(0);
arr1.push(11)
console.log(arr);
console.log(arr1);

let arr = [1, 2, 3, 4, 5];
let arr1 = [...arr];
arr1.push(11)
console.log(arr);
console.log(arr1);

let arr = [1, 2, 3, 4, 5];
let arr1 = JSON.parse(JSON.stringify(arr));
arr1.push(11)
console.log(arr);
console.log(arr1);

// 递归拷贝
let school = [{ a: 1, b: [1, 2], function() { } }, [3, 4], /\d+/, null];
function deepClone(parent) {
  let child;
  let type = Object.prototype.toString.call(parent);
  switch (type) {
    case '[object Array]':
      child = [];
      for (let i = 0; i < parent.length; i++) {
        child[i] = deepClone(parent[i]);
      }
      break;
    case '[object Object]':
      child = {};
      for (let key in parent) {
        child[key] = deepClone(parent[key]);
      }
      break;
    default:
      child = parent;
      break;
  }
  return child;
}

let result = deepClone(school);
result[0].a = 3333;
result[1][0] = 3333;
console.log(result);
console.log(school);

let school = [{ a: 1, b: [1, 2], function() { } }, [3, 4], /\d+/, null];
let deepClone = (parent) => {
  let type = Object.prototype.toString.call(parent);
  let child = type === '[object Array]' ? [] : type === '[object Object]' ? {} : parent;
  if (child != parent) {
    for (let key in parent) {
      child[key] = deepClone(parent[key]);
    }
  }
  return child;
}

let result = deepClone(school);
result[0].a = 3333;
result[1][0] = 3333;
console.log(result);
console.log(school);

// 取最大值
// 可以用排序
let arr = [2, 4, 5, 45, 111, 1,];
let max = arr.sort((a, b) => (b - a))[0];
console.log(max);
// es6
let max2 = Math.max(...arr);
console.log(max2)


// 多维数组转化为一维
let tree = ['a', ['b', 'c'], ['d', 'e']];
// 使用递归转化
let res = [];
function toarr(arr) {
  arr.forEach(function (item, index) {
    if (Array.isArray(arr[index])) {
      toarr(arr[index]);
    } else {
      res.push(item);
    }
  });
  return res;
}
console.log(toarr(tree));
console.log(tree.toString().split(','));
console.log(tree.join().split(','));

// 数组去重
// indexof
let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
let res = [];
arr.forEach(function (item) {
  if (res.indexOf(item) === -1) {
    res.push(item);
  }
});
console.log(res);

let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
let res = arr.filter(function (value, index, item) {
  return item.indexOf(value) === index;
});
console.log(res);

// 冒泡排序
let arr = [2, 4, 30, 5, 45, 111, 1,];
let item;
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    console.log(arr);
    if (arr[i] > arr[j]) {
      item = arr[i];
      arr[i] = arr[j];
      arr[j] = item
    }
  }
}
console.log(arr);


// 快速排序
let array = [2, 4, 30, 5, 45, 111, 1];
function quick(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let center = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > center) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  console.log('left', left);
  console.log('right', right);
  return [...quick(left), center, ...quick(right)];
}
console.log(quick(array));

// 选择排序
let array = [2, 4, 30, 5, 45, 111, 1];
function sort(arr) {
  let index;
  let item;
  for (let i = 0; i < arr.length; i++) {
    index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        index = j;
      }
      item = arr[i];
      arr[i] = arr[index];
      arr[index] = item;
    }
  }
  return arr;
};
console.log(sort(array));

// 插入排序
let array = [2, 4, 30, 5, 45, 111, 1];
function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1]=key;
  }
  return arr;
}
console.log(sort(array));

