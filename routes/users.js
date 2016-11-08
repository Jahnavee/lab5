var express = require('express');
var router = express.Router();


// link to the account model
var account = require('../models/account');
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//auth check
function isLoggedIn(req,res,next) {
  if(req.isAuthenticated())
  {
    next();
  }

  else {
    res.redirect('/login');

  }
}
//
// /* GET account listing. */
// router.get('/account',isLoggedIn, function(req, res, next) {
//   res.send('respond with a resource');
// });


// GET main user page
router.get('/',isLoggedIn ,function(req, res, next) {

  account.find(function(err, users) {
    if (err) {
      console.log(err);
      res.render('error');
    }
    else {
      // load the users page and pass the query result
      res.render('users', {
        title: 'users',
        users: users,
        user: req.user
      });
    }
  });
});



module.exports = router;
