/**
 * Type assertion
 */

let str_value : unknown = '4.2';
console.log(str_value, typeof(str_value));

// parseFloat: nhận đối số là một string
let value : number = parseFloat(str_value as string);
console.log(value, typeof(value));

let value_float : number = parseFloat('5');
console.log(value_float, typeof(value_float));