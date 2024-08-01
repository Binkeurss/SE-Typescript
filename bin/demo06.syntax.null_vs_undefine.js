/**
 * Null vs Underfine type to TS
 */
var a = undefined;
var b = null;
console.log('a: ', a, ' typeof ', typeof (a));
console.log('b: ', b, ' typeof ', typeof (b));
var c = a;
console.log('c: ', c, ' typeof ', typeof (c));
c = b;
console.log('c: ', c, ' typeof ', typeof (c));
//! cannot assign null or undefine value for number or string
// let d : number = null;  //-> error
// let e : string = undefined // -> error
//# sourceMappingURL=demo06.syntax.null_vs_undefine.js.map