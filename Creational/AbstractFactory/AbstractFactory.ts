/**
 * Абстрактная фабрика — это порождающий паттерн проектирования,
 * который позволяет создавать семейства связанных объектов,
 * не привязываясь к конкретным классам создаваемых объектов.
 */

interface IFactory {
    createDoors(): IDoors
    createWindows(): IWindows
}

class IronFactory implements IFactory {
    createDoors(): IDoors {
        return new IronDoors()
    }
    createWindows(): IWindows {
        return new IronWindows()
    }
}

class WoodenFactory implements IFactory {
    createDoors(): IDoors {
        return new WoodenDoors()
    }
    createWindows(): IWindows {
        return new WoodenWindows()
    }
}

interface IDoors {
    open(): string
    close(): string
}

class IronDoors implements IDoors {
    open() {
        return 'open'
    }
    close() {
        return 'close'
    }
}
class WoodenDoors implements IDoors {
    open() {
        return 'open'
    }
    close() {
        return 'close'
    }
}

interface IWindows {
    open(): string
    close(): string
}

class IronWindows implements IWindows {
    open() {
        return 'open'
    }
    close() {
        return 'close'
    }
}
class WoodenWindows implements IWindows {
    open() {
        return 'open'
    }
    close() {
        return 'close'
    }
}