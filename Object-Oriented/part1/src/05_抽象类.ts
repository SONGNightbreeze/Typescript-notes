(function () {

    // Animal()是一个父类，作用是被别的类继承，不希望出现Animal的对象
    // 禁止一个类被创建为对象
    /*
    *   以abstract开头的类是抽象类，
    *       抽象类和其他类区别不大，只是不能用来创建对象
    *       抽象类就是专门用来被继承的类
    *
    *       抽象类中可以添加抽象方法
    * */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
        // 每个子类的sayHello(){}都不一样，所以父类中的sayHello不需要有内容
        // 定义一个抽象方法
        // 抽象方法使用 abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello():void;
    }

    class Dog extends Animal{

        sayHello() {
            console.log('汪汪汪汪！');
        }

    }

    class Cat extends Animal{
        sayHello() {
            console.log('喵喵喵喵！');
        }

    }

    const dog = new Dog('旺财');
    dog.sayHello();

})();