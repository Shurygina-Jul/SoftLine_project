const moment = require('moment');//запись через переменные
console.log(moment().format('DD.MM.YYYY HH:mm:ss'));

var z = typeof z == 'undefined';//задание из теста
console.log(z);

{let age = 17;
let restricted = age < 18 ? 'yes' : 'no';}
//Out.log(restricted);

// код функции task(x), 
//который использует тернарный оператор для того, 
//чтобы выдать ответ в виде строки, 
//является ли предложенное значение значением 
//null (выдаёт 'null'), либо undefined (выдаёт 'undefined'),
 //либо NaN (выдаёт 'not a number'). В остальных случаях должно 
 //возвращаться значение 'Other'. Например, для значения '#' 
 //должно выдаваться 'Other'.

function task (x) {
  return x === null ? 'null' : x === undefined ? 'undefined' : Number.isNaN(x) ? 'not a number' : 'Other';
}
