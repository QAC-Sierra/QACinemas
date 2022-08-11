import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import About from "./About";
import Classifications from "./Classifications";
import Contact from "./Contact";
import GettingThere from "./GettingThere";
import DiscussionBoard from "../components/DiscussionBoard";
import HomePage from "./HomePage";
import ListingsGallery from "./ListingsGallery";
import NewReleases from "./NewReleases";
import OpeningTimes from "./OpeningTimes";
import PlacesToGo from "./PlacesToGo";
import Screens from "./Screens";
import TicketBookings from "./TicketBookings";
import {useState} from "react";
import {
	CNavbar,
	CContainer,
	CNavbarBrand,
	CNavbarToggler,
	CCollapse,
	CNavbarNav,
	CNavItem,
	CNavLink,
	CDropdown,
	CDropdownToggle,
	CDropdownMenu,
	CDropdownItem,
	CDropdownDivider,
	CForm,
	CFormInput,
	CButton,
} from "@coreui/react";

const NavigationBar = () => {
	const [visible, setVisible] = useState(false);
	
	return (<Router>
		<>
			<CNavbar expand="lg" colorScheme="light" className="bg-light">
				<CContainer fluid>
					<CNavbarBrand>
						Navbar
					</CNavbarBrand>
					
					<CNavbarToggler onClick={() => setVisible(!visible)}/>
					
					<CCollapse className="navbar-collapse" visible={visible}>
						<CNavbarNav>
							<CNavItem>
								<CNavLink active>
									<Link to="/">Home</Link>
								</CNavLink>
							</CNavItem>
							<CNavItem>
								<CNavLink><Link to="/listings-gallery">Listings Gallery</Link></CNavLink>
							</CNavItem>
							
							<CNavItem>
								<CNavLink href="/new-releases">
									New Releases
								</CNavLink>
							</CNavItem>
							
							<CNavItem>
								<CNavLink href="/ticket-bookings">
									Bookings
								</CNavLink>
							</CNavItem>
							
							<CDropdown variant="nav-item" popper={false}>
								<CDropdownToggle color="secondary">
									More Info
								</CDropdownToggle>
								
								<CDropdownMenu>
									<CDropdownItem href="/opening-times">
										Opening Times
									</CDropdownItem>
									<CDropdownDivider/>
									
									<CDropdownItem href="/classifications">
										Classifications
									</CDropdownItem>
									<CDropdownDivider/>
									
									<CDropdownItem href="/screens">
										Screens
									</CDropdownItem>
									<CDropdownDivider/>
									
									<CDropdownItem href="/places-to-go">
										Places To Go
									</CDropdownItem>
									<CDropdownDivider/>
									
									<CDropdownItem href="/getting-there">
										Getting There
									</CDropdownItem>
									<CDropdownDivider/>
									
									<CDropdownItem href="/discussion-board">
										Discussion Board
									</CDropdownItem>
									<CDropdownDivider/>
									
									<CDropdownItem href="/about">
										About us
									</CDropdownItem>
									<CDropdownDivider/>
									
									<CDropdownItem href="/contact">
										Contact us
									</CDropdownItem>
								</CDropdownMenu>
							</CDropdown>
						</CNavbarNav>
					</CCollapse>
					
					<CForm className="d-flex">
						<CFormInput type="search" className="me-2" placeholder="Search Term"/>
						<CButton type="submit" color="success" variant="outline">
							Search
						</CButton>
					</CForm>
				
				</CContainer>
			</CNavbar>
		</>
		
		<Routes>
			<Route path="/" element={<HomePage/>}/>
			<Route path="/listings-gallery" element={<ListingsGallery/>}/>
			<Route path="/opening-times" element={<OpeningTimes/>}/>
			<Route path="/getting-there" element={<GettingThere/>}/>
			<Route path="/new-releases" element={<NewReleases/>}/>
			<Route path="/classifications" element={<Classifications/>}/>
			<Route path="/screens" element={<Screens/>}/>
			<Route path="/discussion-board" element={<DiscussionBoard/>}/>
			<Route path="/ticket-bookings" element={<TicketBookings/>}/>
			<Route path="/places-to-go" element={<PlacesToGo/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="/contact" element={<Contact/>}/>
		</Routes>
	</Router>);
};

export default NavigationBar;