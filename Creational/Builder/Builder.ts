/**
 * Строитель — это порождающий паттерн проектирования,
 * который позволяет создавать сложные объекты пошагово. Строитель даёт возможность
 * использовать один и тот же код строительства для получения разных представлений объектов.
 */

interface IBuilder {
    addAutoPilot(autoPilot): void
    addSignaling(signaling): void
    build(): Car
}

class CarBuilder implements IBuilder {
    constructor() {
        this.car = new Car()
    }
    car: Car
    addAutoPilot(autoPilot: boolean): void {
        this.car.autoPilot = autoPilot
    }
    addSignaling(signaling: boolean): void {
        this.car.signaling = signaling
    }
    build(): Car {
        return this.car
    }
}

class Director {
    private builder: CarBuilder

    buildMinimalViableProduct(): void {
        this.builder.build()
    }

    buildFullFeaturedProduct(): void {
        this.builder.addAutoPilot(true)
        this.builder.addSignaling(true)
        this.builder.build()
    }
}

class Car {
    constructor() {
        this.autoPilot = false
        this.signaling = false
    }
    autoPilot: boolean
    signaling: boolean
}
