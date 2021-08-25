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
var Door = /** @class */ (function () {
    function Door() {
    }
    Door.prototype.description = function () {
        return this.type + " \u0434\u0432\u0435\u0440\u044C";
    };
    return Door;
}());
var WoodenDoorFactory = /** @class */ (function (_super) {
    __extends(WoodenDoorFactory, _super);
    function WoodenDoorFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'Деревянная';
        return _this;
    }
    return WoodenDoorFactory;
}(Door));
var IronDoorFactory = /** @class */ (function (_super) {
    __extends(IronDoorFactory, _super);
    function IronDoorFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'Железная';
        return _this;
    }
    return IronDoorFactory;
}(Door));
var ironDoor = new IronDoorFactory();
var woodenDoor = new WoodenDoorFactory();
