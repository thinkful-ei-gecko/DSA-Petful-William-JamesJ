const express = require('express');
const personService = require('./person-service');

const personRouter = express.Router();

personRouter
  .route('/')
  .get((req,res,next) => {
    return res.status(200).json(personService.getFirstPerson());
  })
  .delete((req,res,next) => {
    personService.removePerson();
    return res.status(204).end();
  });

personRouter
  .route('/:person_name')
  .get((req,res,next) => {
    let name = req.params.person_name;
    return res.status(200).json(personService.countPlaceInLine(name));
  });

module.exports = personRouter;