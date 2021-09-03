/**
 * Посетитель — это поведенческий паттерн проектирования,
 * который позволяет добавлять в программу новые операции, не изменяя классы объектов,
 * над которыми эти операции могут выполняться.
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
var Auto = /** @class */ (function () {
    function Auto() {
    }
    Auto.prototype.accept = function (visitor) {
        visitor(this);
    };
    return Auto;
}());
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tesla.prototype.info = function () {
        return 'It is a Tesla!';
    };
    return Tesla;
}(Auto));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BMW.prototype.info = function () {
        return 'It is a BMW!';
    };
    return BMW;
}(Auto));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Audi.prototype.info = function () {
        return 'It is a Audi!';
    };
    return Audi;
}(Auto));
function exportVisitor(auto) {
    if (auto instanceof Tesla) {
        auto["export"] = console.log("Exported data: " + auto.info());
    }
    if (auto instanceof BMW) {
        auto["export"] = console.log("Exported data: " + auto.info());
    }
    if (auto instanceof Audi) {
        auto["export"] = console.log("Exported data: " + auto.info());
    }
}
var tesla = new Tesla();
exportVisitor(tesla);
