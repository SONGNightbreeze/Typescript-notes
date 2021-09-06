// object表示一个js对象
let a: object;
a = {};
a = function () {
};  // function()也是一个对象

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的 这样可以没有age值也可以
let b: {name: string, age?: number};
b = {name: '孙悟空', age: 18};

// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any};  // 表示出了name以外还可以添加其他任意属性
c = {name: '猪八戒', age: 18, gender: '男'};

/*
*   设置函数结构的类型声明：   限制有几个参数，返回值是什么类型的
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
let d: (a: number ,b: number)=>number;  // d是一个函数，有两个参数，参数类型是number，返回值也是number
// d = function (n1: string, n2: string): number{
//     return 10;
// }  报错


/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
let e: string[];  // 声明字符串类型的数组 
e = ['a', 'b', 'c'];

// number[] 表示数值数组
let f: number[];

let g: Array<number>;
g = [1, 2, 3];

/*
*   tuple 元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
let h: [string, number];
h = ['hello', 123];

/*
* enum 枚举
*
* */
// 定义一个枚举的类
enum Gender{
    Male,
    Female
}

let i: {name: string, gender: Gender};
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
}

// console.log(i.gender === Gender.Male);
// &表示同时
let j: { name: string } & { age: number };
// j = {name: '孙悟空', age: 18};


// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 2;