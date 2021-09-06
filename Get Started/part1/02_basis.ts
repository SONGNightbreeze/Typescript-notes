// 声明一个变量a，同时指定它的类型为number
let a: number;

// a 的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = 'hello'; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串
let b: string;
b = 'hello';
// b = 123;

// 声明完变量直接进行赋值
// let c: boolean = false;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
// 如果不写boolean的情况，已经赋值false布尔值，c的类型就是布尔值是编译器自动判断出来的
let c = false;
c = true;

// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }

// 运行之前要编译一下，将编译好的js代码引入到html里

// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"  如果b是字符串

// 类型声明用到参数还有返回值上
function sum(a: number, b: number): number{
    return a + b;
}

let result = sum(123, 456);
