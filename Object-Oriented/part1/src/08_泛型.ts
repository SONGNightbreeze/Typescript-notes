/*
function fn(a: any): any{   使用any会关闭TS中的类型检查
    return a;
}*/

/*
*   在定义函数或是类时，如果遇到类型不明确就可以使用泛型
*
* */

function fn<T>(a: T): T{     // 定义一个泛型，泛型的名字叫T，
                            // 表示任意类型，只有在函数执行的时候才可以去确定
    return a;
}
fn(10);  // 自动判断出类型是number
// 可以直接调用具有泛型的函数
let result = fn(10); // 不指定泛型，TS可以自动对类型进行推断
let result2 = fn<string>('hello'); // 指定泛型

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K):T{
    console.log(b);
    return a;
}
fn2<number, string>(123, 'hello');

interface Inter{
    length: number;
}

// T extends Inter 表示泛型T必须时Inter实现类（子类） T泛型实现了inter接口这个类，不用区分extends或者implements
                                                  // 所有的都使用extends
function fn3<T extends Inter>(a: T): number{
    return a.length;
}
// fn3() 要有length属性

// 类中也可以使用泛型
class MyClass<T>{
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass<string>('孙悟空');



