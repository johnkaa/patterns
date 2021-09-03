/**
 * Снимок — это поведенческий паттерн проектирования,
 * который позволяет сохранять и восстанавливать прошлые состояния объектов,
 * не раскрывая подробностей их реализации.
 */

class Memento {
    value
    constructor(value) {
        this.value = value
    }
}

const creator = {
    save: val => new Memento(val),
    restore: memento => memento.value
}