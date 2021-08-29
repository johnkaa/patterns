/**
 * Строитель — это порождающий паттерн проектирования,
 * который позволяет создавать сложные объекты пошагово. Строитель даёт возможность
 * использовать один и тот же код строительства для получения разных представлений объектов.
 */

interface IBuilder {
    createBody(): void
    createBrain(): void
    createHearth(): void
}

class HumanBuilder implements IBuilder {
    private product: Human
    constructor() {
        this.reset()
    }
    reset(): void {
        this.product = new Human()
    }
    createBody(): void {
        this.product.parts.push('Body')
    }
    createBrain(): void {
        this.product.parts.push('Brain')
    }
    createHearth(): void {
        this.product.parts.push('Hearth')
    }
    getProduct(): Human {
        const result = this.product
        this.reset()
        return result
    }
}

class Human {
    parts: string[] = []

    listParts(): void {
        console.log(`Human parts: ${this.parts.join(', ')}\n`)
    }
}

const builder = new HumanBuilder()

console.log('Custom product:')
builder.createBody()
builder.createHearth()
builder.createBrain()
builder.getProduct().listParts()

console.log('Custom product2:')
builder.createBody()
builder.createBrain()
builder.getProduct().listParts()