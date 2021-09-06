/**
 * Посетитель — это поведенческий паттерн проектирования,
 * который позволяет добавлять в программу новые операции, не изменяя классы объектов,
 * над которыми эти операции могут выполняться.
 */
var Visitor = /** @class */ (function () {
    function Visitor() {
    }
    Visitor.prototype.visitTesla = function (e) {
        console.log("Exported data: " + e.info());
    };
    Visitor.prototype.visitBMW = function (e) {
        console.log("Exported data: " + e.info());
    };
    Visitor.prototype.visitAudi = function (e) {
        console.log("Exported data: " + e.info());
    };
    return Visitor;
}());
var Tesla = /** @class */ (function () {
    function Tesla() {
    }
    Tesla.prototype.info = function () {
        return 'It is a Tesla!';
    };
    Tesla.prototype.accept = function (visitor) {
        visitor.visitTesla(this);
    };
    return Tesla;
}());
var BMW = /** @class */ (function () {
    function BMW() {
    }
    BMW.prototype.info = function () {
        return 'It is a BMW!';
    };
    BMW.prototype.accept = function (visitor) {
        visitor.visitBMW(this);
    };
    return BMW;
}());
var Audi = /** @class */ (function () {
    function Audi() {
    }
    Audi.prototype.info = function () {
        return 'It is a Audi!';
    };
    Audi.prototype.accept = function (visitor) {
        visitor.visitAudi(this);
    };
    return Audi;
}());
var visitor = new Visitor();
visitor.visitTesla(new Tesla());
