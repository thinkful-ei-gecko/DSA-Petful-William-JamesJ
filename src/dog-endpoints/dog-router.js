const express = require('express');
const dogServices = require('./dog-service');
const store = require('../store');

const dogRouter = express.Router();

dogRouter
  .route('/')
  .get((req,res,next) => {
    return res.status(200).json(dogServices.getOneDog(store));
  })
  .delete((req,res,next) => {
    dogServices.deleteDog(store);
    return res.status(204).end();
  });

dogRouter
  .route('/:dog_name')
  .get((req,res,next) => {
    const dogName = req.params.dog_name;
    return res.status(200).json(dogServices.getNextDog(dogName));
  });

module.exports = dogRouter;