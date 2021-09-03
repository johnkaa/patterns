/**
 * Снимок — это поведенческий паттерн проектирования,
 * который позволяет сохранять и восстанавливать прошлые состояния объектов,
 * не раскрывая подробностей их реализации.
 */
var Memento = /** @class */ (function () {
    function Memento(value) {
        this.value = value;
    }
    return Memento;
}());
var Originator = /** @class */ (function () {
    function Originator() {
    }
    Originator.prototype.save = function (val) {
        return new Memento(val);
    };
    Originator.prototype.restore = function (memento) {
        return memento.value;
    };
    return Originator;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker() {
        this.values = [];
    }
    Caretaker.prototype.addMemento = function (memento) {
        this.values.push(memento);
    };
    Caretaker.prototype.getMemento = function (index) {
        return this.values[index];
    };
    return Caretaker;
}());
var careTaker = new Caretaker();
var originator = new Originator();
careTaker.addMemento(originator.save('hello'));
careTaker.addMemento(originator.save('hello world'));
careTaker.addMemento(originator.save('hello world!1'));
console.log(originator.restore(careTaker.getMemento(1)));
// console.log(creator.restore(careTaker.getMemento(1)))
