class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        return this.isEmpty() ? "No Element Inside Queue" : this.items.shift()
    }

    peek() {
        return this.isEmpty() ? "No Element Inside Queue" : this.items[0]
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }

    clear() {
        return this.items = [];
    }

    print() {
        console.log(this.items.join(" => "))
    }
}

const queue = new Queue()

queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
queue.enqueue(2)
queue.enqueue(3)
// queue.print()
// queue.dequeue()
console.log(queue.size())
queue.print()