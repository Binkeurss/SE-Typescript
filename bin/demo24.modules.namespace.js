"use strict";
/**
 * * define namespace for package of modules
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLibs = void 0;
var MyLibs;
(function (MyLibs) {
    MyLibs.PI = 3.14;
    MyLibs.triple = function (value) { return value * 3; };
    var Fraction = /** @class */ (function () {
        function Fraction(num, dec) {
            this._num = 1;
            this._dec = 1;
            if (num !== undefined) {
                this._num = num;
            }
            if (dec !== undefined) {
                this._dec = dec;
            }
        }
        Object.defineProperty(Fraction.prototype, "num", {
            get: function () { return this._num; },
            set: function (value) {
                if (value !== undefined) {
                    this._num = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Fraction.prototype, "dec", {
            get: function () { return this._dec; },
            set: function (value) {
                if (value !== undefined) {
                    this._dec = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Fraction.prototype.toString = function () {
            return "(".concat(this._num, "/").concat(this._dec, ")");
        };
        return Fraction;
    }());
    MyLibs.Fraction = Fraction;
})(MyLibs || (exports.MyLibs = MyLibs = {}));
//# sourceMappingURL=demo24.modules.namespace.js.map