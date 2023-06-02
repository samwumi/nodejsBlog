const mongodb = require('mongodb')
const db = require('../data/database')

class Post{
    constructor(postData){
           this.title = postData.title,
           this.content = postData.content,
           this.image = postData.image,
          this.updateImageData()
          if(postData._id){
            this.id = postData._id.toString()
          }
          
    }

    static async findById(postId){
        let poId
        try {
        poId = new mongodb.ObjectId(postId)
        } catch (error) {
            error.code =404
            throw error
        }

      const post = await db.getDb().collection('posts').findOne({_id: poId})
        
      if(!post){
        const error = new Error('could not find the product by the id provided')
        error.code = 404;
        throw error
      }
      return new Post(post)
       
    }


   static async findAll(){
   const products = await db.getDb().collection('posts').find().toArray()

   return products.map(function(postDocument){
    return new Post(postDocument)
   })
    }


    updateImageData(){
        this.imagePath = `post-data/images/${this.image}`
        this.imageUrl = `/posts/assets/images/${this.image}`
    }

    save(){
        const postData ={
           title: this.title,
           content: this.content,
           image: this.image
        }

    db.getDb().collection('posts').insertOne(postData)
}
}



module.exports = Post