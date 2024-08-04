/**
 * * Inherit in class
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(name) {
        this._name = 'no-name';
        if (name !== undefined) {
            this._name = name;
        }
    }
    Object.defineProperty(Animals.prototype, "name", {
        // define getter and setter for property _name
        get: function () { return this._name; },
        set: function (value) {
            if (value !== undefined) {
                this._name = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Animals;
}());
// Dog is inherit from Animals 
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        var _this = _super.call(this, name) || this;
        _this._color = 'no-color';
        if (color !== undefined) {
            _this._color = color;
        }
        return _this;
    }
    Object.defineProperty(Dog.prototype, "color", {
        get: function () { return this._color; },
        set: function (value) {
            if (value !== undefined) {
                this._color = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}(Animals));
var dog_1 = new Dog();
console.log(dog_1);
var dog_2 = new Dog('Corgi', 'Yellow White');
console.log(dog_2);
dog_2.name = 'Pug';
console.log(dog_2);
//# sourceMappingURL=demo18.oop.inherit.js.map