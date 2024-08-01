/**
 * any types is unknown the type of object
 * any is new type of object in ES
 */
var number = 1;
console.log('number: ', number, ' typeof: ', typeof (number));
number = 'hello world!!!';
console.log('number: ', number, ' typeof: ', typeof (number));
var s = number;
console.log(s, typeof (s));
number = 111;
s = number.toString();
console.log(s, typeof (s));
s = number;
console.log(s, typeof (s));
//# sourceMappingURL=demo04.syntax.any_types.js.map