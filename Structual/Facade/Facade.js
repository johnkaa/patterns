/**
 * Фасад — это структурный паттерн проектирования,
 * который предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку.
 */
var FactoryPC = /** @class */ (function () {
    function FactoryPC() {
    }
    FactoryPC.prototype.getGraphicCard = function () { console.log('get graphic card'); };
    FactoryPC.prototype.setGraphicCard = function () { console.log('set graphic card'); };
    FactoryPC.prototype.setPowerSupply = function () { console.log('set power supply'); };
    FactoryPC.prototype.setRAM = function () { console.log('set RAM'); };
    FactoryPC.prototype.getCPU = function () { console.log('get CPU'); };
    FactoryPC.prototype.setCPU = function () { console.log('set CPU'); };
    return FactoryPC;
}());
var Facade = /** @class */ (function () {
    function Facade(pc) {
        this.pc = pc;
    }
    Facade.prototype.buildPC = function () {
        this.pc.setGraphicCard();
        this.pc.setPowerSupply();
        this.pc.setRAM();
        this.pc.setCPU();
    };
    Facade.prototype.changeCPU = function () {
        this.pc.getCPU();
        this.pc.setCPU();
    };
    Facade.prototype.changeGraphicCard = function () {
        this.pc.getGraphicCard();
        this.pc.setGraphicCard();
    };
    return Facade;
}());
var factory = new Facade(new FactoryPC());
console.log('*** Build PC ***');
var pc = factory.buildPC();
console.log('*** Change CPU ***');
pc = factory.changeCPU();
