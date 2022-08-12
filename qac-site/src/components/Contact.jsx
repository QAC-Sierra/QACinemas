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
  CCardBody,
} from "@coreui/react";
import "./styles/Contact.css"

const Contact = () => {
  return (
    <CContainer>
      <br/>
      <h1 id="Title1"> Contact Us</h1>
      <h4>
            {" "}
            Have a query or an issue? Leave us an Email and we will get back to
            you within 48 hours!
          </h4>
          <br></br>
      <CCard className="Card" style={{ width: "40rem" }}>
        <CCardBody>
          <CForm
            action="https://formsubmit.co/saifhussain98@outlook.com"
            method="POST"
          >
            <CRow className="mb-3">
              <CCol sm={10}>
                <CFormInput
                  required
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="NameBox"
                  style={{ margin: "auto" }}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol sm={10}>
                <CFormInput
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="EmailBox"
                />
              </CCol>
            </CRow>

            <CRow className="mb-4">
            <CCol sm={10}>
              <CFormTextarea
                required
                type="comment"
                placeholder="Comment"
                name="comment"
                id="CommentBox"
                rows="3"
              />
              </CCol>
            </CRow>

            <div className="d-grid d-md-flex justify-content-md-left">
              <CButton type="submit">Send</CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>

      <p id="ContactText">
        Alternatively, if you would like to write to us, please mail to:
        <br/>
        Training Facility,
        <br/>
        Address Line 1,
        <br/>
        Address Line 2,
        <br/>
        City,
        <br/>
        PostCode
      </p>

    </CContainer>
  );
};

export default Contact;
