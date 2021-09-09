/**
 * Компоновщик — это структурный паттерн проектирования,
 * который позволяет сгруппировать множество объектов в древовидную структуру,
 * а затем работать с ней так, как будто это единичный объект.
 */

interface IGraphic {
    move(x: number, y: number): void
    draw(): void
}

class Dot implements IGraphic {
    x: number
    y: number
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    move(x: number, y: number): void {
        console.log(`move to x:${x} and y:${y}`)
    }
    draw(): void {
        console.log('drawing a dot...')
    }
}

class Circle extends Dot {
    radius: number
    constructor(x, y, radius) {
        super(x, y)
        this.radius = radius
    }
    draw(): void {
        console.log('drawing a circle....')
    }
}

class ComplexGraphic implements IGraphic {
    graphics: IGraphic[]
    add(graphic: IGraphic): void {
        this.graphics.push(graphic)
    }
    remove(graphic: IGraphic): void {
        if(this.graphics.indexOf(graphic) === -1) {
            this.graphics.splice(this.graphics.indexOf(graphic), 1);
        }
    }
    move(x: number, y: number): void {
        console.log(`move to x:${x} and y:${y}`)
    }
    draw(): void {
        console.log('drawing complex graphic...')
    }
    description(): void {
        console.log(`${this.graphics}`)
    }
}