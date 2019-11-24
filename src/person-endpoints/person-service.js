const { personQueue } = require('../store')

const personService = {
  countPlaceInLine(name, password) {
    let node = personQueue.first
    let counter = 0

    while (node !== null) {
      if (node.value.name === name && node.value.password === password) {
        break
      } else {
        counter++
        node = node.next
      }
    }

    if (node !== null) {
      return counter
    } else {
      return -1
    }
  },

  getPersons() {
    let people = []
    let tempPerson = personQueue.first
    if (tempPerson === null) {
      return people
    }
    while (tempPerson.next !== null) {
      people.push(tempPerson.value)
      tempPerson = tempPerson.next
    }
    people.push(tempPerson.value)
    return people
  },

  getFirstPerson() {
    return personQueue.first.value
  },

  removePerson() {
    return personQueue.dequeue()
  },

  addPerson(data) {
    return personQueue.enqueue(data)
  },
}

module.exports = personService
