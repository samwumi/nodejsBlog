 function getLogin(req, res){
    res.render('login')
   }
  
  
   function getRegister(req, res){
      res.render('register')
   }
  
   async function registerAdmin(req, res){
    const hash = bcrypt.hash(req.body.password, saltRounds)
      const newUser = {
        email: req.body.userName,
        password: hash
     }
  
     await db.getDb().collection('comments').insertOne(newUser)
          res.redirect('/login')
      }
  
  
  
  async function confirmAdmin(req, res){
  
      const userName = req.body.userName
      const password = req.body.password
     const foundUser = await db.getDb().collection('users').findOne({email: userName})
  
          if(foundUser){
            bcrypt.compare(password, foundUser.password, function(err, result){
              if(result === true){
                res.render('compose')
              }
                 
              })
                
          }
        
        }

        function compose(req, res){
          res.render('compose')
      };
      
  
  
  module.exports = {
      getLogin: getLogin,
      getRegister: getRegister,
      registerAdmin: registerAdmin,
      confirmAdmin: confirmAdmin,
      compose: compose
  }