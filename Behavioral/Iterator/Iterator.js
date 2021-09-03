/**
 * Итератор — это поведенческий паттерн проектирования,
 * который даёт возможность последовательно обходить элементы составных объектов,
 * не раскрывая их внутреннего представления.
 */
var Iterator = /** @class */ (function () {
    function Iterator(el) {
        this.index = 0;
        this.el = el;
    }
    Iterator.prototype.next = function () {
        return this.el[this.index++];
    };
    Iterator.prototype.hasNext = function () {
        return this.index < this.el.length;
    };
    return Iterator;
}());
var collection = new Iterator(['1', '2', '3', '4', '5']);
while (collection.hasNext()) {
    console.log(collection.next());
}
