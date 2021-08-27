/**
 * Фабричный метод — это порождающий паттерн проектирования, который определяет
 * общий интерфейс для создания объектов в суперклассе,
 * позволяя подклассам изменять тип создаваемых объектов.
 */
var Iphone = /** @class */ (function () {
    function Iphone(model, price) {
        this.model = model;
        this.price = price;
    }
    return Iphone;
}());
var IphoneFactory = /** @class */ (function () {
    function IphoneFactory() {
    }
    IphoneFactory.prototype.create = function (type) {
        if (type === 'X')
            return new Iphone(type, 500);
        if (type === 11)
            return new Iphone(type, 750);
        if (type === 12)
            return new Iphone(type, 1000);
    };
    return IphoneFactory;
}());
var factory = new IphoneFactory();
var IphoneX = factory.create('X');
var Iphone11 = factory.create(11);
var Iphone12 = factory.create(12);
console.log(IphoneX);
console.log(Iphone11);
console.log(Iphone12);
