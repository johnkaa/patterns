/**
 * Шаблонный метод — это поведенческий паттерн проектирования,
 * который определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги на подклассы.
 * Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AI = /** @class */ (function () {
    function AI() {
    }
    AI.prototype.move = function () {
        this.collectResources();
        this.buildStructures();
        this.buildUnits();
        this.attack();
    };
    AI.prototype.buildUnits = function () {
        console.log(this.type + ": build units");
    };
    AI.prototype.attack = function () {
        console.log(this.type + ": attack");
    };
    return AI;
}());
var HumanAI = /** @class */ (function (_super) {
    __extends(HumanAI, _super);
    function HumanAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'Human';
        return _this;
    }
    HumanAI.prototype.buildStructures = function () {
        console.log(this.type + ": build structures");
    };
    HumanAI.prototype.collectResources = function () {
        console.log(this.type + ": collect resources");
    };
    return HumanAI;
}(AI));
var MonsterAI = /** @class */ (function (_super) {
    __extends(MonsterAI, _super);
    function MonsterAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'Monster';
        return _this;
    }
    MonsterAI.prototype.buildStructures = function () {
        console.log(this.type + ": can't build structures");
    };
    MonsterAI.prototype.collectResources = function () {
        console.log(this.type + ": can't collect resources");
    };
    return MonsterAI;
}(AI));
var human = new HumanAI();
