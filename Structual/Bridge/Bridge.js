/**
 * Мост — это структурный паттерн проектирования,
 * который разделяет один или несколько классов на две отдельные иерархии — абстракцию и реализацию,
 * позволяя изменять их независимо друг от друга.
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
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
var Color = /** @class */ (function () {
    function Color(color) {
        this.color = color;
    }
    Color.prototype.get = function () {
        return this.color;
    };
    return Color;
}());
var Black = /** @class */ (function (_super) {
    __extends(Black, _super);
    function Black() {
        return _super.call(this, 'black') || this;
    }
    return Black;
}(Color));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange() {
        return _super.call(this, 'orange') || this;
    }
    return Orange;
}(Color));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(color) {
        return _super.call(this, color) || this;
    }
    Triangle.prototype.paint = function () {
        return "Shape: Triangle, Color: " + this.color.get();
    };
    return Triangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color) {
        return _super.call(this, color) || this;
    }
    Circle.prototype.paint = function () {
        return "Shape: Circle, Color: " + this.color.get();
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color) {
        return _super.call(this, color) || this;
    }
    Square.prototype.paint = function () {
        return "Shape: Square, Color: " + this.color.get();
    };
    return Square;
}(Shape));
var orangeCircle = new Circle(new Orange());
console.log(orangeCircle.paint());
