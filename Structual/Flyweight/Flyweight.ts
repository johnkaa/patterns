/**
 * Легковес — это структурный паттерн проектирования,
 * который позволяет вместить большее количество объектов в отведённую оперативную память.
 * Легковес экономит память, разделяя общее состояние объектов между собой,
 * вместо хранения одинаковых данных в каждом объекте.
 */

class Auto {
    model: string
    constructor(model) {
        this.model = model
    }
    drive(): void {
        console.log('driving...')
    }
}

class AutoFactory {
    models: object
    constructor() {
        this.models = {}
    }
    create(name): Auto {
        let model = this.models[name]
        if(model) return model
        this.models[name] = new Auto(name)
        return this.models[name]
    }
    getModels(): void {
        console.table(this.models)
    }
}

const factory = new AutoFactory()

const tesla = factory.create('Tesla')
const mercedes = factory.create('Mercedes')
const porsche = factory.create('Porsche')
const porscheCayenne = factory.create('Porsche')

factory.getModels()
