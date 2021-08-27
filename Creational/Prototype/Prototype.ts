/**
 * Прототип — это порождающий паттерн проектирования,
 * который позволяет копировать объекты, не вдаваясь в подробности их реализации.
 */

interface IClone {
    clone(): Car
}

class Car implements IClone {
    constructor(brand, price, autopilot) {
        this.brand = brand
        this.price = price
        this.autopilot = autopilot
    }
    brand: string
    price: number
    autopilot: boolean

    clone(): Car {
        return new Car(this.brand, this.price, this.autopilot)
    }
}

const prototypeCar = new Car('Mercedes', '30000', false)

const car1 = prototypeCar.clone()
const car2 = prototypeCar.clone()

console.log(car1)
console.log(car2)