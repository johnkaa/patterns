// Observer
class ListEvent {
    events: object
    constructor() {
        this.events = {}
    }
    on(event, listener): object {
        (this.events[event] || (this.events[event] = [])).push(listener)
        return this
    }
    emit(event, arg = 0): void {
        (this.events[event] || []).forEach(i => i(arg));
    }
}

class Model extends ListEvent {
    items: any
    selectedIndex: number
    constructor(items) {
        super()
        this.items = items || []
        this.selectedIndex = -1
    }

    getItems(): string[] {
        return this.items.slice()
    }
    addItem(item): void {
        this.items.push(item)
        this.emit('itemAdded', item)
    }
    removeItem(index): void {
        const item = this.items.splice(index, 1)[0]
        this.emit('itemRemoved', item)
        if(index === this.selectedIndex) {
            this.selectedIndex = -1
        }
    }
    getSelectedIndex(): number {
        return this.selectedIndex
    }
    setSelectedIndex(index): void {
        const previousIndex = this.selectedIndex
        this.selectedIndex = index
        this.emit('selectedIndexChanged', previousIndex)
    }
}

class View extends ListEvent {
    model: Model
    elements: any
    constructor(model, elements) {
        super();
        this.model = model
        this.elements = elements

        model.on('itemAdded', () => this.rebuildList())
        model.on('itemRemoved', () => this.rebuildList())

        elements.list.addEventListener('change',
            e => this.emit('listModified', e.target.selectedIndex))
        elements.addButton.addEventListener('click', () => this.emit('addButtonClicked'))
        elements.delButton.addEventListener('click', () => this.emit('delButtonClicked'))
    }

    show(): void {
        this.rebuildList()
    }
    rebuildList(): void {
        const list = this.elements.list
        list.options.length = 0
        this.model.getItems().forEach(item => list.options.add(new Option(item)))
        this.model.selectedIndex = -1
    }
}

class Controller {
    model: Model
    view: View
    constructor(model, view) {
        this.model = model
        this.view = view

        view.on('listModified', idx => this.updateSelected(idx))
        view.on('addButtonClicked', () => this.addItem())
        view.on('delButtonClicked', () => this.delItem())
    }

    addItem(): void {
        const item = window.prompt('Add item:', '')
        if(item) {
            this.model.addItem(item)
        }
    }
    delItem(): void {
        const index = this.model.selectedIndex
        if(index !== -1) {
            this.model.removeItem(index)
        }
    }
    updateSelected(index): void {
        this.model.selectedIndex = index
    }
}

window.addEventListener('load', () => {
    const model = new Model(['Vue', 'React'])
    const view = new View(model, {
        list: document.getElementById('list'),
        addButton: document.getElementById('plusBtn'),
        delButton: document.getElementById('minusBtn')
    })
    const controller = new Controller(model, view)

    view.show()
})