var Car = /** @class */ (function () {
    function Car(brand, price, autopilot) {
        this.brand = brand;
        this.price = price;
        this.autopilot = autopilot;
    }
    Car.prototype.clone = function () {
        return new Car(this.brand, this.price, this.autopilot);
    };
    return Car;
}());
var prototypeCar = new Car('Mercedes', '30000', false);
var car1 = prototypeCar.clone();
var car2 = prototypeCar.clone();
console.log(car1);
console.log(car2);
