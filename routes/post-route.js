const express = require('express')
const postController = require('../controllers/post-controller')
const imageUploadMiddleWare = require('../middlewares/file-upload')

const router = express.Router()



router.get('/', postController.getAllPosts )
router.post('/create-post', imageUploadMiddleWare, postController.createPost)
router.get('/posts/:id', postController.getPost )






module.exports = router