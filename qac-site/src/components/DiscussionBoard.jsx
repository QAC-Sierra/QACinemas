import React from "react";
import {
	CContainer,
	CFormInput,
	CForm,
	CRow,
	CFormLabel,
	CCol,
	CFormCheck,
	CButton,
	CFormTextarea,
	CCard,
	CCardBody
} from "@coreui/react";
import "./styles/DiscussionBoard.css"


const DiscussionBoard = () => {
	return (
		<CContainer>
			<h1 id="Title1"> Reviews and Discussion Board</h1>
			<CCard id="card1" style={{width: '40rem'}}>
				<CCardBody>
					<h3> Leave a review, We'd love to know what you thought of the movie!</h3>
					<CForm>
						<CRow className="mb-3">
							{/* <CFormLabel className="col-sm-2 col-form-label">Name</CFormLabel> */}
							<CCol sm={10}>
								<CFormInput placeholder="Name" id="Name1" style={{margin: "auto"}}/>
							</CCol>
						</CRow>
						<CRow className="mb-3">
							{/* <CFormLabel className="col-sm-2 col-form-label">Movie Name</CFormLabel> */}
							<CCol sm={10}>
								<CFormInput placeholder="Movie Name" id="MovieName1"/>
							</CCol>
						</CRow>
						{/* <CRow className="mb-3">
    <CFormLabel className="col-sm-2 col-form-label">Comments</CFormLabel>
	<CCol sm={10} >
      <CFormInput type="comment" id="Comment1"/>
	  </CCol>
  </CRow> */}
						<CRow className="mb-3">
							{/*<CForm>*/}
							<CFormTextarea placeholder="Comment" id="Comment" rows="3"
							               style={{
								               resize: "none",
								               height: "200px",
								               width: "500px",
								               margin: "auto"
							               }}/>
							{/*</CForm>*/}
						</CRow>
						<fieldset className="row mb-3">
							<legend className="col-form-label col-sm-2 pt-0">Movie Rating</legend>
							<CCol sm={10}>
								<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1"
								            value="option1" label="1"/>
								<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2"
								            value="option2" label="2"/>
								<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3"
								            value="option3" label="3"/>
								<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3"
								            value="option3" label="4"/>
								<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3"
								            value="option3" label="5"/>
							</CCol>
						</fieldset>
						<div className="d-grid d-md-flex justify-content-md-center">
							<CButton color="primary" className="me-md-2">
								Submit
							</CButton>
							<CButton color="dark">Reset</CButton>
						</div>
					
					</CForm>
				</CCardBody>
			</CCard>
		</CContainer>
	)
}

export default DiscussionBoard