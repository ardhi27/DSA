class MyStack {
    constructor() {
        this.itemQueue = [];
        this.itemQueueOutput = [];
    }

    /** * @param {number} x
     * @return {void}
     */
    push(x) {
        this.itemQueue.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        while (this.itemQueue.length > 1) {
            this.itemQueueOutput.push(this.itemQueue.shift());
        }
        const remainElement = this.itemQueue.shift();
        console.log(`Queue`, this.itemQueue)
        console.log(`Queue Output`, this.itemQueueOutput)

        const tempItem = []
        this.itemQueue = this.itemQueueOutput
        this.itemQueueOutput = tempItem
        console.log(`Queue`, this.itemQueue)
        console.log(`Queue Output`, this.itemQueueOutput)

        console.log(`Deleted Element`, remainElement)
        return remainElement
    }

    /**
     * @return {number}
     */
    top() {
        let topElement;
        // Pindahkan semua elemen untuk menemukan yang teratas
        while (this.itemQueue.length > 0) {
            this.itemQueueOutput.push(this.itemQueue.shift());
        }
        topElement = this.itemQueue[0]
        this.item
        [this.itemQueue, this.itemQueueOutput] = [this.itemQueueOutput, this.itemQueue];
        return topElement;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.itemQueue.length === 0;
    }
}


const stack = new MyStack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()