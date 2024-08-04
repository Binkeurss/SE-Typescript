/**
 * * class heritage
 */
// define class implement interface
var Circle = /** @class */ (function () {
    function Circle(name) {
        this._name = 'no-name'; // re-define properties
        if (name !== undefined) {
            this._name = name;
        }
    }
    Circle.prototype.draw = function (size) {
        console.log("Circle is drawing with the name ".concat(this._name, " and size ").concat(size));
    };
    return Circle;
}());
var cir = new Circle('The Ring');
cir.draw(100);
//# sourceMappingURL=demo19.oop.heritage.js.map