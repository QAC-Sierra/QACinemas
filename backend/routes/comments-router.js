const express = require('express');

const CommentsControl = require('../controllers/comments-control');

const router = express.Router();

//For comments, create is needed to save comment information to the db.
//GetById to get a specific comment document.
//GetAll needed to display everything stored.
router.post('/create', CommentsControl.createComment);
router.get('/getById/:id', CommentsControl.getCommentById);
router.get('/getAll', CommentsControl.getComments);

module.exports=router;


