/**
 * * define static member for class
 */
var MyShape = /** @class */ (function () {
    function MyShape() {
    }
    MyShape.print_color = function () {
        console.log(MyShape._color);
    };
    MyShape.$count = 0;
    // #properties are only access inside class
    MyShape._color = 'no-color';
    MyShape.num = 99;
    MyShape.print_count = function () { return console.log(MyShape.$count); };
    MyShape.print_num = function () {
        console.log(MyShape.num);
    };
    return MyShape;
}());
console.log(MyShape.num);
MyShape.num = 1000;
MyShape.print_count();
MyShape.print_color();
MyShape.print_num();
//# sourceMappingURL=demo22.oop.static.js.map