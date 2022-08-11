import React from "react";

const CommentCard = ({movie_name, comment, movie_rating}) => {
    return (
        <div className="comment-card">
            <h4>{movie_name}</h4>
            <p>{comment}</p>
            <p>{movie_rating}</p>
        </div>
    )
}

export default CommentCard;