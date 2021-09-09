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

class CPUAdapter extends OldCPU {
    private cpu: NewCPU
    constructor(cpu) {
        super()
        this.cpu = cpu
    }
    simpleInterface(): void {
        this.cpu.newInterface()
    }
}

const newCPUAdapter: CPUAdapter = new CPUAdapter(new NewCPU())

newCPUAdapter.simpleInterface()

