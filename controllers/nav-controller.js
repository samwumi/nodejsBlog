  
  function contact (req, res){
    res.render('contact');
};


function about (req, res){
    res.render('about', {aboutContent: aboutContent});
};




module.exports = {
    contact: contact,
    about: about,
}