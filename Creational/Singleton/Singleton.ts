class SimpleCounter {
    public count() {
        let count: number = 5

        for(let i: number = 1; i <= 7; i++) {
            document.write(i.toString() + '<br>')
        }
        console.log('All done!')
    }
}

let count = new SimpleCounter()
count.count()