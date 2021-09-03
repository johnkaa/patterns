/**
 * Посетитель — это поведенческий паттерн проектирования,
 * который позволяет добавлять в программу новые операции, не изменяя классы объектов,
 * над которыми эти операции могут выполняться.
 */

abstract class Auto {
    accept(visitor): void {
        visitor(this)
    }
    export
}

class Tesla extends Auto {
    info(): string {
        return 'It is a Tesla!'
    }
}

class BMW extends Auto {
    info(): string {
        return 'It is a BMW!'
    }
}

class Audi extends Auto {
    info(): string {
        return 'It is a Audi!'
    }
}

function exportVisitor(auto): void {
    if(auto instanceof Tesla) {
        auto.export = console.log(`Exported data: ${auto.info()}`)
    }
    if(auto instanceof BMW) {
        auto.export = console.log(`Exported data: ${auto.info()}`)
    }
    if(auto instanceof Audi) {
        auto.export = console.log(`Exported data: ${auto.info()}`)
    }
}

const tesla = new Tesla()
exportVisitor(tesla)
