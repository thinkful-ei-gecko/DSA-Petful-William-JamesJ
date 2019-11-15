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

catRouter
  .route('/:cat_name')
  .get((req,res,next) => {
    const catName = req.params.cat_name;
    return res.status(200).json(catServices.getNextCat(catName));
  });

module.exports = catRouter;