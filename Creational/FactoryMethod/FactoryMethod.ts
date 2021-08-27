/**
 * Фабричный метод — это порождающий паттерн проектирования, который определяет
 * общий интерфейс для создания объектов в суперклассе,
 * позволяя подклассам изменять тип создаваемых объектов.
 */

class Iphone {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
    model: string
    price: number
}
// commit

class IphoneFactory {
    create(type): Iphone {
        if(type === 'X') return new Iphone(type, 500)
        if(type === '11') return new Iphone(type, 750)
        if(type === '12') return new Iphone(type, 1000)
    }
}

const factory = new IphoneFactory()

const IphoneX = factory.create('X')
const Iphone11 = factory.create('11')
const Iphone12 = factory.create('12')

console.log(IphoneX)
console.log(Iphone11)
console.log(Iphone12)