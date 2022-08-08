import React from "react";
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CCardFooter } from '@coreui/react';

const PlacesToGo = () => {
	return (
		<CRow xs={{ cols: 2 }} md={{ cols: 3 }} className="g-4">
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle>Tower of London</CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>
							<p>
								Discover London's castle - a secure fortress, royal palace and infamous prison where you can explore 1000 years of history.
								Prepare to be dazzled by the breathtaking, world famous Crown Jewels. Take a Yeoman Warder tour and hear captivating stories
								of pain and passion, treachery and torture. Meet the famous ravens and discover why they are known as the guardians of the Tower
								and marvel at the imposing White Tower, a magnificent example of Normal architecture at the heart of the Tower of London.
							</p>

							<p>
								<b>***SPECIAL OFFERS***</b>
								<div>2 Free Cinema Film Tickets @QA Cinemas when you book a family tour at Tower of London</div>
							</p>

							<p>
								<b>Opening Hours:</b>
								<div>Monday - Friday: 09.00-17.30</div>
								<div>Saturday - Sunday: 09.00-17.30</div>
							</p>

							<p>
								<b>Contact:</b>
								<div>Phone: 0333 320 6000</div>
								<div>Email: info@hrp.org.uk</div>
							</p>
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis"><a href="https://www.hrp.org.uk/tower-of-london/#gs.imzFnKo/">Click Here For More Info</a></small>
					</CCardFooter>
				</CCard>
			</CCol>
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle>Rotunda Bar & Lounge</CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>
							<p>
								Perfect for after work drinks, pre-dinner aperitivo or a nightcap, Rotunda Bar offers an impressive menu of creative cocktails,
								refined classics and rare vintage spirits as well as delicious bar snacks to share. An impressive array of whiskies and vintage spirits
								are organised into a timeline of the history of Ten Trinity Square. Mostly one-of-a-kind, the extensive list in the selection date back
								to 1922, when the Port of London Authority headquarters officially opened.
							</p>

							<p>
								<b>***SPECIAL OFFERS***</b>
								<div>63% off Cinema Tickets when you order Lunch/Dinner for Two</div>
							</p>

							<p>
								<b>Opening Hours:</b>
								<div>Monday - Thursday, Sunday: 12.00-23.00</div>
								<div>Friday - Saturday: 12.00-00.30</div>
							</p>

							<p>
								<b>Contact:</b>
								<div>Phone: 0203 297 3799</div>
								<div>Email: diningreservations.tri@fourseasons.com</div>
							</p>
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis"><a href="https://www.fourseasons.com/tentrinity/dining/bars/rotunda-bar/">Click Here For More Info</a></small>
					</CCardFooter>
				</CCard>
			</CCol>
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle>30 St Mary Axe (The Gherkin)</CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>
							<p>
								London's first ecological tall building and an instantly recognisable addition to the city's skyline, this headquarters designed for Swiss Re
								is rooted in a radical approach - technically, architecturally, socially and spatially. Forty-one storeys high, it provides 46,400 square metres
								net of office space together with an arcade of shops and cafés accessed from a newly created piazza. At the summit is a club room that offers a
								spectacular 360-degree panorama across the capital.
							</p>

							<p>
								<b>***SPECIAL OFFERS***</b>
								<div>Early Bird Special - Half Price QA Cinema Ticket when you spend £8 on our Breakfast menu.</div>
							</p>

							<p>
								<b>Opening Hours:</b>
								<div>Monday - Sunday: Open 24 hours</div>
							</p>

							<p>
								<b>Contact:</b>
								<div>Phone: 0207 071 5000</div>
								<div>Email: enquiries@thegherkin.com</div>
							</p>
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis"><a href="https://thegherkin.com/">Click Here For More Info</a></small>
					</CCardFooter>
				</CCard>
			</CCol>
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle>Mumbai Masala</CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>
							<p>
								Mumbai Masala is a spicy new immersive dance show, with hip shaking dances, heartbreaking romance, hilarious comedy, washed down
								with tantalising drama and delectable cuisine. Brought to you by the award-winning writer and director of the sell out West End
								shows Taj Express and Merchants of Bollywood, the show is performed by the three lead actors from Merchants of Bollywood, stars of
								stage and screen: Sadhwi Majumder, Arif Zakaria and Sushant Pujari.
							</p>

							<p>
								<b>***SPECIAL OFFERS***</b>
								<div>2for1 QA Cinema tickets when you book a show. Applicable on weekdays only.</div>
							</p>

							<p>
								<b>Opening Hours:</b>
								<div>Monday - Friday: 15.00-22.00</div>
								<div>Saturday - Sunday: 11.00-00.30</div>
							</p>

							<p>
								<b>Contact:</b>
								<div>Phone: 0207 482 3867</div>
								<div>Email: embankment@proud.co.uk</div>
							</p>
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis"><a href="https://proudcabaret.com/collections/proud-cabaret-city/products/mumbai-masala-at-proud-city">Click Here For More Info</a></small>
					</CCardFooter>
				</CCard>
			</CCol>
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle>Sky Garden</CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>
							<p>
								The famous enlarged glass dome of 20 Fenchurch Street is dedicated to three storeys of exquisitely landscaped public gardens and London's most
								exclusive social spaces, including observation decks and an open air terrace. Sky Garden also houses restaurants Darwin Brasserie, Fenchurch
								Seafood Bar & Grill and Sky Pod Bar.
							</p>

							<p>
								<b>***SPECIAL OFFERS***</b>
								<div>Spend over £25 at Sky Garden to receive a whopping 80% of Cinema tickets for 2 @QA Cinemas.</div>
							</p>

							<p>
								<b>Opening Hours:</b>
								<div>Monday - Friday: 06.30-00.00</div>
								<div>Saturday - Sunday: 07.30-01.00</div>
							</p>

							<p>
								<b>Contact:</b>
								<div>Phone: 0207 337 2344</div>
								<div>Email: skygarden@20fenchurchstreet.co.uk</div>
							</p>
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis"><a href="https://skygarden.london/">Click Here For More Info</a></small>
					</CCardFooter>
				</CCard>
			</CCol>
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle>Tower Bridge</CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>
							<p>
								An iconic London landmark and one of Britain's best loved historic sites, Tower Bridge is open to the public 363 days a year. Within the Bridge's
								iconic structure and magnificent Victorian Engine rooms, the Tower Bridge Exhibition is the best way of exploring the most famous bridge in the world!
								Come learn about this incredible feat of Victorian engineering, discover how the Bridge is raised and enjoy stunning panoramic views across London from
								our high-level walkways, 42 metres above the River Thames.
							</p>

							<p>
								<b>***SPECIAL OFFERS***</b>
								<div>Buy One Get One Free Cinema Tickets @QA Cinemas when you recommend us to 2 family members or friends. T&C's applies.</div>
							</p>

							<p>
								<b>Opening Hours:</b>
								<div>Monday - Sunday: 09.00-18.00</div>
							</p>

							<p>
								<b>Contact:</b>
								<div>Phone: 0207 403 3761</div>
								<div>Email: enquiries@towerbridge.org.uk</div>
							</p>
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis"><a href="https://www.towerbridge.org.uk/">Click Here For More Info</a></small>
					</CCardFooter>
				</CCard>
			</CCol>
		</CRow>
	)
}
export default PlacesToGo;