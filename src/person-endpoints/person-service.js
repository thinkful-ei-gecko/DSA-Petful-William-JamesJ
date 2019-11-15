const { personQueue } = require('../store');

const personService = {
  //counter for place in line
  countPlaceInLine(name) {
    let node = personQueue.first;
    let counter = 0;

    while(node.value.name !== name) {
      counter ++;
      node = node.next;
    }
    if(node !== null) {
      return counter;
    }
  },

  getFirstPerson() {
    return personQueue.first.value;
  },

  removePerson() {
    return personQueue.dequeue();
  }
};

module.exports = personService;