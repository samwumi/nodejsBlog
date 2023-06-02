const Post = require('../models/post-model')
const express = require('express')
const db = require('../data/database')
// const mongodb = require('mongodb')

//  const ObjectId = mongodb.ObjectId

//  const router = express.Router()


async function getAllPosts(req, res, next){
  
  let posts;
  try {
    posts = await Post.findAll() 
  } catch (error) {
    next(error)
    return
  }

 res.render('home', {posts: posts})

}

   
  
  
  async function createPost(req, res, next){
     const post = new Post({
        ...req.body,
        image: req.file.filename
     })
  try {
    await post.save()
  } catch (error) {
    next(error)
    return
  }
   res.redirect('/')
      
  }

  
  
  
 async function getPost(req, res, next){
  let post;
  try {
    post = await Post.findById(req.params.id)
  } catch (error) {
    next(error)
    return
  }
  
  
      
res.render("post", { post: post, comments: null})
  
  }
  
   
  //      async function getComments (req, res) {
  //       const postId = new ObjectId(req.params.id);
  //       const post = await db.getDb().collection('posts').findOne({ _id: postId });
  //       const comments = await db
  //         .getDb()
  //         .collection('comments')
  //         .find({ postId: postId }).toArray();
      
  //       return res.render('post', { post: post, comments: comments, numberOfComments: comments.length });
  //     };
   
  //  router.post('/posts/:id/comments', async function createComment (req, res) {
  //     const postId = new ObjectId(req.params.id);
  //     const newComment = {
  //       postId: postId,
  //       title: req.body.title,
  //       text: req.body.text
  //     }
  
  //     await db.getDb().collection('comments').insertOne(newComment)
  //     res.redirect('/posts/' + req.params.id);
  //   });
  
    module.exports = {
        getAllPosts: getAllPosts,
        createPost: createPost,
        getPost: getPost,
        // createComment: createComment,
        // getComments: getComments
    };















































    
















     
    
     
     
    




