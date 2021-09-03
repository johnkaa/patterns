/**
 * Команда — это поведенческий паттерн проектирования,
 * который превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов,
 * ставить запросы в очередь, логировать их, а также поддерживать отмену операций.
 */

class Driver {
    command: ICommand
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
    on(): void {
        this.state = true
    }
    off(): void {
        this.state = false
    }
}

interface ICommand {
    engine: Engine
    execute(): void
}

class OnEngineCommand implements ICommand{
    engine: Engine
    constructor(engine: Engine) {
        this.engine = engine
    }
    execute(): void {
        this.engine.on()
    }
}

class OffEngineCommand implements ICommand{
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

const onStartCommand = new OnEngineCommand(engine)
let driver = new Driver(onStartCommand)
driver.execute()
console.log(engine)