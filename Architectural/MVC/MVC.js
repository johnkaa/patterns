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
// Observer
var ListEvent = /** @class */ (function () {
    function ListEvent() {
        this.events = {};
    }
    ListEvent.prototype.on = function (event, listener) {
        (this.events[event] || (this.events[event] = [])).push(listener);
        return this;
    };
    ListEvent.prototype.emit = function (event, arg) {
        if (arg === void 0) { arg = 0; }
        (this.events[event] || []).forEach(function (i) { return i(arg); });
    };
    return ListEvent;
}());
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model(items) {
        var _this = _super.call(this) || this;
        _this.items = items || [];
        _this.selectedIndex = -1;
        return _this;
    }
    Model.prototype.getItems = function () {
        return this.items.slice();
    };
    Model.prototype.addItem = function (item) {
        this.items.push(item);
        this.emit('itemAdded', item);
    };
    Model.prototype.removeItem = function (index) {
        var item = this.items.splice(index, 1)[0];
        this.emit('itemRemoved', item);
        if (index === this.selectedIndex) {
            this.selectedIndex = -1;
        }
    };
    Model.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    Model.prototype.setSelectedIndex = function (index) {
        var previousIndex = this.selectedIndex;
        this.selectedIndex = index;
        this.emit('selectedIndexChanged', previousIndex);
    };
    return Model;
}(ListEvent));
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(model, elements) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.elements = elements;
        model.on('itemAdded', function () { return _this.rebuildList(); });
        model.on('itemRemoved', function () { return _this.rebuildList(); });
        elements.list.addEventListener('change', function (e) { return _this.emit('listModified', e.target.selectedIndex); });
        elements.addButton.addEventListener('click', function () { return _this.emit('addButtonClicked'); });
        elements.delButton.addEventListener('click', function () { return _this.emit('delButtonClicked'); });
        return _this;
    }
    View.prototype.show = function () {
        this.rebuildList();
    };
    View.prototype.rebuildList = function () {
        var list = this.elements.list;
        list.options.length = 0;
        this.model.getItems().forEach(function (item) { return list.options.add(new Option(item)); });
        this.model.selectedIndex = -1;
    };
    return View;
}(ListEvent));
var Controller = /** @class */ (function () {
    function Controller(model, view) {
        var _this = this;
        this.model = model;
        this.view = view;
        view.on('listModified', function (idx) { return _this.updateSelected(idx); });
        view.on('addButtonClicked', function () { return _this.addItem(); });
        view.on('delButtonClicked', function () { return _this.delItem(); });
    }
    Controller.prototype.addItem = function () {
        var item = window.prompt('Add item:', '');
        if (item) {
            this.model.addItem(item);
        }
    };
    Controller.prototype.delItem = function () {
        var index = this.model.selectedIndex;
        if (index !== -1) {
            this.model.removeItem(index);
        }
    };
    Controller.prototype.updateSelected = function (index) {
        this.model.selectedIndex = index;
    };
    return Controller;
}());
window.addEventListener('load', function () {
    var model = new Model(['Vue', 'React']);
    var view = new View(model, {
        list: document.getElementById('list'),
        addButton: document.getElementById('plusBtn'),
        delButton: document.getElementById('minusBtn')
    });
    var controller = new Controller(model, view);
    view.show();
});
