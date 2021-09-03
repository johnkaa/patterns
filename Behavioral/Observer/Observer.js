/**
 * Наблюдатель — это поведенческий паттерн проектирования, который создаёт механизм подписки,
 * позволяющий одним объектам следить и реагировать на события, происходящие в других объектах.
 */
var News = /** @class */ (function () {
    function News() {
        this.news = '';
        this.subscribers = [];
    }
    News.prototype.setNews = function (text) {
        this.news = text;
        this.notifyAll();
    };
    News.prototype.notifyAll = function () {
        var _this = this;
        return this.subscribers.forEach(function (subs) { return subs.inform(_this); });
    };
    News.prototype.register = function (observer) {
        this.subscribers.push(observer);
    };
    News.prototype.unregister = function (observer) {
        this.subscribers = this.subscribers.filter(function (el) { return !(el instanceof observer); });
    };
    return News;
}());
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.inform = function (msg) {
        console.log("User has been informed about: " + msg.news);
    };
    return User;
}());
var User1 = /** @class */ (function () {
    function User1() {
    }
    User1.prototype.inform = function (msg) {
        console.log("User1 has been informed about: " + msg.news);
    };
    return User1;
}());
var news = new News();
news.register(new User());
news.setNews('New front-end courses in https://avada-media.ua/spacelab/');
