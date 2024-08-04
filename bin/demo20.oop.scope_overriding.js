/**
 * * Overriding methods
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
// define abstract class
var Card = /** @class */ (function () {
    function Card(name, value) {
        this._name = 'no-name'; // default public attribute
        this._value = 0;
        if (name !== undefined) {
            this._name = name;
        }
        if (value !== undefined) {
            this._value = value;
        }
    }
    Object.defineProperty(Card.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value !== undefined) {
                this._name = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (value !== undefined) {
                this._value = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Card.prototype.Show = function () {
        console.log(this);
    };
    return Card;
}());
// define child-class VIPCard and NormalCard
var NormalCard = /** @class */ (function (_super) {
    __extends(NormalCard, _super);
    function NormalCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalCard.prototype.Cal = function () {
        return this._value * 2;
    };
    return NormalCard;
}(Card));
var normal_card = new NormalCard();
normal_card.value = 100;
normal_card.Show();
console.log(normal_card.Cal());
var VIPCard = /** @class */ (function (_super) {
    __extends(VIPCard, _super);
    function VIPCard(name, value, level) {
        var _this = _super.call(this, name, value) || this;
        _this._level = 1;
        if (level !== undefined) {
            _this._level = level;
        }
        return _this;
    }
    Object.defineProperty(VIPCard.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            if (value !== undefined) {
                this._level = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    VIPCard.prototype.Cal = function () {
        return this._value * this._level;
    };
    VIPCard.prototype.Show = function () {
        console.log(this, ' - ', this.Cal());
    };
    return VIPCard;
}(Card));
var vip_card = new VIPCard('Diamond', 100, 5);
vip_card.Show();
//# sourceMappingURL=demo20.oop.scope_overriding.js.map