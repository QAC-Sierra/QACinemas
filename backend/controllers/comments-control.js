const Comment = require('../schemas/comments');

const createComment = (req, res) => {
	console.log(req.body);
	const comment = new Comment({
		name: req.body.name,
		movie_name: req.body.movie_name,
		comment: req.body.comment,
		movie_rating: req.body.movie_rating
	});
	comment.save().then(() => {
		res.status(201).send();
	}).catch((err) => console.error(err));
}

getCommentById = async (req, res) => {
	await Comment.findOne({comment_id: req.params.id}, (err, comment) => {
		if (err) {
			return res.status(400).json({success: false, error: err});
		}
		
		if (!comment) {
			return res.status(404).json({success: false, error: 'Comment not found!'});
		}
		return res.status(200).json({success: true, data: comment});
	}).catch(err => console.log(err));
}

getComments = async (req, res) => {
	await Comment.find({}, (err, comments) => {
		if (err) {
			return res.status(400).json({success: false, error: err});
		}
		if (!comments.length) {
			return res.status(404).json({success: false, error: 'No comments found!'});
		}
		return res.status(200).json({success: true, data: comments});
	}).catch(err => console.log(err));
}

deleteComment = async (req, res) => {
	await Comment.findOneAndDelete({comment_id: req.params.id}, (err, comment) => {
		if (err) {
			return res.status(400).json({success: false, error: err});
		}
		if (!comment) {
			return res.status(404).json({success: false, error: 'No comment found!'});
		}
		return res.status(200).json({success: true, data: comment});
	}).catch(err => console.log(err));
}


module.exports = {
	createComment,
	getCommentById,
	getComments,
	deleteComment,
}