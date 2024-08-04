"use strict";
/**
 * * define module with name Libs
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = exports.double = exports.PI = void 0;
exports.default = sayHello;
function sayHello() {
    console.log('Hello World');
}
exports.PI = 3.14;
var double = function (value) { return value * 2; };
exports.double = double;
var Shape = /** @class */ (function () {
    function Shape(color) {
        this._color = 'no-color';
        if (color !== undefined) {
            this._color = color;
        }
    }
    Object.defineProperty(Shape.prototype, "color", {
        get: function () { return this._color; },
        set: function (value) {
            if (value !== undefined) {
                this._color = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
exports.Shape = Shape;
//# sourceMappingURL=demo23.modules.libs.js.map