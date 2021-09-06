/**
 * Декоратор — это структурный паттерн проектирования,
 * который позволяет динамически добавлять объектам новую функциональность,
 * оборачивая их в полезные «обёртки».
 */

class Car {
    price: number
    model: string
    constructor() {
        this.price = 10000
        this.model = 'Car'
    }

    getPrice(): number {
        return this.price
    }
    getDescription(): string {
        return this.model
    }
}

class Tesla extends Car {
    constructor() {
        super()
        this.price = 25000
        this.model = 'Tesla'
    }
}

class Autopilot {
    private car: Car
    constructor(car) {
        this.car = car
    }
    getPrice(): number {
        return this.car.getPrice() + 5000
    }
    getDescription(): string {
        return `${this.car.getDescription()} with autopilot`
    }
}

class Parktronic {
    private car: Car
    constructor(car) {
        this.car = car
    }
    getPrice(): number {
        return this.car.getPrice() + 3000
    }
    getDescription(): string {
        return `${this.car.getDescription()} with parktronic`
    }
}

// tesla with autopilot and parktronic

let teslaA: Car = new Tesla()
// @ts-ignore
teslaA = new Autopilot(teslaA)
// @ts-ignore
teslaA = new Parktronic(teslaA)

console.log(teslaA.getPrice(), teslaA.getDescription())

// tesla with autopilot

let teslaB: Car = new Tesla()
// @ts-ignore
teslaB = new Autopilot(teslaB)

console.log(teslaB.getPrice(), teslaB.getDescription())