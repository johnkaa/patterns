/**
 * Компоновщик — это структурный паттерн проектирования,
 * который позволяет сгруппировать множество объектов в древовидную структуру,
 * а затем работать с ней так, как будто это единичный объект.
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
var Dot = /** @class */ (function () {
    function Dot(x, y) {
        this.x = x;
        this.y = y;
    }
    Dot.prototype.move = function (x, y) {
        console.log("move to x:" + x + " and y:" + y);
    };
    Dot.prototype.draw = function () {
        console.log('drawing a dot...');
    };
    return Dot;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius) {
        var _this = _super.call(this, x, y) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.draw = function () {
        console.log('drawing a circle....');
    };
    return Circle;
}(Dot));
var ComplexGraphic = /** @class */ (function () {
    function ComplexGraphic() {
    }
    ComplexGraphic.prototype.add = function (graphic) {
        this.graphics.push(graphic);
    };
    ComplexGraphic.prototype.remove = function (graphic) {
        if (this.graphics.indexOf(graphic) === -1) {
            this.graphics.splice(this.graphics.indexOf(graphic), 1);
        }
    };
    ComplexGraphic.prototype.move = function (x, y) {
        console.log("move to x:" + x + " and y:" + y);
    };
    ComplexGraphic.prototype.draw = function () {
        console.log('drawing complex graphic...');
    };
    ComplexGraphic.prototype.description = function () {
        console.log("" + this.graphics);
    };
    return ComplexGraphic;
}());
