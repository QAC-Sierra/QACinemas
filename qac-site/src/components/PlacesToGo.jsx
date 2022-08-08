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

							<p>***SPECIAL OFFERS***
								<div>
									Half Price Cinema Tickets
								</div>
							</p>

							<p>Opening Hours:
								<div
								>Monday - Friday:
								</div>
								<div>
									Weekends:
								</div>
							</p>

							<p>Contact:
								<div>
									Phone:
								</div>
								<div>
									Email:
								</div>
							</p>
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis">Click Here For More Info</small>
					</CCardFooter>
				</CCard>
			</CCol>
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle>Rotunda Bar & Lounge</CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>
							Perfect for after work drinks, pre-dinner aperitivo or a nightcap, Rotunda Bar offers an impressive menu of creative cocktails,
							refined classics and rare vintage spirits as well as delicious bar snacks to share. An impressive array of whiskies and vintage spirits
							are organised into a timeline of the history of Ten Trinity Square. Mostly one-of-a-kind, the extensive list in the selection date back
							to 1922, when the Port of London Authority headquarters officially opened.
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis">Click Here For More Info</small>
					</CCardFooter>
				</CCard>
			</CCol>
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle></CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>

						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis">Click Here For More Info</small>
					</CCardFooter>
				</CCard>
			</CCol>
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle>Mumbai Masala</CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>
							IMMERSIVE EXPERIENCE AWARD-WINNING WRITERS Mumbai Masala is a spicy new immersive dance show, with hip shaking dances, heartbreaking romance,
							hilarious comedy, washed down with tantalising drama and delectable cuisine. Brought to you by the award-winning writer and director of the sell
							out West End shows Taj Express and Merchants of Bollywood , the show is performed by the three lead actors from Merchants of Bollywood, stars of
							stage and screen: Sadhwi Majumder, Arif Zakaria and Sushant Pujari, and crafted by leading Bollywood choreographers The Poojary Brothers, Mumbai
							Masala is a dazzling new immersive theatrical spectacular.
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis">Click Here For More Info</small>
					</CCardFooter>
				</CCard>
			</CCol>
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle>Sky Garden</CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>
							The famous enlarged glass dome of 20 Fenchurch Street is dedicated to three storeys of exquisitely landscaped public gardens and London's most
							exclusive social spaces, including observation decks and an open air terrace. Sky Garden also houses restaurants Darwin Brasserie, Fenchurch
							Seafood Bar & Grill and Sky Pod Bar.
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis">Click Here For More Info</small>
					</CCardFooter>
				</CCard>
			</CCol>
			<CCol xs>
				<CCard className="h-100">
					<CCardTitle>Tower Bridge</CCardTitle>
					<CCardImage orientation="top" src="/images/react.jpg" />
					<CCardBody>
						<CCardText>
							An iconic London landmark and one of Britain's best loved historic sites, Tower Bridge is open to the public 363 days a year. Within the Bridge's
							iconic structure and magnificent Victorian Engine rooms, the Tower Bridge Exhibition is the best way of exploring the most famous bridge in the world!
							Come learn about this incredible feat of Victorian engineering, discover how the Bridge is raised and enjoy stunning panoramic views across London from
							our high-level walkways, 42 metres above the River Thames. Opening Times: 09:30 - 17:00 (last admission )
						</CCardText>
					</CCardBody>
					<CCardFooter>
						<small className="text-medium-emphasis">Click Here For More Info</small>
					</CCardFooter>
				</CCard>
			</CCol>
		</CRow>
	)
}
export default PlacesToGo;