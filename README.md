# Petful API
* Live link to API endpoints: https://petful-server-william-jamesj.herokuapp.com/api/dogs
* Live link to application: https://dsa-petful-client-william-jamesj.jamesjenkinsjr.now.sh/

* Link to Server Repo: https://github.com/thinkful-ei-gecko/DSA-Petful-William-JamesJ
* Link to Client Repo: https://github.com/thinkful-ei-gecko/DSA-Petful-Client-William-JamesJ

## Contributors to Repository:
* William Bae
* James Jenkins

## Description
Petful API is the server responsible for handling API requests for the Petful application

## Endpoints
#### Cats Endpoints
* ```GET /api/cats``` : Returns a cat object from our catQueue data structure
* ```DELETE /api/cats``` : Endpoint that removes a cat from the catQueue data structure

* ```GET /api/cats/:cat_name``` : Returns the next cat object in our catQueue data structure


#### Dogs Endpoint
* ```GET /api/dogs``` : Returns a dog object from our dogQueue data structure
* ```DELETE /api/dogs``` : Endpoint that removes a dog from the dogQueue data structure

* ```GET /api/dogs/:dog_name``` : Returns the next dog object in our dogQueue data structure


#### Person Endpoint
* ```GET /api/person``` : Returns a person object from our personQueue data structure
* ```DELETE /api/person``` : Endpoint that removes a person from the personQueue data structure

* ```GET /api/person/:person_name``` : Returns the next person object in our personQueue data structure


#### Technologies
* NodeJS
* Express