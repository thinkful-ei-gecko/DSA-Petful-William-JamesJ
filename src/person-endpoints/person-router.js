const express = require('express')
const personService = require('./person-service')

const personRouter = express.Router()

personRouter
  .route('/')
  .get((req, res, next) => {
    return res.status(200).json(personService.getPersons())
  })
  .post(express.json(), (req, res, next) => {
    const { name, password } = req.body
    personService.addPerson({ name, password })
    return res.status(201).json({name})
  })
  .delete((req, res, next) => {
    personService.removePerson()
    return res.status(204).end()
  })

personRouter.route('/:person_name')
  .post(express.json(), async (req, res, next) => {
  const { name, password } = req.body
  const position = await personService.countPlaceInLine(name, password)
  return res.status(200).json(position)
})

module.exports = personRouter
