/**
 * Одиночка — это порождающий паттерн проектирования, который гарантирует,
 * что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.
 */

class Counter {
    constructor() {
        if(typeof Counter.instance === 'object') {
            return Counter.instance
        }
        this.count = 0
        Counter.instance = this
        return this
    }

    private static instance: Counter
    private count: number

    getCount(): number {
        return this.count
    }
    increaseCount(): number {
        return this.count++
    }
}

const myCount1 = new Counter()
const myCount2 = new Counter()

myCount1.increaseCount()
myCount1.increaseCount()
myCount2.increaseCount()
myCount2.increaseCount()


console.log(myCount1.getCount())
console.log(myCount2.getCount())