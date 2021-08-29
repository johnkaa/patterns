/**
 * Строитель — это порождающий паттерн проектирования,
 * который позволяет создавать сложные объекты пошагово. Строитель даёт возможность
 * использовать один и тот же код строительства для получения разных представлений объектов.
 */
var HumanBuilder = /** @class */ (function () {
    function HumanBuilder() {
        this.reset();
    }
    HumanBuilder.prototype.reset = function () {
        this.product = new Human();
    };
    HumanBuilder.prototype.createBody = function () {
        this.product.parts.push('Body');
    };
    HumanBuilder.prototype.createBrain = function () {
        this.product.parts.push('Brain');
    };
    HumanBuilder.prototype.createHearth = function () {
        this.product.parts.push('Hearth');
    };
    HumanBuilder.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return HumanBuilder;
}());
var Human = /** @class */ (function () {
    function Human() {
        this.parts = [];
    }
    Human.prototype.listParts = function () {
        console.log("Human parts: " + this.parts.join(', ') + "\n");
    };
    return Human;
}());
var builder = new HumanBuilder();
console.log('Custom product:');
builder.createBody();
builder.createHearth();
builder.createBrain();
builder.getProduct().listParts();
console.log('Custom product2:');
builder.createBody();
builder.createBrain();
builder.getProduct().listParts();
