

// app.use(function(req, res, next) {
//   req.getParamNames = function() {
//     return Object.keys(req.params);
//   }
//   next();
// });
//
// // ...later on in your code...
//
// app.get('/sum/:x/:y', function(req, res) {
//   res.send(req.getParamNames());
// });
// //outputs: ['x','y']
//
// req.session.lastPage = '/myPage';
// //on another page
// console.log(req.session.lastPage);
// //outputs: /myPage

//
// module.exports = function(req, res, next) {
//   if (!req.user) {
//     req.flash('error', 'You must be logged in to access that page');
//     res.redirect('/auth/login');
//   } else {
//     next();
//   }
// };
