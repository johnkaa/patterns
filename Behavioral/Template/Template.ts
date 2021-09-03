/**
 * Шаблонный метод — это поведенческий паттерн проектирования,
 * который определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги на подклассы.
 * Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры.
 */

abstract class AI {
    protected type: string
    protected move(): void {
        this.collectResources()
        this.buildStructures()
        this.buildUnits()
        this.attack()
    }
    protected abstract collectResources(): void
    protected abstract buildStructures(): void
    protected buildUnits(): void {
        console.log(`${this.type}: build units`)
    }
    protected attack(): void {
        console.log(`${this.type}: attack`)
    }
}

class HumanAI extends AI {
    type = 'Human'
    buildStructures() {
        console.log(`${this.type}: build structures`)
    }
    collectResources() {
        console.log(`${this.type}: collect resources`)
    }
}

class MonsterAI extends AI {
    type = 'Monster'
    buildStructures() {
        console.log(`${this.type}: can't build structures`)
    }
    collectResources() {
        console.log(`${this.type}: can't collect resources`)
    }
}

const human: HumanAI = new HumanAI()
