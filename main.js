'use strict';
/* const answer = [];
answer[0] = prompt('Как ваше Имя?', '');
answer[1] = prompt('Как ваша Фамилия', '');
answer[2] = prompt('Сколько вам лет?', '');

document.write(answer); */

/* const category = '';

console.log(`https://someurl.com/${category}/5`);

const user = 'Daniil';

console.log(`Hello, ${user}`); */










/* let num = 50;
while(num < 55) {
    console.log(num);
    num++;
}


do {
     console.log(num);
     num++;
}
while(num < 55);


for(let i = 1; i < 10; i++) {
    if(i === 6) {
        //break;
        continue;
    }

    console.log(i);

} */






let num = 20;// глобальная переменная
function showNewMessage(text) {
    console.log(text);
    let num = 20; //локальная переменная
    num = 10; //Меняем глобальную переменную
}


showNewMessage('Hello World');
console.log(num);


/* function calc(a, b) {
    return (a +  b);
}

console.log(calc(4,3)); */


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('Hellow!');
};

logger();


const calc =(a, b) =>{
    console.log('1');
    return a + b;
};