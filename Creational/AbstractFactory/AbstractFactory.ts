interface IDoor {
    type: string
    description(): string
}

class Door implements IDoor {
    type: string
    description(): string {
        return `${this.type} дверь`
    }
}

class WoodenDoorFactory extends Door {
    type = 'Деревянная'
}
class IronDoorFactory extends Door {
    type = 'Железная'
}

const ironDoor: IronDoorFactory = new IronDoorFactory()
const woodenDoor: WoodenDoorFactory = new WoodenDoorFactory()