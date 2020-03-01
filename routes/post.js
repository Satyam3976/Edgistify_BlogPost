const router = require('express').Router();

const postController = require('../controllers/post');

router.post('/createPost', postController.createPost);
router.get('/displayPosts', postController.displayPosts);
router.post('/displayPost', postController.displayPost);
// router.post('/acceptGig/:id', gigsController.acceptGig);
router.delete('/deletePost',postController.deletePost);
// router.get('/userGigs',gigsController.displayUserGigs);


module.exports = router;
