const express = require('express');

const UsersControl = require('../controllers/users-control');

const router = express.Router();

//For bookings, create, getbyid, and get all are required.
router.post('/create', UsersControl.createUser);
router.get('/getById/:id', UsersControl.getUserById);
router.get('/getAll', UsersControl.getUsers);

module.exports =router;