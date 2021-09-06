/**
 * Адаптер — это структурный паттерн проектирования,
 * который позволяет объектам с несовместимыми интерфейсами работать вместе.
 */

class OldCPU {
    simpleInterface(): void {
        console.log('Old CPU')
    }
}

class NewCPU {
    newInterface(): void {
        console.log('New CPU')
    }
}

class CPUAdapter {
    constructor(cpu) {
        this.cpu = cpu
    }
    cpu: NewCPU
    simpleInterface(): void {
        this.cpu.newInterface()
    }
}

class Computer {
    startComputer(cpu): void {
        cpu.simpleInterface()
    }
}

const myComputer: Computer = new Computer()
const newCPUAdapter: CPUAdapter = new CPUAdapter(new NewCPU())

myComputer.startComputer(newCPUAdapter)

