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
    dogServices.deletedog(store);
    return res.status(204).end();
  });

module.exports = dogRouter;