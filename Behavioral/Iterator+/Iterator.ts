/**
 * Итератор — это поведенческий паттерн проектирования,
 * который даёт возможность последовательно обходить элементы составных объектов,
 * не раскрывая их внутреннего представления.
 */

interface IIterator {
    index: number
    el: string[]
    next(): string
    hasNext(): boolean
}

class Iterator implements IIterator{
    index: number
    el: string[]
    constructor(el) {
        this.index = 0
        this.el = el
    }
    next(): string {
        return this.el[this.index++]
    }
    hasNext(): boolean {
        return this.index < this.el.length
    }
}

const collection = new Iterator(['1', '2', '3', '4', '5'])

while(collection.hasNext()) {
    console.log(collection.next())
}