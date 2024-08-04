/**
 * * composing type
 */
// Union Types
// Intersection Types
console.log('--------Union Types-----------------');
var first_flag = true;
console.log("Flag: ".concat(first_flag, " - type: ").concat(typeof first_flag));
first_flag = false;
console.log("Flag: ".concat(first_flag, " - type: ").concat(typeof first_flag));
// first_flag = 'hello'       -> error
var first_opt = 2;
console.log("Option: ".concat(first_opt, " - type: ").concat(typeof first_flag));
var getLength = function (obj) { return obj.length; };
console.log('getLength_string: ', getLength('Hello world'));
console.log('getLength_string[]: ', getLength(['hello world', 'Petter', 'Mary and Tom']));
console.log('--------Intersection Types----------');
var person = {
    name: "John",
    id: 101
};
console.log('Intersection Type: ', person);
console.log('-------------------------');
var arr_num = [1, 2, 3];
console.log('NumArray: ', arr_num);
console.log('-------------------------');
var logMyPoint = function (p) { return console.log(p); };
var point = { x: 100, y: 100 };
console.log(point);
var SuperPoint = /** @class */ (function () {
    function SuperPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return SuperPoint;
}());
var newPoint = new SuperPoint(45, 88);
logMyPoint(newPoint);
//# sourceMappingURL=demo16.oop.composing_type.js.map