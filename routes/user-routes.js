const express = require('express');
const userRoutes = express.Router();

userRoutes.get('/users', (req, res) => {
  res.send('Getting all users from the database.');
});


userRoutes.post('/users', (req,res) => {
    res.send('Added a new user to the database.');
});

userRoutes.delete('/users/:id', (req,res) => {
    res.send('Deleted a user from the database.');
  });

  userRoutes.put('/:id', (req,res) => {
    res.send('Updated a user from the database.');
});

module.exports = userRoutes;

