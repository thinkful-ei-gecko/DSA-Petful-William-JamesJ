const Queue = require('../Utils/Queue')

const store = {
  cats: [
    {
      imageURL:
        'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
      imageDescription:
        'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Fluffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street',
      animalType: 'cats',
    },
    {
      imageURL:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageDescription:
        'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Sparkles',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street',
      animalType: 'cats',
    },
    {
      imageURL:
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageDescription:
        'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Tony',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street',
      animalType: 'cats',
    },
    {
      imageURL:
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageDescription:
        'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Garfield',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street',
      animalType: 'cats',
    },
    {
      imageURL:
        'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageDescription:
        'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Captain',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street',
      animalType: 'cats',
    },
  ],
  dogs: [
    {
      imageURL:
        'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription:
        'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away',
      animalType: 'dogs',
    },
    {
      imageURL:
        'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageDescription:
        'A smiling golden-brown golden retreiver listening to music.',
      name: 'Thor',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away',
      animalType: 'dogs',
    },
    {
      imageURL:
        'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageDescription:
        'A smiling golden-brown golden retreiver listening to music.',
      name: 'Loki',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away',
      animalType: 'dogs',
    },
    {
      imageURL: 'https://www.pexels.com/photo/adult-black-pug-1851164/',
      imageDescription:
        'A smiling golden-brown golden retreiver listening to music.',
      name: 'Buster',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away',
      animalType: 'dogs',
    },
    {
      imageURL:
        'https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageDescription:
        'A smiling golden-brown golden retreiver listening to music.',
      name: 'Scooter',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away',
      animalType: 'dogs',
    },
  ],
  people: [
    {
      name: 'William',
      password: 'password1',
    },
    {
      name: 'James',
      password: 'password2',
    },
  ],
}

const catQueue = new Queue()
store.cats.forEach(cat => catQueue.enqueue(cat))

const dogQueue = new Queue()
store.dogs.forEach(dog => dogQueue.enqueue(dog))

const personQueue = new Queue()
store.people.forEach(person => personQueue.enqueue(person))

module.exports = {
  catQueue,
  dogQueue,
  personQueue,
}
