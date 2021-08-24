class Iphone {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
    model: string
    price: number
}

class IphoneFactory {
    create(type) {
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