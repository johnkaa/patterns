/**
 * Адаптер — это структурный паттерн проектирования,
 * который позволяет объектам с несовместимыми интерфейсами работать вместе.
 */
var OldCPU = /** @class */ (function () {
    function OldCPU() {
    }
    OldCPU.prototype.simpleInterface = function () {
        console.log('Old CPU');
    };
    return OldCPU;
}());
var NewCPU = /** @class */ (function () {
    function NewCPU() {
    }
    NewCPU.prototype.newInterface = function () {
        console.log('New CPU');
    };
    return NewCPU;
}());
var CPUAdapter = /** @class */ (function () {
    function CPUAdapter(cpu) {
        this.cpu = cpu;
    }
    CPUAdapter.prototype.simpleInterface = function () {
        this.cpu.newInterface();
    };
    return CPUAdapter;
}());
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.startComputer = function (cpu) {
        cpu.simpleInterface();
    };
    return Computer;
}());
var myComputer = new Computer();
var newCPUAdapter = new CPUAdapter(new NewCPU());
myComputer.startComputer(newCPUAdapter);
