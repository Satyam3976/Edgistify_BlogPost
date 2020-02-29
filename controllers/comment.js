const User = require('../models/user');
const Gig = require('../models/postGig');
const alotGig = require('../models/Gig');
const Comment = require('../models/comment');


exports.addComment = (req, res) => {
  User.findById(req.body.userId)
  .then(user => {
   
    Comment.create({
      author: user.name,
      postId:req.body.postId,
      text:req.body.text
    })
    .then(comment => {
      console.log(comment);
      res.json({ success: true })
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false })
    })
  })

  };

// exports.getCommentById = (req, res) => {

//   Gig.findById(req.body.gigID)
//   .then(gig => {
//     res.json({ success: true, gig })
//   })
//   .catch(err => {
//     console.log(err);
//     res.json({ success: false })
//   })
//     // comment.findById(req.body.postId)
//     // .then(comment => {
//     //   res.json({ success: true, comment })
//     // })
//     // .catch(err => {
//     //   console.log(err);
//     //   res.json({ success: false })
//     // })
// }

