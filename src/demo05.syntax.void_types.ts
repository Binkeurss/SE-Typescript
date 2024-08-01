/**
 * void - look like void in C/C++
 */

let val : void = undefined;
console.log('val: ', val, ' typeof: ', typeof(val));

// val = null // -> Error, because val is undefined

function sayHello() : void {
  console.log('Hello World!!!');
}

sayHello();

const sayHi = () : void => {
  console.log('Hi everybody!');
}

sayHi();