(function () {

    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    };

    /*
    *   接口用来定义一个类结构(对象的结构)，用来定义一个类中应该包含哪些属性和方法
    *       同时接口也可以当成类型声明去使用
    * */
    interface myInterface {
        name: string;
        age: number;
    }
    // 接口可以重复命名，表示两个结合成一个
    interface myInterface {
        gender: string;
    }

    // const obj: myInterface = {
    //     name: 'sss',
    //     age: 111,
    //     gender: '男'
    // };

    /*
    * 接口可以在定义类的时候去限制类的结构，
    *   接口中的所有的属性都不能有实际的值， 是抽象方法
    *   接口只定义对象的结构，而不考虑实际值
    *       在接口中所有的方法都是抽象方法
    *
    * */
    interface myInter{
        name: string;

        sayHello():void;
    }

    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    *   比如 myInter接口中有一个name的属性和 sayHello()方法，类里面也要满足这两个
    * */
//    继承一个类使用extends   实现一个接口使用implements
    class MyClass implements myInter{
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(){
            console.log('大家好~~');
        }

    }

})();