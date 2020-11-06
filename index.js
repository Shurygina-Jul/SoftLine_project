// eslint-disable-next-line no-var
var z = typeof z === 'undefined';// задание из теста
console.log(z);
{ const age = 17;
  const restricted = age < 18 ? 'yes' : 'no'; }
function task(x) {
  return x.toUpperCase();
}
console.log(task('sum'));
// Out.log(restricted);
// код функции task(x),
// который использует тернарный оператор для того,
// чтобы выдать ответ в виде строки,
// является ли предложенное значение значением
// null (выдаёт 'null'), либо undefined (выдаёт 'undefined'),
// либо NaN (выдаёт 'not a number'). В остальных случаях должно
// возвращаться значение 'Other'. Например, для значения '#'
// должно выдаваться 'Other'.
const moment = require('moment');

const mom = function (f, time) { // f-функция
  const r = time ? ' HH:mm:ss' : '';
  const result = moment().format(`DD.MM.YYYY${r}`);
  return f(result);
};
console.log(mom((x) => `<${x}>`, true));
console.log(mom((x) => x));


