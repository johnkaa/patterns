/**
 * Мост — это структурный паттерн проектирования,
 * который разделяет один или несколько классов на две отдельные иерархии — абстракцию и реализацию,
 * позволяя изменять их независимо друг от друга.
 */

class Shape {
    color: Color
    constructor(color) {
        this.color = color
    }
}

class Color {
    color: string
    constructor(color) {
        this.color = color
    }
    get(): string {
        return this.color
    }
}

class Black extends Color {
    constructor() {
        super('black')
    }
}

class Orange extends Color {
    constructor() {
        super('orange')
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
    paint(): string {
        return `Shape: Triangle, Color: ${this.color.get()}`
    }
}
class Circle extends Shape {
    constructor(color) {
        super(color)
    }
    paint(): string {
        return `Shape: Circle, Color: ${this.color.get()}`
    }
}
class Square extends Shape {
    constructor(color) {
        super(color)
    }
    paint(): string {
        return `Shape: Square, Color: ${this.color.get()}`
    }
}

const orangeCircle = new Circle(new Orange())

console.log(orangeCircle.paint());