const { catQueue } = require('../store');

const catServices = {
  getAllCats() {
    return catQueue;
  },

  getOneCat() {
    return catQueue.first.value;
  },

  getNextCat(catName) {
    let node = catQueue.first;
    while(catName !== node.value.name) {
      node = node.next;
    }
    if(node.next !== null) {
      return node.next.value;
    } else {
      throw new Error('No more cats');
    }   
  },

  deleteCat() {
    return catQueue.dequeue();
  }
};

module.exports = catServices;