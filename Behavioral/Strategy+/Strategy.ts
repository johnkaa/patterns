/**
 * Стратегия — это поведенческий паттерн проектирования,
 * который определяет семейство схожих алгоритмов и помещает каждый из них в собственный класс,
 * после чего алгоритмы можно взаимозаменять прямо во время исполнения программы.
 */

interface IRoute {
    type: string
    buildRoute(A: string, B: string)
}

class CarRoute implements IRoute {
    constructor() {
        this.type = 'Car'
    }
    type: string
    buildRoute(A: string, B: string) {
        console.log(`Car route from ${A} to ${B} successfully built`)
    }
}
class AirportRoute implements IRoute {
    constructor() {
        this.type = 'Airport'
    }
    type: string
    buildRoute(A: string, B: string) {
        console.log(`Air route from ${A} to ${B} successfully built`)
    }
}
class WalkingRoute implements IRoute {
    constructor() {
        this.type = 'Walking'
    }
    type: string
    buildRoute(A: string, B: string) {
        console.log(`Walking route from ${A} to ${B} successfully built`)
    }
}

class Nav {
    constructor(route: IRoute) {
        this.route = route
    }
    private route: IRoute

    setNavigation(route: IRoute): void {
        this.route = route
    }
    doNavigation(): void {
        console.log('Making a route...')
        const myRoute = this.route.buildRoute('Sumy', 'Odessa')
    }
}

const client = new Nav(new WalkingRoute())
client.doNavigation()
client.setNavigation(new AirportRoute())
client.doNavigation()
