/**
 * Наблюдатель — это поведенческий паттерн проектирования, который создаёт механизм подписки,
 * позволяющий одним объектам следить и реагировать на события, происходящие в других объектах.
 */

class News {
    constructor() {
        this.news = ''
        this.subscribers = []
    }
    news: string
    subscribers

    setNews(text): void {
        this.news = text
        this.notifyAll()
    }
    notifyAll(): string {
        return this.subscribers.forEach(subs => subs.inform(this))
    }
    register(observer): void {
        this.subscribers.push(observer)
    }
    unregister(observer): void {
        this.subscribers = this.subscribers.filter(el => !(el instanceof observer))
    }
}

interface IUsers {
    inform(msg: string): void
}

class User implements IUsers {
    inform(msg): void {
        console.log(`User has been informed about: ${msg.news}`)
    }
}
class User1 implements IUsers {
    inform(msg): void {
        console.log(`User1 has been informed about: ${msg.news}`)
    }
}

const news = new News()

news.register(new User())

news.setNews('New front-end courses in https://avada-media.ua/spacelab/')