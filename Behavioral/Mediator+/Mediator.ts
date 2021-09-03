/**
 * Посредник — это поведенческий паттерн проектирования,
 * который позволяет уменьшить связанность множества классов между собой,
 * благодаря перемещению этих связей в один класс-посредник.
 */

interface IMediator {
    notify(sender: object, event: string): void
}

class ConcreteMediator implements IMediator{
    private componentA: ComponentA
    private componentB: ComponentB

    constructor(c1: ComponentA, c2: ComponentB) {
        this.componentA = c1
        this.componentA.setMediator(this)
        this.componentB = c2
        this.componentB.setMediator(this)
    }

    notify(sender: object, event: string) {
        if(event === 'A') {
            console.log('Mediator doing A and next operation...')
            this.componentB.doC()
        }
        if(event === 'D') {
            console.log('Mediator doing D and next operation...')
            this.componentA.doB()
            this.componentB.doC()
        }
    }
}

class ComponentA {
    mediator: IMediator
    setMediator(mediator: IMediator): void {
        this.mediator = mediator
    }

    doA(): void {
        console.log('ComponentA does A')
        this.mediator.notify(this, 'A')
    }
    doB(): void {
        console.log('ComponentA does B')
        this.mediator.notify(this, 'B')
    }
}

class ComponentB {
    mediator: IMediator
    setMediator(mediator: IMediator): void {
        this.mediator = mediator
    }

    doC(): void {
        console.log('ComponentB does C')
        this.mediator.notify(this, 'C')
    }
    doD(): void {
        console.log('ComponentB does D')
        this.mediator.notify(this, 'D')
    }
}

const c1 = new ComponentA()
const c2 = new ComponentB()
const mediator = new ConcreteMediator(c1, c2)


c1.doA()
console.log('***************************************')
c2.doD()