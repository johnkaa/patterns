/**
 * Посредник — это поведенческий паттерн проектирования,
 * который позволяет уменьшить связанность множества классов между собой,
 * благодаря перемещению этих связей в один класс-посредник.
 */
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(c1, c2) {
        this.componentA = c1;
        this.componentA.setMediator(this);
        this.componentB = c2;
        this.componentB.setMediator(this);
    }
    ConcreteMediator.prototype.notify = function (sender, event) {
        if (event === 'A') {
            console.log('Mediator doing A and next operation...');
            this.componentB.doC();
        }
        if (event === 'D') {
            console.log('Mediator doing D and next operation...');
            this.componentA.doB();
            this.componentB.doC();
        }
    };
    return ConcreteMediator;
}());
var ComponentA = /** @class */ (function () {
    function ComponentA() {
    }
    ComponentA.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    ComponentA.prototype.doA = function () {
        console.log('ComponentA does A');
        this.mediator.notify(this, 'A');
    };
    ComponentA.prototype.doB = function () {
        console.log('ComponentA does B');
        this.mediator.notify(this, 'B');
    };
    return ComponentA;
}());
var ComponentB = /** @class */ (function () {
    function ComponentB() {
    }
    ComponentB.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    ComponentB.prototype.doC = function () {
        console.log('ComponentB does C');
        this.mediator.notify(this, 'C');
    };
    ComponentB.prototype.doD = function () {
        console.log('ComponentB does D');
        this.mediator.notify(this, 'D');
    };
    return ComponentB;
}());
var c1 = new ComponentA();
var c2 = new ComponentB();
var mediator = new ConcreteMediator(c1, c2);
c1.doA();
console.log('***************************************');
c2.doD();
