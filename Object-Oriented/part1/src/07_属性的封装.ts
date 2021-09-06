(function (){
    // 定义一个表示人的类
    class Person{
        // 属性的封装，让属性变得更加安全，不能直接读取和修改
        // TS可以在属性前添加属性的修饰符
        /*
        *   public 修饰的属性可以在任意位置访问（修改） 默认值
        *   private 私有属性，私有属性只能在类内部进行访问（修改）
        *       - 通过在类中添加方法使得私有属性可以被外部访问
        *   protected 受包含的属性，只能在当前类和当前类的子类中访问（修改）
        *
        * */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

 
// - 通过在类中添加方法使得私有属性可以被外部访问
        // 定义方法，用来获取name属性
        // getName(){
        //     return this._name;
        // }
        // 在函数外部 console.log(per.getName()); 来获取this._name
        // 
        // // 定义方法，用来设置name属性
        // setName(value: string){
        //     this._name = value;
        // }
        // 在函数外部 per.setName("猪八戒");   这样如果不想被修改，就可以不提供setName()方法
        // 
        // getAge(){
        //     return this._age;
        // }
        //
        // setAge(value: number){
        //     // 设置的时候内容有可能不在指定范围内，可以设置一个条件
        //     // 判断年龄是否合法
        //     if(value >= 0){
        //         this._age = value;
        //     }
        // }
       /*
        *   getter方法用来读取属性
        *   setter方法用来设置属性
        *       - 它们被称为属性的存取器
        * */
        // 当属性容易被修改错，或计算要求比较高的时候
        // TS中设置getter方法的方式
        get name(){
            // console.log('get name()执行了！！');
            return this._name;
            // 函数外部调用还可以使用简单的方式 console.log(per.name);
        }

        set name(value){
            this._name = value;
            // 函数外部修改属性  per.name = '猪八戒';
        }

        get age(){
            return this._age;
        }

        set age(value:number){
            if(value >= 0){
                this._age = value;
            }
        }
    }

    const per = new Person('孙悟空', 18);

    /*
    * 现在属性是在对象中设置的，属性可以任意的被修改,
    *   属性可以任意被修改将会导致对象中的数据变得非常不安全
    * */

    // per.setName('猪八戒');
    // per.setAge(-33);

    per.name = '猪八戒';
    per.age = -33;

    // console.log(per);

    
    
    // protected 受包含的属性，只能在当前类和当前类的子类中访问（修改）
    class A{
        protected num: number;

        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A{

        test(){
            console.log(this.num);
        }

    }

    const b = new B(123);
    // b.num = 33;


  
  
    /* class C{

        name: string;
        age: number

        // 可以直接将属性定义在构造函数中
        constructor(name: string, age: number) {
            this.name = name;
             this.age = age;
        }

    }*/

    // 简写方式
    class C{
        // 可以直接将属性定义在构造函数中
        constructor(public name: string, public age: number) {
        }

    }

    const c = new C('xxx', 111);

    console.log(c);

})();