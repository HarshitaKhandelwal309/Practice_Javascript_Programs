//1 hello world
alert("hello");
console.log("hello world");
 // 2nd add two number
function add(num1,num2)
{
console.log(num1,num2);
var result=(num1+num2);
console.log(result);
}
add(5,9);

//3rd square root of number

var number = 25;
var sqrt = Math.sqrt(number);
console.log(sqrt);
var number = -25;
var sqrt = Math.sqrt(number);
console.log(sqrt);
var number = "hello";
var sqrt = Math.sqrt(number);
console.log(sqrt);
//4 area of triangle
var base = 25 ;
var height = 35;
 var result =0.5*(base*height);
 console.log(result);

//  5 swap two number

var a = 5 ;
var b = 3 ;
console.log( "before swaping", a );
console.log("before swaping " ,b);
a = a+b;
b =a-b;
a =a-b ;

console.log( "after swaping", a);
console.log("after swaping " ,b);

//6 reverse a number

// var x= 32243;
//  var convertToString =x.toString();
//  var splitString = convertToString.split('');
//  splitString = splitString.reverse();
//  var splitString = splitString.join('');
//  console.log(splitString);

//  var no = 12345;
// var string = no.toString();
// var other = string.split('');
// other = other.reverse();
// var other = other.join('');

// console.log(other);

function reverse_number(num){
    return num.toString().split('').reverse().join('');
}
console.log(reverse_number(32243));