/**
 * * Union types
 */

const printObj = (obj : number | string) : void => {
  if (typeof obj === 'string') {
    console.log('To UpperCase obj: ', obj.toUpperCase());
  } else {
    console.log('printObj: ', obj);
  }
}

printObj(100);
printObj('Hello world!!!');

//? compare Array[string] with String

const getName = (name: Array<string> | string) : void => {
  if(Array.isArray(name)) {
    console.log(`Name is array string: ${name}`);
  } else {
    console.log(`Name is string: ${name}`);
  }
}

getName(['hello', 'World', 'Petter', 'Marry']);
getName('Binkeurs');