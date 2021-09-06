/**
 * Заместитель — это структурный паттерн проектирования,
 * который позволяет подставлять вместо реальных объектов специальные объекты-заменители.
 * Эти объекты перехватывают вызовы к оригинальному объекту,
 * позволяя сделать что-то до или после передачи вызова оригиналу.
 */

interface IServiceInterface {
    operation(): void
}

class Proxy implements IServiceInterface {
    private service: Service
    private access: boolean
    constructor(service: Service) {
        this.service = service
        this.access = true
    }
    checkAccess(): void {
        if(this.access === true) {
            this.service.operation()
        }
    }
    operation(): void {
        console.log('Proxy operation')
    }
}

class Service implements IServiceInterface {
    operation(): void {
        console.log('Operation')
    }
}

const proxy: Proxy = new Proxy(new Service())

proxy.checkAccess()