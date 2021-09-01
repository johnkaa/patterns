/**
 * Стратегия — это поведенческий паттерн проектирования,
 * который определяет семейство схожих алгоритмов и помещает каждый из них в собственный класс,
 * после чего алгоритмы можно взаимозаменять прямо во время исполнения программы.
 */
var CarRoute = /** @class */ (function () {
    function CarRoute() {
        this.type = 'Car';
    }
    CarRoute.prototype.buildRoute = function (A, B) {
        console.log("Car route from " + A + " to " + B + " successfully built");
    };
    return CarRoute;
}());
var AirportRoute = /** @class */ (function () {
    function AirportRoute() {
        this.type = 'Airport';
    }
    AirportRoute.prototype.buildRoute = function (A, B) {
        console.log("Air route from " + A + " to " + B + " successfully built");
    };
    return AirportRoute;
}());
var WalkingRoute = /** @class */ (function () {
    function WalkingRoute() {
        this.type = 'Walking';
    }
    WalkingRoute.prototype.buildRoute = function (A, B) {
        console.log("Walking route from " + A + " to " + B + " successfully built");
    };
    return WalkingRoute;
}());
var Nav = /** @class */ (function () {
    function Nav(route) {
        this.route = route;
    }
    Nav.prototype.setNavigation = function (route) {
        this.route = route;
    };
    Nav.prototype.doNavigation = function () {
        console.log('Making a route...');
        var myRoute = this.route.buildRoute('Sumy', 'Odessa');
    };
    return Nav;
}());
var client = new Nav(new WalkingRoute());
client.doNavigation();
client.setNavigation(new AirportRoute());
client.doNavigation();
