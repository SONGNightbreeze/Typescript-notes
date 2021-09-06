// 也可以直接使用字面量进行类型声明
let a: 10;
a = 10;
// a = 11; 已经赋值的字面量再重新赋值会出现问题

// 可以使用 | 来连接多个类型（联合类型）
let b: "male" | "female";  //  表示可以赋值成 "male" 或者 "female"
b = "male";
b = "female";

let c: boolean | string;  // 可以赋值两个类型
c = true;
c = 'hello';

// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d: any;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let d;
d = 10;
d = 'hello';
d = true;

// unknown 表示未知类型的值
let e: unknown;
e = 10;
e = "hello";
e = true;

let s:string;

// d的类型是any，它可以赋值给任意变量
// s = d;

e = 'hello';

// s = e; 会出现警告提示， e的值是字符串，但是看的不是e的值，而是e的类型，e的类型是unknown

// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if(typeof e === "string"){
    s = e;
}

// 另一种解决方式
// 类型断言，可以用来告诉解析器变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
*
* */
s = e as string;  // 告诉编译器 e 就是 string类型
s = <string>e;

// void 用来表示空(空值)，以函数为例，就表示没有返回值的函数
// function fn(): number{  可以设置返回值的类型是number
// }
function fn(): void{
    // 可以写 return null;  return undefined;
}

// never 表示永远不会返回结果，  功能: 用来报错的
function fn2(): never{
    throw new Error('报错了！');
}
