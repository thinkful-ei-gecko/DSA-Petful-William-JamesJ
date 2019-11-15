const catServices = {
  getAllCats(store) {
    return store.cats;
  },

  getOneCat(store) {
    return store.cats[0];
  },

  deleteCat(store) {
    delete store.cats[0];
  }
};

module.exports = catServices;