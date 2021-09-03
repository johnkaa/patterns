/**
 * Снимок — это поведенческий паттерн проектирования,
 * который позволяет сохранять и восстанавливать прошлые состояния объектов,
 * не раскрывая подробностей их реализации.
 */

interface IMemento {
    value: string
}

class Memento implements IMemento{
    value: string
    constructor(value) {
        this.value = value
    }
}

class Originator {
    value: string
    save(val: string): Memento {
        return new Memento(val)
    }
    restore(memento: Memento): string {
        return memento.value
    }
}

class Caretaker {
    values: string[]
    constructor() {
        this.values = []
    }

    addMemento(memento): void {
        this.values.push(memento)
    }
    getMemento(index: number): any {
        return this.values[index]
    }
}

const careTaker: Caretaker = new Caretaker()
const originator: Originator = new Originator()

careTaker.addMemento(originator.save('hello'))
careTaker.addMemento(originator.save('hello world'))
careTaker.addMemento(originator.save('hello world!1'))

console.log(originator.restore(careTaker.getMemento(1)))