let a = 19;
// >= <= == !=
// if (a == 9) {
// //true
// console.log('Yes');
// }
// else {
// console.log('else');
// }
const button = document.querySelector('button');// элемент не будет изменяться
const input = document.querySelector('.age');
// если функция анонимная(нет имени) и используется один раз в коде, то можно сократить запись button.onclick = function () {} на см дальше
// () => стрелочная функция
button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('welcome!!!');
    }
    else if (num > 60) {
        console.log('ты точно сюда?');
    }
    else {
        console.log('ты не пройдешь!');
    }
    switch (num) {
        case 15:
            console.log('Еще год потерпи');
            break;
        case 16:
            console.log('Ура можно!');
            break;
        default:
            console.log(' okkkk')
    }
}
let b = 7;
console.log(b == 3 || b == 7);