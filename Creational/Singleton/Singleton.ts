/**
 * Одиночка — это порождающий паттерн проектирования, который гарантирует,
 * что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.
 */

class Counter {
    private constructor() {
    }

    static getInstance(): Counter {
        if(!Counter.instance) {
            Counter.instance = new Counter()
        }
        return Counter.instance
    }

    private static instance: Counter
    private count: number = 0

    getCount(): number {
        return this.count
    }
    increaseCount(): number {
        return this.count++
    }
}
