/**
 * Цепочка обязанностей — это поведенческий паттерн проектирования,
 * который позволяет передавать запросы последовательно по цепочке обработчиков.
 * Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи.
 */

interface IHandler {
    setNext(handler: IHandler): IHandler
    handle(request: string): string
}

abstract class BaseHandler implements IHandler {
    private next: IHandler
    setNext(handler: IHandler): IHandler {
        this.next = handler
        return handler
    }
    handle(request: string): string {
        if(this.next) {
            return this.next.handle(request)
        }
        return null
    }
}

class Bot extends BaseHandler {
    handle(request: string): string {
        if(request === 'easy') {
            return `Bot: I'll help the user with ${request} task`
        }
        return super.handle(request)
    }
}
class JuniorSupport extends BaseHandler {
    handle(request: string): string {
        if(request === 'medium') {
            return `Junior Support: I'll help the user with ${request} task`
        }
        return super.handle(request)
    }
}
class SeniorSupport extends BaseHandler {
    handle(request: string): string {
        if(request === 'hard') {
            return `Senior Support: I'll help the user with ${request} task`
        }
        return super.handle(request)
    }
}

const bot = new Bot()
const junior = new JuniorSupport()
const senior = new SeniorSupport()

bot.setNext(junior).setNext(senior)

console.log(bot.handle('hard'));