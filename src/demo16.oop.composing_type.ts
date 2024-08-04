/**
 * * composing type
 */

// Union Types - Type Aliases
// Intersection Types

console.log('-----Union Types - Type Aliases-----');
//? unions type

type Flag = true | false; // Type Aliases
type Option = 1 | 2 | 3; // Type Aliases

let first_flag: Flag = true;
console.log(`Flag: ${first_flag} - type: ${typeof first_flag}`);

first_flag = false;
console.log(`Flag: ${first_flag} - type: ${typeof first_flag}`);

// first_flag = 'hello'       -> error

let first_opt: Option = 2;
console.log(`Option: ${first_opt} - type: ${typeof first_flag}`);

const getLength = (obj : string | string[]) => obj.length;

console.log('getLength_string: ', getLength('Hello world'))
console.log('getLength_string[]: ', getLength(['hello world', 'Petter', 'Mary and Tom']))

console.log('--------Intersection Types----------');
// Intersection Type
interface Nameable {
  name: string;
}

interface Identifiable {
  id: number;
}

type Person_Intersection = Nameable & Identifiable;

const person : Person_Intersection = {
  name: "John",
  id: 101
};

console.log('Intersection Type: ', person);

console.log('-------------------------');
//? Generics: Tổng quát hóa
type NumArray = Array<number>;
const arr_num : NumArray = [1, 2, 3];
console.log('NumArray: ', arr_num);

console.log('-------------------------')
//? structural type system
interface MyPoint {
  x : number
  y : number
}

const logMyPoint = (p : MyPoint) => console.log(p);

const point = {x: 100, y: 100};
console.log(point);

class SuperPoint {
  x : number
  y : number

  constructor(x : number, y : number) {
    this.x = x;
    this.y = y;
  }
}

const newPoint = new SuperPoint(45, 88);
logMyPoint(newPoint);
