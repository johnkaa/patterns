/**
 * Состояние — это поведенческий паттерн проектирования,
 * который позволяет объектам менять поведение в зависимости от своего состояния.
 * Извне создаётся впечатление, что изменился класс объекта.
 */

abstract class State {
    protected constructor(name, nextStatus) {
        this.name = name
        this.nextStatus = nextStatus
    }
    name: string
    nextStatus: any
    next(): State {
        return new this.nextStatus()
    }
}

class Draft extends State {
    constructor() {
        super('Draft', Moderation);
    }
}

class Moderation extends State {
    constructor() {
        super('Moderation', Published);
    }
}

class Published extends State {
    constructor() {
        super('Published', Published);
    }
}

class Doc {
    constructor() {
        this.state = new Draft()
    }
    state: State
    nextState(): any {
        this.state = this.state.next()
    }
}

const myDocument = new Doc()

console.log(myDocument.state.name)
myDocument.nextState()
console.log(myDocument.state.name)
myDocument.nextState()
console.log(myDocument.state.name)