/**
 * Null vs Underfine type to TS
 */

let a : undefined = undefined;
let b : null = null;

console.log('a: ', a, ' typeof ', typeof(a));
console.log('b: ', b, ' typeof ', typeof(b));

let c : unknown = a;
console.log('c: ', c, ' typeof ', typeof(c));

c = b;
console.log('c: ', c, ' typeof ', typeof(c));

//! cannot assign null or undefine value for number or string
// let d : number = null;  //-> error
// let e : string = undefined // -> error