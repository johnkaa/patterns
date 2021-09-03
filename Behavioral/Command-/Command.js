/**
 * Команда — это поведенческий паттерн проектирования,
 * который превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов,
 * ставить запросы в очередь, логировать их, а также поддерживать отмену операций.
 */
var Driver = /** @class */ (function () {
    function Driver(command) {
        this.command = command;
    }
    Driver.prototype.execute = function () {
        this.command.execute();
    };
    return Driver;
}());
var Engine = /** @class */ (function () {
    function Engine() {
        this.state = false;
    }
    Engine.prototype.on = function () {
        this.state = true;
    };
    Engine.prototype.off = function () {
        this.state = false;
    };
    return Engine;
}());
var OnStartCommand = /** @class */ (function () {
    function OnStartCommand(engine) {
        this.engine = engine;
    }
    OnStartCommand.prototype.execute = function () {
        this.engine.on();
    };
    return OnStartCommand;
}());
var OffStartCommand = /** @class */ (function () {
    function OffStartCommand(engine) {
        this.engine = engine;
    }
    OffStartCommand.prototype.execute = function () {
        this.engine.off();
    };
    return OffStartCommand;
}());
var engine = new Engine();
console.log(engine);
var onStartCommand = new OnStartCommand(engine);
var driver = new Driver(onStartCommand);
driver.execute();
console.log(engine);
