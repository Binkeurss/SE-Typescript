/**
 * * class
 */
//? define class without constructor
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
console.log(person);
person.name = 'Binkeurs';
console.log(person);
console.log('---------readonly------------');
//? readonly
var School = /** @class */ (function () {
    // only use constructor to initial assign value to readonly property
    function School(name) {
        this.name = 'UIT';
        if (name !== undefined) {
            this.name = name;
        }
    }
    School.prototype.err = function () {
        console.log('Cannot access readonly property Name');
    };
    return School;
}());
var sc_1 = new School();
console.log(sc_1);
var sc_2 = new School('MIT');
console.log(sc_2);
console.log('---------constructor------------');
var Point2D = /** @class */ (function () {
    //normal constructor
    function Point2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Point2D;
}());
var p_1 = new Point2D();
console.log(p_1);
var p_2 = new Point2D(3, 4);
console.log(p_2);
//# sourceMappingURL=demo17.oop.class.js.map