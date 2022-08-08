import React from "react";
import "./styles/Screens.css"
import {CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CCardFooter} from '@coreui/react';

const Screens = () => {
	return (
<CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="g-5">
  <CCol xs>
	<br></br>
    <CCard className="h-100" id="pic1">
	<CCardTitle>Standard Screening</CCardTitle>
	  <CCardImage orientation="top" src="https://simpledcp2-vvhvkfxrvp.netdna-ssl.com/content/uploads/2017/12/2017-03-29_014529-jpg.jpg?x26867" />
      <CCardBody>
        <CCardText>
          This is a wider card with supporting text below.
        </CCardText>
      </CCardBody>
      <CCardFooter>
        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
      </CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
  <br></br>
    <CCard className="h-100" id="pic">
	<CCardTitle>Delux Screening</CCardTitle>
	  <CCardImage orientation="top" src="https://www.kentonline.co.uk/_media/img/Y13NW9LC0B721K0ASKEJ.jpg" />
      <CCardBody>
        <CCardText>
          This card has supporting text below as a natural lead-in to additional content.
        </CCardText>
      </CCardBody>
      <CCardFooter>
        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
      </CCardFooter>
    </CCard>
  </CCol>
</CRow>
	)
}

export default Screens;

