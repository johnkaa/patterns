var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.car = new Car();
    }
    CarBuilder.prototype.addAutoPilot = function (autoPilot) {
        this.car.autoPilot = autoPilot;
    };
    CarBuilder.prototype.addSignaling = function (signaling) {
        this.car.signaling = signaling;
    };
    CarBuilder.prototype.build = function () {
        return this.car;
    };
    return CarBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.buildMinimalViableProduct = function () {
        this.builder.build();
    };
    Director.prototype.buildFullFeaturedProduct = function () {
        this.builder.addAutoPilot(true);
        this.builder.addSignaling(true);
        this.builder.build();
    };
    return Director;
}());
var Car = /** @class */ (function () {
    function Car() {
        this.autoPilot = false;
        this.signaling = false;
    }
    return Car;
}());
