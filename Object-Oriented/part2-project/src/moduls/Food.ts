// 定义食物类Food
class Food{
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;  // 元素名element 类型就是对应的HTMLElement

    constructor() {
        // 获取页面中的food元素并将其赋值给element    直接根据id是food来获取对象
        this.element = document.getElementById('food')!;  // 最后加一个! 表示这个元素不可能为空
    }

    // 食物需要的方法   当蛇的位置和食物的位置相同的时候表示蛇吃到食物
    // 定义一个获取食物X轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }

    // 定义一个获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change(){
        // 生成一个随机的位置
        // 食物的位置最小是0 最大是290
        // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
        // Math.random()生成0-1的随机数，不包括0和1    Math.round()四舍五入的取整
        // Math.random() * 29 表示0 到29之间 ，取整以后0-29包括0和29  整体再乘10
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

// 测试代码
// const food =  new Food();
// console.log(food.X, food.Y);  看看是否能获得 食物的坐标
// food.change();  调用food.change的方法
// console.log(food.X, food.Y);

export default Food;