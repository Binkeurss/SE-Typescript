/**
 * * Class vs Interface
 */

//? define interface
interface MyUser {
  id: number
  name: string
}

const us : MyUser = {
  id: 1,
  name: 'Henry'
}

console.log(`u = ${us} - type: ${typeof us}`);
console.log(us);

//? define class
class Student {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const st : Student = new Student(1, "Tom");
console.log(`st = ${st} - type: ${typeof st}`);
console.log(st);

console.log('---------------------');

//? define class implement from interface
interface Obj {
  id: number
  name: string
}

class Car implements Obj {
  id: number
  name: string
  color: string
  
  constructor(id: number, name: string, color: string) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

class Animal implements Obj {
  id: number
  name: string
  
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const car_1 : Car = new Car(1, 'SUV', 'Red');
const car_2 : Car = new Car(2, 'Sedan', 'Blue');
const animal : Animal = new Animal(3, 'Corgi');

console.log(`Car_1: ${car_1}`);
console.log('Car_2: ', car_2);
console.log('Animal: ', animal);

console.log('---------------------');

//? define object with interface but use pattern of object class
// TypeScript cho phép gán một đối tượng của một lớp cho một biến 
// có kiểu interface nếu lớp đó thực hiện hoặc tuân thủ cấu trúc của interface đó
interface Person {
  pid: number
  name: string
}

class SuperMan {
  pid: number
  name: string

  constructor(pid: number, name: string) {
    this.pid = pid;
    this.name = name;
  }
}

const mrPerson : Person = {pid: 1008, name: 'Normal Human'};
console.log(`Person = ${mrPerson} - type: ${typeof mrPerson}`);
console.log(mrPerson);

const mrSuperMan : Person = new SuperMan(1007, 'Spider Man');
console.log(`SuperMan = ${mrSuperMan} - type: ${typeof mrSuperMan}`);
console.log(mrSuperMan);

console.log('---------------------');

//test TH khác
class SuperMan_other {
  pid: number;
  name: string;
  superPower: string; // Thuộc tính bổ sung

  constructor(pid: number, name: string, superPower: string) {
    this.pid = pid;
    this.name = name;
    this.superPower = superPower;
  }
}
const mrSuperMan_other: Person = new SuperMan_other(1007, 'Spider Man', 'Web-Shooting');
console.log(`mrSuperMan_other = ${mrSuperMan_other} - type: ${typeof mrSuperMan_other}`);
console.log(mrSuperMan_other);