
var a = ' at1ata2ta2ta2tasdddfatfffffatsd';

// a.replace(/at/g,function(a,b,c){
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// });
a.replace(/.at/g, function (a, b, c) {
	console.log(a);
});

var text = "cat, bat, sat, fat";
var reg = /.at/g;

var a = reg.exec(text);

var b = reg.exec(text);
var c = reg.exec(text);
var d = reg.exec(text);
var e = reg.exec(text);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

sum()
var sum = function () {
	conosle.log(1);
}

window.color = "red";
var o = { color: "blue" };
function sayColor(){
 console.log(this.color);
}
sayColor(); //"red"

function outer(){
	inner();
}
function inner(){
	console.log(arguments.callee.caller);
}
outer(); 


function sum(a1,a2){
	console.log(this);
	return a1+a2;
}

function a(n1,n2){
	return sum.apply(this,arguments);
}
function b(n1,n2){
	return sum(n1,n2);
}
console.log('a',a(10,20));
console.log('b',b(10,10));


