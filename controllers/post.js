const Post = require('../models/post');
const Comment = require('../models/comment');

exports.createPost = (req, res) => {
  Post.create(req.body)
    .then(post => {
      console.log(post)
      res.json({ success: true })
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false })
    })
}

exports.displayPosts = (req, res) => {
  Post.find({})
  .sort('-createdAt')
    .then(posts => {
      res.json({ success: true, posts })
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false })
    })
}


exports.displayPost = (req, res) => {
  Post.findById(req.body.postID)
    .then(post => {
      Comment.find({postId:req.body.postID})
    .then(comment => {
      res.json({ success: true, comment,post })
    })
     .catch(err => {
      console.log(err);
      res.json({ success: false })
    })
  })
};


// exports.acceptGig =(req,res) => {
//   Gig.findById(req.params.id)
//   .then(gig => {
//      userGid:gig.userId
//      alotGig.create(
//        {
//         userGid:userGid,
//         userTid:req.userId
//        })
//      .then(gig => {
//        console.log(gig)
//        res.json({ success: true })
//      })
//      .catch(err => {
//        console.log(err);
//       res.json({ success: false })
//      })

//   })
// }

exports.acceptGig = (req, res) => {
  alotGig.findOne({ gidID: req.body.gigID })
    .then(gig => {
      if (gig) {
        let newUsers = gig.userTid;
        newUsers.push(req.body.userId);
        gig.UserTid = newUsers;
        alotGig.findByIdAndUpdate(gig)
          .then(newGig => {
            res.json({ success: true })
          })
          .catch(err => {
            console.log(err)
            res.json({ success: false });
          })
      } else {
        alotGig.create(req.body)
          .then(newGig => {
            res.json({ success: true })
          })
          .catch(err => {
            console.log(err);
            res.json({ success: false })
          })
      }
    })
}

exports.deleteOneGig = (req, res) => {
  Gig.findByIdAndRemove(req.params.id)
    .then(gig => {
      if (!gig) {
        return res.status(404).json({
          message: "not Found"
        });
      }
      res.json({ success: true })
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false })
    })
}

