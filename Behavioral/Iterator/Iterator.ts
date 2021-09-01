/**
 * Итератор — это поведенческий паттерн проектирования,
 * который даёт возможность последовательно обходить элементы составных объектов,
 * не раскрывая их внутреннего представления.
 */

interface Iterator<T> {
    current(): T
    next(): T
    key(): number
    valid(): boolean
    rewind(): void
}

interface Aggregator {
    getIterator(): Iterator<string>
}

class AlphabeticalOrderIterator implements Iterator<string> {
    private collection: WordsCollection
    private position: number = 0
    private reverse: boolean = false

    constructor(collection: WordsCollection, reverse: boolean = false) {
        this.collection = collection
        this.reverse = reverse

        if(reverse) {
            this.position = collection.getCount() - 1
        }
    }

    rewind() {
        this.position = this.reverse ? this.collection.getCount() - 1 :
        0
    }
    current(): string {
        return this.collection.getItems()[this.position]
    }
    key(): number {
        return this.position
    }
    next(): string {
        const item = this.collection.getItems()[this.position]
        this.position += this.reverse ? -1 : 1
        return item
    }
    valid(): boolean {
        if(this.reverse) {
            return this.position >= 0
        }
        return this.position < this.collection.getCount()
    }
}

class WordsCollection implements Aggregator {
    private items: string[] = []

    getItems(): string[] {
        return this.items
    }
    getCount(): number {
        return this.items.length
    }
    addItem(item: string): void {
        this.items.push(item)
    }
    getIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this)
    }
    getReverseIterator
}