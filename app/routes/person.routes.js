module.exports = (app) => {
  const people = require('../controllers/person.controller.js');

  var router = require('express').Router();

  // Create a new Person
  router.post('/', people.create);

  // Retrieve all people
  router.get('/', people.findAll);

  // Retrieve a single Person with id
  router.get('/:id', people.findOne);

  // Update a Person with id
  router.put('/:id', people.update);

  // Delete a Person with id
  router.delete('/:id', people.delete);

  // Delete all people
  router.delete('/', people.deleteAll);

  app.use('/api/people', router);
};
