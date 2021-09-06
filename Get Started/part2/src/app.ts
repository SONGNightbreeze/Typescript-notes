import { hi } from './m.js'
let a = 10;
// 这是一个注释
console.log(hi);
console.log(a);

// a = 'hello';

function fn(a: number, b: number){
    return a + b;
}

function fn2(this: Window){
    alert(this);
}

let box1 = document.getElementById('box1');
// bo1 有空值的可能， 可以用if 判断， 或者直接在ts中限制 或者box1?.addEventListener
// if(box1 !== null){  
//     box1.addEventListener('click', function (){
//         alert('hello');
//     });
// }

box1?.addEventListener('click', function (){
    alert('hello');
});

