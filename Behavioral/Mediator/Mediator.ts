/**
 * Посредник — это поведенческий паттерн проектирования,
 * который позволяет уменьшить связанность множества классов между собой,
 * благодаря перемещению этих связей в один класс-посредник.
 */

interface IMediator {
    notify(sender: object, event: string): void
}

class ConcreteMediator implements IMediator {
    private component1: Component1
    private component2: Component2

    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1
        this.component1.setMediator(this)
        this.component2 = c2
        this.component2.setMediator(this)
    }

    notify(sender: object, event: string) {
        if(event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:')
            this.component2.doC()
        }
        if(event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:')
            this.component1.doB()
            this.component2.doC()
        }
    }
}

abstract class BaseComponent {
    protected mediator: IMediator

    constructor(mediator: IMediator = null) {
        this.mediator = mediator
    }

    setMediator(mediator: IMediator): void {
        this.mediator = mediator
    }
}

class Component1 extends BaseComponent {
    doA(): void {
        console.log('Component 1 does A')
        this.mediator.notify(this, 'A')
    }
    doB(): void {
        console.log('Component 1 does B')
        this.mediator.notify(this, 'B')
    }
}
class Component2 extends BaseComponent {
    doC(): void {
        console.log('Component 2 does C')
        this.mediator.notify(this, 'C')
    }
    doD(): void {
        console.log('Component 2 does D')
        this.mediator.notify(this, 'D')
    }
}

const c1 = new Component1()
const c2 = new Component2()
const mediator = new ConcreteMediator(c1, c2)

console.log('Client triggers operation A.');
c1.doA();

console.log('');
console.log('Client triggers operation D.');
c2.doD();