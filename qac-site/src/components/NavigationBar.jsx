import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './About';
import Classifications from './Classifications';
import Contact from './Contact';
import GettingThere from './GettingThere';
import DiscussionBoard from '../components/DiscussionBoard';
import HomePage from './HomePage';
import ListingsGallery from './ListingsGallery';
import NewReleases from './NewReleases';
import OpeningTimes from './OpeningTimes';
import PlacesToGo from './PlacesToGo';
import Screens from './Screens';
import TicketBookings from './TicketBookings';
<<<<<<< Updated upstream
<<<<<<< Updated upstream

=======
=======
>>>>>>> Stashed changes
import LogInSignUp from './LogInSignUp';
import { useState } from 'react';
import {
  CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, CNavItem, CNavLink, CDropdown, CDropdownToggle,
  CDropdownMenu, CDropdownItem, CDropdownDivider, CForm, CFormInput, CButton
} from '@coreui/react';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

const NavigationBar = () => {
  const submit = () => {
    console.log("Called")
  }
  const [visible, setVisible] = useState(false)
  return (
    <Router>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      
      <div className="App">
        <nav>
            <button type="button" className="btn btn-outline-dark">
              <Link to="/">Home</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/listings-gallery">Listings Gallery</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/opening-times">Opening Times</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/getting-there">Getting There</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/new-releases">New Releases</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/classifications">Classifications</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/screens">Screens</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/discussion-board">Discussion Board</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/ticket-bookings">Ticket Bookings</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/places-to-go">Places To Go</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/about">About</Link>
            </button>
            <button type="button" className="btn btn-outline-dark">
              <Link className='link' to="/contact">Contact</Link>
            </button>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
=======
      <>
        <CNavbar expand="lg" colorScheme="light" className="bg-light">
          <CContainer fluid>
            <CNavbarBrand href="#">Navbar</CNavbarBrand>
            <CNavbarToggler onClick={() => setVisible(!visible)} />
            <CCollapse className="navbar-collapse" visible={visible}>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink href="./HomePage" active>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="./Listings-Gallery">
                    Listings Gallery
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="./New-Releases">
                    New Releases
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="./Ticket-Bookings">
                    Bookings
                  </CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">More Info</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="./Opening-Times">Opening Times</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./Classifications">Classifications</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./Places-To-Go">Places To Go</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./Getting-There">Getting There</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./Discussion-Board">Discussion Board</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./About">About us</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./Contact">Contact us</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem>
                </CNavItem>
              </CNavbarNav>
              <CForm className="d-flex" onSubmit={submit}>
                <CFormInput type="search" className="me-2" placeholder="Search Term" />
                <CButton type="submit" color="success" variant="outline">
                  Search
                </CButton>
              </CForm>
            </CCollapse>
          </CContainer>
        </CNavbar>
      </>

      <Routes>
        <Route path="/homepage" element={<HomePage />} />
>>>>>>> Stashed changes
=======
      <>
        <CNavbar expand="lg" colorScheme="light" className="bg-light">
          <CContainer fluid>
            <CNavbarBrand href="#">Navbar</CNavbarBrand>
            <CNavbarToggler onClick={() => setVisible(!visible)} />
            <CCollapse className="navbar-collapse" visible={visible}>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink href="./HomePage" active>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="./Listings-Gallery">
                    Listings Gallery
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="./New-Releases">
                    New Releases
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="./Ticket-Bookings">
                    Bookings
                  </CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">More Info</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="./Opening-Times">Opening Times</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./Classifications">Classifications</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./Places-To-Go">Places To Go</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./Getting-There">Getting There</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./Discussion-Board">Discussion Board</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./About">About us</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="./Contact">Contact us</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem>
                </CNavItem>
              </CNavbarNav>
              <CForm className="d-flex" onSubmit={submit}>
                <CFormInput type="search" className="me-2" placeholder="Search Term" />
                <CButton type="submit" color="success" variant="outline">
                  Search
                </CButton>
              </CForm>
            </CCollapse>
          </CContainer>
        </CNavbar>
      </>

      <Routes>
        <Route path="/homepage" element={<HomePage />} />
>>>>>>> Stashed changes
        <Route path="/listings-gallery" element={<ListingsGallery />} />
        <Route path="/opening-times" element={<OpeningTimes />} />
        <Route path="/getting-there" element={<GettingThere />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/classifications" element={<Classifications />} />
        <Route path="/screens" element={<Screens />} />
        <Route path="/discussion-board" element={<DiscussionBoard />} />
        <Route path="/ticket-bookings" element={<TicketBookings />} />
        <Route path="/places-to-go" element={<PlacesToGo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogInSignUp />} />
      </Routes>

    </Router>
  )
}
export default NavigationBar;