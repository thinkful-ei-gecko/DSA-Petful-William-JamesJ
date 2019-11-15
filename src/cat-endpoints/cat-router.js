const express = require('express');
const catServices = require('./cat-service');
const store = require('../store');

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req,res,next) => {
    return res.status(200).json(catServices.getOneCat(store));
  })
  .delete((req,res,next) => {
    catServices.deleteCat(store);
    return res.status(204).end();
  });

module.exports = catRouter;