/**
 * Одиночка — это порождающий паттерн проектирования, который гарантирует,
 * что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.
 */
var Counter = /** @class */ (function () {
    function Counter() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this;
    }
    Counter.prototype.getCount = function () {
        return this.count;
    };
    Counter.prototype.increaseCount = function () {
        return this.count++;
    };
    return Counter;
}());
var myCount1 = new Counter();
var myCount2 = new Counter();
myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();
console.log(myCount1.getCount());
console.log(myCount2.getCount());
