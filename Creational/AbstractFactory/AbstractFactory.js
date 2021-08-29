/**
 * Абстрактная фабрика — это порождающий паттерн проектирования,
 * который позволяет создавать семейства связанных объектов,
 * не привязываясь к конкретным классам создаваемых объектов.
 */
var IronFactory = /** @class */ (function () {
    function IronFactory() {
    }
    IronFactory.prototype.createDoors = function () {
        return new IronDoors();
    };
    IronFactory.prototype.createWindows = function () {
        return new IronWindows();
    };
    return IronFactory;
}());
var WoodenFactory = /** @class */ (function () {
    function WoodenFactory() {
    }
    WoodenFactory.prototype.createDoors = function () {
        return new WoodenDoors();
    };
    WoodenFactory.prototype.createWindows = function () {
        return new WoodenWindows();
    };
    return WoodenFactory;
}());
var IronDoors = /** @class */ (function () {
    function IronDoors() {
    }
    IronDoors.prototype.open = function () {
        return 'open';
    };
    IronDoors.prototype.close = function () {
        return 'close';
    };
    return IronDoors;
}());
var WoodenDoors = /** @class */ (function () {
    function WoodenDoors() {
    }
    WoodenDoors.prototype.open = function () {
        return 'open';
    };
    WoodenDoors.prototype.close = function () {
        return 'close';
    };
    return WoodenDoors;
}());
var IronWindows = /** @class */ (function () {
    function IronWindows() {
    }
    IronWindows.prototype.open = function () {
        return 'open';
    };
    IronWindows.prototype.close = function () {
        return 'close';
    };
    return IronWindows;
}());
var WoodenWindows = /** @class */ (function () {
    function WoodenWindows() {
    }
    WoodenWindows.prototype.open = function () {
        return 'open';
    };
    WoodenWindows.prototype.close = function () {
        return 'close';
    };
    return WoodenWindows;
}());
