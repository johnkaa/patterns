/**
 * Заместитель — это структурный паттерн проектирования,
 * который позволяет подставлять вместо реальных объектов специальные объекты-заменители.
 * Эти объекты перехватывают вызовы к оригинальному объекту,
 * позволяя сделать что-то до или после передачи вызова оригиналу.
 */
var Proxy = /** @class */ (function () {
    function Proxy(service) {
        this.service = service;
        this.access = true;
    }
    Proxy.prototype.checkAccess = function () {
        if (this.access === true) {
            this.service.operation();
        }
    };
    Proxy.prototype.operation = function () {
        console.log('Proxy operation');
    };
    return Proxy;
}());
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.operation = function () {
        console.log('Operation');
    };
    return Service;
}());
var proxy = new Proxy(new Service());
proxy.checkAccess();
