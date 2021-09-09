/**
 * Легковес — это структурный паттерн проектирования,
 * который позволяет вместить большее количество объектов в отведённую оперативную память.
 * Легковес экономит память, разделяя общее состояние объектов между собой,
 * вместо хранения одинаковых данных в каждом объекте.
 */
var Auto = /** @class */ (function () {
    function Auto(model) {
        this.model = model;
    }
    Auto.prototype.drive = function () {
        console.log('driving...');
    };
    return Auto;
}());
var AutoFactory = /** @class */ (function () {
    function AutoFactory() {
        this.models = {};
    }
    AutoFactory.prototype.create = function (name) {
        var model = this.models[name];
        if (model)
            return model;
        this.models[name] = new Auto(name);
        return this.models[name];
    };
    AutoFactory.prototype.getModels = function () {
        console.table(this.models);
    };
    return AutoFactory;
}());
var factory = new AutoFactory();
var tesla = factory.create('Tesla');
var mercedes = factory.create('Mercedes');
var porsche = factory.create('Porsche');
var porscheCayenne = factory.create('Porsche');
factory.getModels();
