const { catQueue } = require('../store');

const catServices = {
  getAllCats() {
    return catQueue;
  },

  getOneCat() {
    return catQueue.first.value;
  },

  deleteCat() {
    return catQueue.dequeue();
  }
};

module.exports = catServices;