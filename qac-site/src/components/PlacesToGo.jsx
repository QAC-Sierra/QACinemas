import React from "react";
import { CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CCardFooter, CCarousel, CCarouselItem, CImage, CContainer } from '@coreui/react';
import "./styles/PlacesToGo.css";

const PlacesToGo = () => {
	return (
		<>

			<header>
				<h1>Places To Go</h1>
			</header>
			<CContainer>
				<CRow xs={{ cols: 2 }} md={{ cols: 3 }} className="g-4">
					<CCol xs>
						<CCard className="h-100">
							<CCardTitle>Tower of London</CCardTitle>
							<CCarousel controls transition="crossfade" interval={false}>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/e6/d8/85/tower-of-london.jpg?w=1200&h=-1&s=1"
											alt="slide 1" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/ff/b4/a6/london-tower.jpg?w=2000&h=-1&s=1"
											alt="slide 2" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/11/8b/18/tower-of-london.jpg?w=1400&h=-1&s=1"
											alt="slide 3" />
									</div>
								</CCarouselItem>
							</CCarousel>
							<CCardBody>
								<CCardText>
									Discover London's castle - a secure fortress, royal palace and infamous prison where you can explore 1000 years of history.
									Prepare to be dazzled by the breathtaking, world famous Crown Jewels. Take a Yeoman Warder tour and hear captivating stories
									of pain and passion, treachery and torture. Meet the famous ravens and discover why they are known as the guardians of the Tower
									and marvel at the imposing White Tower, a magnificent example of Normal architecture at the heart of the Tower of London.

									<br />
									<br />
									<b>SPECIAL OFFERS</b>
									<br />
									2 Free Cinema Film Tickets @QA Cinemas when you book a family tour at Tower of London

									<br />
									<br />
									<b>Opening Hours:</b>
									<br />
									Monday - Friday: 09.00-17.30
									<br />
									Saturday - Sunday: 09.00-17.30

									<br />
									<br />
									<b>Contact:</b>
									<br />
									Phone: 0333 320 6000
									<br />
									Email: info@hrp.org.uk
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
							<CCarousel controls transition="crossfade" interval={false}>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/67/dc/ee/rotunda-bar.jpg?w=2000&h=-1&s=1"
											alt="slide 1" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/24/a5/dd/chocolate-panna-praline.jpg?w=1400&h=-1&s=1"
											alt="slide 2" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/24/a5/69/barrel-aged-cocktails.jpg?w=1400&h=-1&s=1"
											alt="slide 3" />
									</div>
								</CCarouselItem>
							</CCarousel>
							<CCardBody>
								<CCardText>
									Perfect for after work drinks, pre-dinner aperitivo or a nightcap, Rotunda Bar offers an impressive menu of creative cocktails,
									refined classics and rare vintage spirits as well as delicious bar snacks to share. An impressive array of whiskies and vintage spirits
									are organised into a timeline of the history of Ten Trinity Square. Mostly one-of-a-kind, the extensive list in the selection date back
									to 1922, when the Port of London Authority headquarters officially opened.

									<br />
									<br />
									<b>SPECIAL OFFERS</b>
									<br />
									63% off Cinema Tickets when you order Lunch/Dinner for Two

									<br />
									<br />
									<b>Opening Hours:</b>
									<br />
									Monday - Thursday, Sunday: 12.00-23.00
									<br />
									Friday - Saturday: 12.00-00.30

									<br />
									<br />
									<b>Contact:</b>
									<br />
									Phone: 0203 297 3799
									<br />
									Email: diningreservations.tri@fourseasons.com
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
							<CCarousel controls transition="crossfade" interval={false}>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://searcysatthegherkin.co.uk/uploads/2020/12/The-Gherkin-low-scaled.jpg"
											alt="slide 1" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://thegherkin.com/wp-content/uploads/2022/01/01_Home_DBOX_Pano_L30_WEST_desktop-2160x765.jpg"
											alt="slide 2" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://media.istockphoto.com/photos/day-cityscape-view-of-london-picture-id536954517?k=20&m=536954517&s=612x612&w=0&h=8bHPLOM9AE16oQtt5XUAsQgRRVcdrWRiRSAJsmTGwZ8="
											alt="slide 3" />
									</div>
								</CCarouselItem>
							</CCarousel>
							<CCardBody>
								<CCardText>
									London's first ecological tall building and an instantly recognisable addition to the city's skyline, this headquarters designed for Swiss Re
									is rooted in a radical approach - technically, architecturally, socially and spatially. Forty-one storeys high, it provides 46,400 square metres
									net of office space together with an arcade of shops and cafés accessed from a newly created piazza. At the summit is a club room that offers a
									spectacular 360-degree panorama across the capital.

									<br />
									<br />
									<b>SPECIAL OFFERS</b>
									<br />
									Early Bird Special - Half Price QA Cinema Ticket when you spend £10 or more on our Breakfast menu.

									<br />
									<br />
									<b>Opening Hours:</b>
									<br />
									Monday - Sunday: Open 24 hours

									<br />
									<br />
									<b>Contact:</b>
									<br />
									Phone: 0207 071 5000
									<br />
									Email: enquiries@thegherkin.com
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
							<CCarousel controls transition="crossfade" interval={false}>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://www.whatsonstage.com/dyn/graphics/whatsonstage/v1w1200/mumbai-masala-a-bollywood-cabaret-spectacular-48489.jpeg"
											alt="slide 1" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/7e/0d/44/caption.jpg?w=1400&h=-1&s=1"
											alt="slide 2" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://i.ytimg.com/vi/fM00Sya4QMg/maxresdefault.jpg"
											alt="slide 3" />
									</div>
								</CCarouselItem>
							</CCarousel>
							<CCardBody>
								<CCardText>
									Mumbai Masala is a spicy new immersive dance show, with hip shaking dances, heartbreaking romance, hilarious comedy, washed down
									with tantalising drama and delectable cuisine. Brought to you by the award-winning writer and director of the sell out West End
									shows Taj Express and Merchants of Bollywood, the show is performed by the three lead actors from Merchants of Bollywood, stars of
									stage and screen: Sadhwi Majumder, Arif Zakaria and Sushant Pujari.

									<br />
									<br />
									<b>SPECIAL OFFERS</b>
									<br />
									2for1 QA Cinema tickets when you book a show. Applicable on weekdays only.

									<br />
									<br />
									<b>Opening Hours:</b>
									<br />
									Monday - Friday: 15.00-22.00
									<br />
									Saturday - Sunday: 11.00-00.30

									<br />
									<br />
									<b>Contact:</b>
									<br />
									Phone: 0207 482 3867
									<br />
									Email: embankment@proud.co.uk
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
							<CCarousel controls transition="crossfade" interval={false}>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ca/96/33/sky.jpg?w=2000&h=-1&s=1"
											alt="slide 1" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/4a/1e/81/the-darwin-brasserie.jpg?w=1600&h=-1&s=1"
											alt="slide 2" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/4a/1e/80/the-vinoly-room.jpg?w=1600&h=-1&s=1"
											alt="slide 3" />
									</div>
								</CCarouselItem>
							</CCarousel>
							<CCardBody>
								<CCardText>
									The famous enlarged glass dome of 20 Fenchurch Street is dedicated to three storeys of exquisitely landscaped public gardens and London's most
									exclusive social spaces, including observation decks and an open air terrace. Sky Garden also houses restaurants Darwin Brasserie, Fenchurch
									Seafood Bar & Grill and Sky Pod Bar.

									<br />
									<br />
									<b>SPECIAL OFFERS</b>
									<br />
									Spend over £25 at Sky Garden to receive a whopping 80% of Cinema tickets for 2 @QA Cinemas.

									<br />
									<br />
									<b>Opening Hours:</b>
									<br />
									Monday - Friday: 06.30-00.00
									<br />
									Saturday - Sunday: 07.30-01.00

									<br />
									<br />
									<b>Contact:</b>
									<br />
									Phone: 0207 337 2344
									<br />
									Email: skygarden@20fenchurchstreet.co.uk
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
							<CCarousel controls transition="crossfade" interval={false}>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/8d/60/eb/tower-bridge.jpg?w=1000&h=-1&s=1"
											alt="slide 1" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/24/2e/27/caption.jpg?w=1400&h=-1&s=1"
											alt="slide 2" />
									</div>
								</CCarouselItem>
								<CCarouselItem>
									<div style={{ width: "100%" }}>
										<CImage
											orientation="top"
											className="d-block placesImg"
											src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/df/6d/94/tower-bridge.jpg?w=2000&h=-1&s=1"
											alt="slide 3" />
									</div>
								</CCarouselItem>
							</CCarousel>
							<CCardBody>
								<CCardText>
									An iconic London landmark and one of Britain's best loved historic sites, Tower Bridge is open to the public 363 days a year. Within the Bridge's
									iconic structure and magnificent Victorian Engine rooms, the Tower Bridge Exhibition is the best way of exploring the most famous bridge in the world!
									Come learn about this incredible feat of Victorian engineering, discover how the Bridge is raised and enjoy stunning panoramic views across London from
									our high-level walkways, 42 metres above the River Thames.

									<br />
									<br />
									<b>SPECIAL OFFERS</b>
									<br />
									Buy One Get One Free Cinema Tickets @QA Cinemas when you recommend us to 2 family members or friends. T&C's applies.

									<br />
									<br />
									<b>Opening Hours:</b>
									<br />
									Monday - Sunday: 09.00-18.00

									<br />
									<br />
									<b>Contact:</b>
									<br />
									Phone: 0207 403 3761
									<br />
									Email: enquiries@towerbridge.org.uk
								</CCardText>
							</CCardBody>
							<CCardFooter>
								<small className="text-medium-emphasis"><a href="https://www.towerbridge.org.uk/">Click Here For More Info</a></small>
							</CCardFooter>
						</CCard>
					</CCol>
				</CRow>
			</CContainer>
		</>
	)
}
export default PlacesToGo;