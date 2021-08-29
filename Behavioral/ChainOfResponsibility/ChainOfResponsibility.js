/**
 * Цепочка обязанностей — это поведенческий паттерн проектирования,
 * который позволяет передавать запросы последовательно по цепочке обработчиков.
 * Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи.
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
var BaseHandler = /** @class */ (function () {
    function BaseHandler() {
    }
    BaseHandler.prototype.setNext = function (handler) {
        this.next = handler;
        return handler;
    };
    BaseHandler.prototype.handle = function (request) {
        if (this.next) {
            return this.next.handle(request);
        }
        return null;
    };
    return BaseHandler;
}());
var Bot = /** @class */ (function (_super) {
    __extends(Bot, _super);
    function Bot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bot.prototype.handle = function (request) {
        if (request === 'easy') {
            return "Bot: I'll help the user with " + request + " task";
        }
        return _super.prototype.handle.call(this, request);
    };
    return Bot;
}(BaseHandler));
var JuniorSupport = /** @class */ (function (_super) {
    __extends(JuniorSupport, _super);
    function JuniorSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JuniorSupport.prototype.handle = function (request) {
        if (request === 'medium') {
            return "Junior Support: I'll help the user with " + request + " task";
        }
        return _super.prototype.handle.call(this, request);
    };
    return JuniorSupport;
}(BaseHandler));
var SeniorSupport = /** @class */ (function (_super) {
    __extends(SeniorSupport, _super);
    function SeniorSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeniorSupport.prototype.handle = function (request) {
        if (request === 'hard') {
            return "Senior Support: I'll help the user with " + request + " task";
        }
        return _super.prototype.handle.call(this, request);
    };
    return SeniorSupport;
}(BaseHandler));
var bot = new Bot();
var junior = new JuniorSupport();
var senior = new SeniorSupport();
bot.setNext(junior).setNext(senior);
console.log(bot.handle('hard'));
