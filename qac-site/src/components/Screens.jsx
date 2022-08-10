import React from "react";
import "./styles/Screens.css"
import {CRow, CContainer, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CCardFooter} from '@coreui/react';

const Screens = () => {
	return (
    <CContainer>
      <h1>Screens</h1>
      <h4>Want a preview of what your screening will look like? Take a look below!</h4>
<CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="g-5">
  <CCol xs>
	<br></br>
    <CCard className="h-100" id="Card1">
	<CCardTitle id="SeatingTitle1">Standard Screening</CCardTitle>
	  <CCardImage orientation="top" src="https://simpledcp2-vvhvkfxrvp.netdna-ssl.com/content/uploads/2017/12/2017-03-29_014529-jpg.jpg?x26867" />
      <CCardBody>
        <CCardText>
          This is the venue for our standard screenings.
        </CCardText>
      </CCardBody>
      <CCardFooter>
        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
      </CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
  <br></br>
    <CCard className="h-100" id="Card2">
	<CCardTitle id="SeatingTitle2">Delux Screening</CCardTitle>
	  <CCardImage orientation="top" src="https://www.kentonline.co.uk/_media/img/Y13NW9LC0B721K0ASKEJ.jpg" />
      <CCardBody>
        <CCardText>
        This is the venue for our Delux screenings.
        </CCardText>
      </CCardBody>
      <CCardFooter>
        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
      </CCardFooter>
    </CCard>
  </CCol>
</CRow>
<br></br>
<CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="g-5">
  <CCol xs>
	<br></br>
    <CCard className="h-100" id="Card3">
	<CCardTitle id="SeatingTitle3">Standard Seating</CCardTitle>
	  <CCardImage orientation="top" src="https://homemcr.org/app/uploads/2015/04/Cinema-1-Seating-Plan.jpg" />
      <CCardBody>
        <CCardText>
          This is the seating plan for our standard 2d screenings.
        </CCardText>
      </CCardBody>
      <CCardFooter>
        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
      </CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
  <br></br>
    <CCard className="h-100" id="Card4">
	<CCardTitle id="SeatingTitle4">Delux Seating</CCardTitle>
	  <CCardImage orientation="top" src="https://homemcr.org/app/uploads/2015/04/Cinema-2.jpg" />
      <CCardBody>
        <CCardText>
        This is the seating plan for our Delux screenings.
        </CCardText>
      </CCardBody>
      <CCardFooter>
        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
      </CCardFooter>
    </CCard>
  </CCol>
</CRow>
</CContainer>
	)
}

export default Screens;

