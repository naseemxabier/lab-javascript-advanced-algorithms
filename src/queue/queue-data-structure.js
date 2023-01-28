class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if(this.queueControl.length < this.MAX_SIZE) {
      return true
    }
    else {return false}
  }

  isEmpty() {
    if(this.queueControl.length == 0) {
      return true
    }
    else {return false}
  }

  enqueue(item) {
    this.queueControl.push(item)
    if(this.canEnqueue() == true) {return this.queueControl}
    if(this.canEnqueue() == false){throw new Error('QUEUE_OVERFLOW')}
  }

  dequeue() {
    let borrar = this.queueControl.shift()
    if(this.isEmpty() == false) {return borrar}
    else {throw new Error('QUEUE_UNDERFLOW')}
  }

  display() {
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
