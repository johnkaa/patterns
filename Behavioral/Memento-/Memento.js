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
var creator = {
    save: function (val) { return new Memento(val); },
    restore: function (memento) { return memento.value; }
};
