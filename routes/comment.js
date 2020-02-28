const router = require('express').Router();

const commentController = require('../controllers/comment');

router.post('/addComment', commentController.addComment);
router.get('/allComments', commentController.getCommentById);

module.exports = router;