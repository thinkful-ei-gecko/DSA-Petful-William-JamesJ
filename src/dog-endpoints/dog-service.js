const { dogQueue } = require('../store');

const dogServices = {
  getAllDogs() {
    return dogQueue;
  },

  getOneDog() {
    if (dogQueue.first === null) {
      return null
    }
    return dogQueue.first.value;
  },

  getNextDog(dogName) {
    let node = dogQueue.first;
    while(dogName !== node.value.name) {
      node = node.next;
    }
    if(node.next !== null) {
      return node.next.value;
    } else {
      throw new Error('No more dogs');
    }
  },

  deleteDog() {
    return dogQueue.dequeue();
  }
};

module.exports = dogServices;