import React from "react";
import {
  CRow,
  CContainer,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from "@coreui/react";
import "./styles/DirectionsAndOpeningTimes.css";

const GettingThere = () => {
  return (
    <>
      <CContainer>
        <br />
        <h1>Directions and Opening Times</h1>
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-3">
          <CCol xs>
            <br></br>
            <CCard className="h-100" id="Card1">
              <CCardTitle>Address</CCardTitle>
              <CCardBody>
                <CCardText>
                  International House,
                  <br />
                  1 St. Katharine’s Way,
                  <br />
                  London,
                  <br />
                  E1W 1UN.
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <small className="text-medium-emphasis">
                  Last updated 3 mins ago
                </small>
              </CCardFooter>
            </CCard>
          </CCol>

          <CCol xs>
            <br></br>
            <CCardImage
              id="building"
              src="https://dr3h7ptpe31k5.cloudfront.net/Assets/images/5202/Serviced-Office-(Creative)-London-London-1-St.-Katharines-Way-1275861.jpg"
            />
          </CCol>

          <CCol xs>
            <br></br>
            <CCard className="h-100" id="Card2">
              <CCardTitle>Parking</CCardTitle>
              <CCardBody>
                <CCardText>
                  Minories Car Park,
                  <br />
                  1 Shorter St,
                  <br />
                  London, E1 8LP.
                  <br />
                  <br />
                  Yamaha Car Parking,
                  <br />
                  54 John Fisher St,
                  <br />
                  London, E1 8JU.
                  <br />
                  <br />
                  Parking St. Katharine Docks,
                  <br />
                  17 Millers Wharf House,
                  <br />
                  78 St Katharine’s Way,
                  <br />
                  London, E1W 1UE.
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <small className="text-medium-emphasis">
                  Last updated 3 mins ago
                </small>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
        <br></br>

        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-3">
          <CCol xs>
            <br></br>
            <CCard className="h-100" id="Card3">
              <CCardTitle> Opening Hours</CCardTitle>
              <CCardBody>
                <CCardText>
                  Cinema Opening Hours:
                  <br />
                  Monday – Thursday: 10:00 – 22:30
                  <br />
                  Friday – Saturday: 10:00 – 00:30
                  <br />
                  Sunday: 11:00 – 22:30
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <small className="text-medium-emphasis">
                  Last updated 3 mins ago
                </small>
              </CCardFooter>
            </CCard>
          </CCol>

          <CCol xs>
            <br></br>
            <CCardImage
              id="building"
              src="https://assets.savills.com/properties/67877EC7-C24A-43DC-B47F-761D353B51A9/2021_02_26-0889_l_gal.jpg"
            />
          </CCol>

          <CCol xs>
            <br></br>
            <CCard className="h-100" id="Card4">
              <CCardTitle>Directions</CCardTitle>
              <CCardBody>
                <CCardText>
                  Directions From Train Stations:
                  <br />
                  Train Station: Tower Hill
                  <br />
                  Directions:
                  <br />
                  Start: Tower Hill Underground Station
                  <br />
                  Walk south (10yd)
                  <br />
                  Turn Left (30yd)
                  <br />
                  Turn Right (90yd)
                  <br />
                  Turn Left towards St. Katharine’s Way (0.1m)
                  <br />
                  Turn Right towards St. Katharine’s Way (20yd)
                  <br />
                  Turn Right towards St. Katharine’s Way (10yd)
                  <br />
                  Turn Left onto St. Katharine’s Way (140yd)
                  <br />
                  End: International House, E1W 1UN
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <small className="text-medium-emphasis">
                  Last updated 3 mins ago
                </small>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>

        <CRow className="RowEnd">
          <header>
            <h1>Need a map? No problem</h1>
            <h5>
              Here you can find directions to the venue, information on local
              public transport and parking.
            </h5>
          </header>
          <iframe
            width="399"
            height="397"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=399&amp;height=397&amp;hl=en&amp;q=St%20Katherine's%20Way%20London+(International%20House)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://embedmap.org/"></a>
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=27f0e6ffc7729411a13680bda27282c29f99658d"
          ></script>
          <br />
        </CRow>
      </CContainer>
    </>
  );
};

export default GettingThere;
