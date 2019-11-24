class _Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }
  enqueue(data) {
    const node = new _Node(data)

    if (this.first === null && this.last === null) {
      this.first = node
      this.last = node
    }

    if (this.last !== null) {
      let tempNode = this.last
      this.last = node
      tempNode.next = node
    }
    //make the new node the last item on the queue
    this.last = node
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return
    }
    const node = this.first
    this.first = this.first.next

    //if this is the last item in the queue
    if (node === this.last) {
      this.first = null
      this.last = null
    }
    return node.value
  }
}

module.exports = Queue
