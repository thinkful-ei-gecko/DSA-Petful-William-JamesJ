const dogServices = {
  getAllDogs(store) {
    return store.dogs;
  },

  getOneDog(store) {
    return store.dogs[0];
  },

  deleteDog(store) {
    delete store.dogs[0];
  }
};

module.exports = dogServices;