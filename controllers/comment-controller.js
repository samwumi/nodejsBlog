const Comment = require('../models/comment-model');
const post = require('../controllers/post-controller');

const db = require('../data/database');

// Controller method for creating a new comment for a post
function createComment(req, res, next) {
  const postId = req.params.id;
  const { title, text } = req.body;

  // Create a new comment
  const comment = new Comment(title, text, postId);

  // Save the comment or perform any required operations

  db.getDb.collection('comments').insertOne(comment)
  
  // Return the created comment
  return res.json(comment);
}

module.exports = {
  createComment,
};





















