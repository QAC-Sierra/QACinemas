const Comment = require('../schemas/comments');

createComment = (req,res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success:false,
            error: 'You must provide a comment',
        })
    }

    const comment = new Comment(body);

    if (!comment){
        return res.status(400).json({success:false, error: err});
    }


    comment.save().then(() => {
        return res.status(201).json({
            success:true,
            id: comment._id,
            message: 'comment created!',
        })
    })
    .catch(error => {
        return res.status(400).json({error, message: 'Comment not created!'
    })
})
}

getCommentById = async (req, res) => {
    await Comment.findOne({comment_id: req.params.id}, (err, comment) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }

        if (!comment) {
            return res.status(404).json({success:false, error: 'Comment not found!'});
        }
        return res.status(200).json({success:true, data: comment});
    }).catch(err => console.log(err));
}

getComments = async (req, res) => {
    await Comment.find({}, (err, comments) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }
        if (!comments.length) {
            return res.status(404).json({success:false, error: 'No comments found!'});
        }
        return res.status(200).json({success:true, data: comments});
    }).catch(err => console.log(err));
}

deleteComment = async (req, res) => {
    await Comment.findOneAndDelete({comment_id: req.params.id}, (err, comment) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }
        if (!comment) {
            return res.status(404).json({success:false, error: 'No comment found!'});
        }
        return res.status(200).json({success:true, data: comment});
    }).catch(err => console.log(err));
}


module.exports = {
    createComment,
    getCommentById,
    getComments,
    deleteComment,
}