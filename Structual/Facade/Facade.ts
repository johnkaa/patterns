/**
 * Фасад — это структурный паттерн проектирования,
 * который предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку.
 */

class FactoryPC {
    getGraphicCard(): void { console.log('get graphic card') }
    setGraphicCard(): void { console.log('set graphic card') }
    setPowerSupply(): void { console.log('set power supply') }
    setRAM(): void { console.log('set RAM') }
    getCPU(): void { console.log('get CPU') }
    setCPU(): void { console.log('set CPU') }
}

class Facade {
    private pc: FactoryPC
    constructor(pc) {
        this.pc = pc
    }

    buildPC(): void {
        this.pc.setGraphicCard()
        this.pc.setPowerSupply()
        this.pc.setRAM()
        this.pc.setCPU()
    }
    changeCPU(): void {
        this.pc.getCPU()
        this.pc.setCPU()
    }
    changeGraphicCard(): void {
        this.pc.getGraphicCard()
        this.pc.setGraphicCard()
    }
}

const factory: Facade = new Facade(new FactoryPC())

console.log('*** Build PC ***')
let pc = factory.buildPC()
console.log('*** Change CPU ***')
pc = factory.changeCPU()
