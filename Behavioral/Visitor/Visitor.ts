/**
 * Посетитель — это поведенческий паттерн проектирования,
 * который позволяет добавлять в программу новые операции, не изменяя классы объектов,
 * над которыми эти операции могут выполняться.
 */

interface IVisitor {
    visitIphone(e: Iphone): void
    visitSamsung(e: Samsung): void
    visitHuawei(e: Huawei): void
}

class Visitor implements IVisitor {
    visitIphone(e: Iphone): void {
        console.log(`Exported data: ${e.info()}`)
    }
    visitSamsung(e: Samsung): void {
        console.log(`Exported data: ${e.info()}`)
    }
    visitHuawei(e: Huawei): void {
        console.log(`Exported data: ${e.info()}`)
    }
}

interface IPhones {
    accept(visitor: IVisitor): void
}

class Iphone implements IPhones {
    info(): string {
        return 'It is a Tesla!'
    }
    accept(visitor: IVisitor): void {
        visitor.visitIphone(this)
    }
}

class Samsung implements IPhones {
    info(): string {
        return 'It is a BMW!'
    }
    accept(visitor: IVisitor): void {
        visitor.visitSamsung(this)
    }
}

class Huawei implements IPhones {
    info(): string {
        return 'It is a Audi!'
    }
    accept(visitor: IVisitor): void {
        visitor.visitHuawei(this)
    }
}

const visitor = new Visitor()
visitor.visitIphone(new Iphone())
