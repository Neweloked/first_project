'use strict';
/*let second = 2;
const pi = 3.14;
 console.log(second);*/

 /*let number = 5;
 let string = "Hello!";
 let sym = Symbol();
 let boolean = true;
 null; //когда ничего не существует!
 undefined; //Когда существует , но не задано значение
 let obj = {}; //Комплексный тип данных

 console.log(4/0); //infinity
 console.log('string' * 9); //NuN
*/
 /*let persone = {
     name: 'John',
     age: 25,
     isMarried: false
 };

 console.log(persone["name"]);*/

 /*let arr = ['plum.png', 'orange.png', 'apple.bmp']; //массив, нумерация с нуля
 console.log(arr[0]);*/
 /*let answer = confirm("Are you here?");
 console.log(answer);*/


 /*let text_inside = prompt('Есть ли вам 18 лет ?', );
 console.log(text_inside);
 console.log(typeof(text_inside));*/

 /*console.log('arr' + '- object');*/

 /*let incr = 10;
 let decr = 10;

 incr++;
 decr--;
 console.log(incr);
 console.log(decr);*/

 /* if (2*3 == 8) {
     console.log("Верно");
 } else {
     console.log("Не верно!");
 } */

/*  let num = 50;
 if (num < 49) {
     console.log("Не верно!");
 } else if (num > 100){
     console.log("Много!");
 } else {
     console.log("Верно!");
 } */

/*  (num == 50) ? console.log('Верно!') : console.log('Не верно!'); */


 /* switch (num) {
     case num < 49:
         console.log('Неверно!');
         break;
    case num > 100:
        console.log("МногО!");
        break;
    case num > 80:
        console.log('Все еще многО!');
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log('Что то пошло не так!');
        break;
 }
 */

/*  let num = 50; */
 /* while (num < 55) {
     console.log(num);
     num++;
 } */


/*  do {
     console.log(num);
     num++;
 } while (num < 55); */

/*  for (let i = 1; i < 8; i++) {
     if(i == 6) {
         continue;
     }
    console.log(i);
 } */
/* let num = 20;

 function showFirstMmessage(text) {
     alert(text);
     let num = 10;
     console.log(num);
 }

 showFirstMmessage("Hellow world!");
 console.log(num); */

/* function calc(a, b) {
     return a+b;
     
 } */

/*  let calc = (a, b) => a + b;
 
 
 console.log(calc(3,6));
 console.log(calc(9,2));
 

  function retVar(){
    let num = 50;
    return num;
 }

 let anotherNum = retVar();
 console.log(anotherNum);

let str = 'test';
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());



let twelve = "12.2px";

//console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve)); */

/*----------------------------------------------*/
/* function first() {
    setTimeout( function() {
        console.log(1);
    }, 500 );
}

function second() {
    console.log(2);
}

first();
second();


function learnJs(lang, callback) {
    console.log('Я учу ' + lang);
    callback();
}

function done() {
    console.log('Я прошел 3-ий урок!');
}

learnJs('JavaScript', done);


let options = {
    width: 1024,
    height: 720,
    name: 'Daniil'
};
console.log(options.name);
options.bool = true;
options.colors = {
    border: 'black',
    background: 'red'
};
delete options.bool;

console.log(options); */
/*-------------------------------------------------------------*/

/* for(let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);

let arr = ['first',2,3,'four',5];

arr.forEach(function(item, i, mass){
    console.log(i+ ' : ' + item + ' (массив : ' + mass + ')');
});

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */
/* console.log(arr);

let massiv = [1,3,4,6,7];
for(let key of massiv) {
    console.log(key);
} */ 

/* let answer = prompt('','');
let arr = [];

arr = answer.split(';');

console.log(arr); */

/* let arr = ['a','r','g','h','u','t'];
let i = arr.join('; ');

console.log(i); */

/* let arr = [1,15,4];
let i = arr.sort(compairNum);


function compairNum(a,b) {
    return a-b;
}
console.log(i); */

let solider = {
    hp:400,
    armor: 100,
};

let john = {
    hp: 100,
};

john.__proto__ = solider;
console.log(john);
console.log(john.armor);