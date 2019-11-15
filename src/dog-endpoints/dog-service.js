const { dogQueue } = require('../store');

const dogServices = {
  getAllDogs() {
    return dogQueue;
  },

  getOneDog() {
    return dogQueue.first.value;
  },

  deleteDog() {
    return dogQueue.dequeue();
  }
};

module.exports = dogServices;