/**
 * * Class vs Interface
 */
var us = {
    id: 1,
    name: 'Henry'
};
console.log("u = ".concat(us, " - type: ").concat(typeof us));
console.log(us);
//? define class
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    return Student;
}());
var st = new Student(1, "Tom");
console.log("st = ".concat(st, " - type: ").concat(typeof st));
console.log(st);
console.log('---------------------');
var Car = /** @class */ (function () {
    function Car(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
    return Car;
}());
var Animal = /** @class */ (function () {
    function Animal(id, name) {
        this.id = id;
        this.name = name;
    }
    return Animal;
}());
var car_1 = new Car(1, 'SUV', 'Red');
var car_2 = new Car(2, 'Sedan', 'Blue');
var animal = new Animal(3, 'Corgi');
console.log("Car_1: ".concat(car_1));
console.log('Car_2: ', car_2);
console.log('Animal: ', animal);
console.log('---------------------');
var SuperMan = /** @class */ (function () {
    function SuperMan(pid, name) {
        this.pid = pid;
        this.name = name;
    }
    return SuperMan;
}());
var mrPerson = { pid: 1008, name: 'Normal Human' };
console.log("Person = ".concat(mrPerson, " - type: ").concat(typeof mrPerson));
console.log(mrPerson);
var mrSuperMan = new SuperMan(1007, 'Spider Man');
console.log("SuperMan = ".concat(mrSuperMan, " - type: ").concat(typeof mrSuperMan));
console.log(mrSuperMan);
console.log('---------------------');
//test TH khác
var SuperMan_other = /** @class */ (function () {
    function SuperMan_other(pid, name, superPower) {
        this.pid = pid;
        this.name = name;
        this.superPower = superPower;
    }
    return SuperMan_other;
}());
var mrSuperMan_other = new SuperMan_other(1007, 'Spider Man', 'Web-Shooting');
console.log("mrSuperMan_other = ".concat(mrSuperMan_other, " - type: ").concat(typeof mrSuperMan_other));
console.log(mrSuperMan_other);
//# sourceMappingURL=demo15.oop.basic_class.js.map