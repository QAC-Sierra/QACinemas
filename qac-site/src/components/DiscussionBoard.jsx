import React from "react";
import {
	CContainer, CFormInput, CForm, CRow, CCol, CFormCheck, CButton, CFormTextarea, CCard, CCardBody,
} from "@coreui/react";
import "./styles/DiscussionBoard.css";
import axios from "axios";
import {useEffect, useState} from "react";
import CommentCard from "./CommentCard";

const DiscussionBoard = () => {
	const [comments, setComments] = useState([]);
	
	const getComments = () => {
		axios.get("http://localhost:4494/comments/getAll")
			.then((res) => {
				console.log(res);
				setComments(res.data.data);
			})
			.catch((err) => console.error(err))
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4494/comments/create", {
			name: document.getElementById("NameBox").value,
			movie_name: document.getElementById("MovieNameBox").value,
			comment: document.getElementById("CommentBox").value,
			movie_rating: document.querySelector("input[name='inlineRadioOptions']:checked").value
			
		}).then(() => {
			getComments();
			document.getElementById("NameBox").value = "";
			document.getElementById("MovieNameBox").value = "";
			document.getElementById("CommentBox").value = "";
			document.querySelector("input[name='inlineRadioOptions']:checked").value = "";
		}).catch((err) => {
			console.error(err);
			document.getElementById("NameBox").value = "";
			document.getElementById("MovieNameBox").value = "";
			document.getElementById("CommentBox").value = "";
			document.querySelector("input[name='inlineRadioOptions']").setAttribute('checked', "false");
		});
	}
	
	useEffect(getComments, [])
	
	return (
		<>
			<CContainer>
				<h1 id="Title1"> Reviews and Discussion Board</h1>
				<h3>
					{" "}
					Leave a review, We'd love to know what you thought of the movie!
				</h3>
				<br/>
				<div className="comment-card">
					{comments.map((comment) => <CommentCard key={comment._id} {...comment}/>)}
				</div>
				<CCard className="CardStyle" style={{width: "40rem"}}>
					<CCardBody>
						<CForm onSubmit={handleSubmit}>
							<CRow className="mb-3">
								<CCol sm={10}>
									<CFormInput
										required
										placeholder="Name"
										type="text"
										name="name"
										id="NameBox"
										style={{margin: "auto"}}
									/>
								</CCol>
							</CRow>
							
							<CRow className="mb-3">
								<CCol sm={10}>
									<CFormInput
										required
										placeholder="Movie Name"
										type="text"
										name="movie"
										id="MovieNameBox"
									/>
								</CCol>
							</CRow>
							
							<CRow className="mb-3">
								<CFormTextarea
									required
									placeholder="Comment"
									type="comment"
									name="comment"
									id="CommentBox"
									rows="3"
								/>
							</CRow>
							
							<fieldset className="row mb-3">
								<legend className="col-form-label col-sm-2 pt-0">
									Movie Rating
								</legend>
								<CCol sm={10} id="MovieRatingBox">
									<CFormCheck
										inline
										type="radio"
										name="inlineRadioOptions"
										id="inlineCheckbox1"
										value={1}
										label="1"
									/>
									<CFormCheck
										inline
										type="radio"
										name="inlineRadioOptions"
										id="inlineCheckbox2"
										value={2}
										label="2"
									/>
									<CFormCheck
										inline
										type="radio"
										name="inlineRadioOptions"
										id="inlineCheckbox3"
										value={3}
										label="3"
									/>
									<CFormCheck
										inline
										type="radio"
										name="inlineRadioOptions"
										id="inlineCheckbox4"
										value={4}
										label="4"
									/>
									<CFormCheck
										inline
										type="radio"
										name="inlineRadioOptions"
										id="inlineCheckbox5"
										value={5}
										label="5"
									/>
								</CCol>
							</fieldset>
							
							<div className="d-grid d-md-flex justify-content-md-left">
								<CButton
									className="me-md-2"
									type="submit"
									color="primary"
									onClick={getComments}>
									Submit
								</CButton>
								
								<CButton
									type="reset"
									color="dark">
									Reset
								</CButton>
							</div>
						
						</CForm>
					</CCardBody>
				</CCard>
			</CContainer>
		</>
	);
};

export default DiscussionBoard;