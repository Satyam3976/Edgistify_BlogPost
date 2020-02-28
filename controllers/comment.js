const User = require('../models/user');
const Gig = require('../models/postGig');
const alotGig = require('../models/Gig');
const Comment = require('../models/comment');


exports.addComment = (req, res) => {
  Comment.findById(req.body.userID)
  .then(user => {
   
    Comment.create({
      author: user.name,
      postID:req.body.postID,
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

  // Comment.create(req.body)
  // .then(result=>{
  //   res.json({success:true})
  // })
  // .catch(err =>{
  //   res.json({success:false})
  // })

  };

exports.getCommentById = (req, res) => {
    comment.findById(req.body.postID)
    .then(comment => {
      res.json({ success: true, comment })
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false })
    })
}

