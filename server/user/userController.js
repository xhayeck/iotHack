var User = require ('./userModel.js');

var userTest = {};
userTest.name = "Snoop1 Dogg";
userTest.zipCode = 12345;
userTest.phoneNumber = 55512345671;
userTest.email = "snoop@dogg1.com";

module.exports = {
  getAllUsers: function(req, res, next){
    var findAllUsers = User.find({}, function(err, docs){
      if(err) throw err;
      res.send(docs);
    })
  },

  addNewUser: function(req, res, next){
    var newUser = new User(req.body);
    // var newUser = new User(userTest);
    newUser.save()
    .then(function(){
      res.status(200).send()
    })
    .catch(function(err){
      res.status(400).send();
      next(err);
    });

  }
}
