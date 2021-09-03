/**
 * Команда — это поведенческий паттерн проектирования,
 * который превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов,
 * ставить запросы в очередь, логировать их, а также поддерживать отмену операций.
 */

class Driver {
    command: any
    constructor(command) {
        this.command = command
    }
    execute(): void {
        this.command.execute()
    }
}

class Engine {
    state: boolean
    constructor() {
        this.state = false
    }
    on() {
        this.state = true
    }
    off() {
        this.state = false
    }
}

class OnStartCommand {
    engine: Engine
    constructor(engine: Engine) {
        this.engine = engine
    }
    execute(): void {
        this.engine.on()
    }
}

class OffStartCommand {
    engine: Engine
    constructor(engine: Engine) {
        this.engine = engine
    }
    execute(): void {
        this.engine.off()
    }
}

const engine = new Engine()
console.log(engine)

const onStartCommand = new OnStartCommand(engine)
let driver = new Driver(onStartCommand)
driver.execute()
console.log(engine)
