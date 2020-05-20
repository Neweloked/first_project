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


let num = 50;
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
        /* break; */// останавливает цикл
        continue;// пропускает 6 и продолжает дальше
    }

    console.log(i);

}