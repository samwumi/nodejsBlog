const express = require('express');
const commentController = require('../controllers/comment-controller');

const router = express.Router();

router.post('/posts/:postId/comments', commentController.createComment);

module.exports = router;