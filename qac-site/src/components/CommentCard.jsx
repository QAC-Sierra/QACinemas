import React from "react";
import {CCard, CCardBody, CCardFooter, CCardHeader, CCardSubtitle} from "@coreui/react";
import "./styles/DiscussionBoard.css"

const CommentCard = ({name, movie_name, comment, movie_rating}) => {
	return (
		<CCard className="comment-card">
			<CCardHeader>
				{`User Name: ${name}`}
			</CCardHeader>
			<CCardSubtitle>
				{`Movie Title: ${movie_name}`}
			</CCardSubtitle>
			<CCardBody>
				{comment}
			</CCardBody>
			<CCardFooter>
				{`Rating: ${movie_rating}`}
			</CCardFooter>
		</CCard>
	)
}

export default CommentCard;