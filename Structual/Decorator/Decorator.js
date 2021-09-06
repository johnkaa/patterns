/**
 * Декоратор — это структурный паттерн проектирования,
 * который позволяет динамически добавлять объектам новую функциональность,
 * оборачивая их в полезные «обёртки».
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
var Car = /** @class */ (function () {
    function Car() {
        this.price = 10000;
        this.model = 'Car';
    }
    Car.prototype.getPrice = function () {
        return this.price;
    };
    Car.prototype.getDescription = function () {
        return this.model;
    };
    return Car;
}());
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla() {
        var _this = _super.call(this) || this;
        _this.price = 25000;
        _this.model = 'Tesla';
        return _this;
    }
    return Tesla;
}(Car));
var Autopilot = /** @class */ (function () {
    function Autopilot(car) {
        this.car = car;
    }
    Autopilot.prototype.getPrice = function () {
        return this.car.getPrice() + 5000;
    };
    Autopilot.prototype.getDescription = function () {
        return this.car.getDescription() + " with autopilot";
    };
    return Autopilot;
}());
var Parktronic = /** @class */ (function () {
    function Parktronic(car) {
        this.car = car;
    }
    Parktronic.prototype.getPrice = function () {
        return this.car.getPrice() + 3000;
    };
    Parktronic.prototype.getDescription = function () {
        return this.car.getDescription() + " with parktronic";
    };
    return Parktronic;
}());
// tesla with autopilot and parktronic
var teslaA = new Tesla();
// @ts-ignore
teslaA = new Autopilot(teslaA);
// @ts-ignore
teslaA = new Parktronic(teslaA);
console.log(teslaA.getPrice(), teslaA.getDescription());
// tesla with autopilot
var teslaB = new Tesla();
// @ts-ignore
teslaB = new Autopilot(teslaB);
console.log(teslaB.getPrice(), teslaB.getDescription());
