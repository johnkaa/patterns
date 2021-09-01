/**
 * Состояние — это поведенческий паттерн проектирования,
 * который позволяет объектам менять поведение в зависимости от своего состояния.
 * Извне создаётся впечатление, что изменился класс объекта.
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
var State = /** @class */ (function () {
    function State(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }
    State.prototype.next = function () {
        return new this.nextStatus();
    };
    return State;
}());
var Draft = /** @class */ (function (_super) {
    __extends(Draft, _super);
    function Draft() {
        return _super.call(this, 'Draft', Moderation) || this;
    }
    return Draft;
}(State));
var Moderation = /** @class */ (function (_super) {
    __extends(Moderation, _super);
    function Moderation() {
        return _super.call(this, 'Moderation', Published) || this;
    }
    return Moderation;
}(State));
var Published = /** @class */ (function (_super) {
    __extends(Published, _super);
    function Published() {
        return _super.call(this, 'Published', Published) || this;
    }
    return Published;
}(State));
var Doc = /** @class */ (function () {
    function Doc() {
        this.state = new Draft();
    }
    Doc.prototype.nextState = function () {
        this.state = this.state.next();
    };
    return Doc;
}());
var myDocument = new Doc();
console.log(myDocument.state.name);
myDocument.nextState();
console.log(myDocument.state.name);
myDocument.nextState();
console.log(myDocument.state.name);
