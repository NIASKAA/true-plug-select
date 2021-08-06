import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button, Row, Col} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom'; 
import Auth from '../../utils/auth';
import './styles.css';

const Navigation = () => {
  let history = useHistory()
  const toBrands = () => {
    history.push('/brands')
  }
    return (
        <>
          <Navbar collapseOnSelect fixed="top" expand="sm" bg='light' variant="light">
            <Container>
              <Navbar.Toggle className='navbar-header' aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Link to={'/'}>
                   <img className= "logoIcon" src='/logo.png' alt="Logo"/> 
                  </Link>
                  <Nav.Link className="navBtns" as={Link} to={'/'}>Home</Nav.Link>
                  <Nav.Link className="navBtns" as={Link} to={'/bids'}>Bids</Nav.Link>
                  <Nav.Link className="navBtns" as={Link} to={'/about'}>About Us</Nav.Link>
                  <NavDropdown title="Top Brands"id="navbarDropdown" className="navBtns" as={Link} to={'/brands'}>
                    <NavDropdown.Item>  
                      <Button variant="light" className="navBtns" onClick={toBrands}>See More!</Button>
                    </NavDropdown.Item>
                  </NavDropdown>
                  {Auth.loggedIn() ? (
                    <>
                      <Nav.Link className="navBtns" as={Link} to={"/profile"}>Profile</Nav.Link>
                      <Nav.Link className="navBtns" as={Link} to={"/checkout"}>Checkout</Nav.Link>
                      <Nav.Link className="navBtns" as={Link} to={"/recentlysold"}>Recently Sold</Nav.Link>
                      <Nav.Link className="navBtns" onClick={Auth.logout}>Logout</Nav.Link>
                    </>
                  ) : (
                    <Nav.Link className="navBtns" as={Link} to={'/login'}>Login</Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}

export default Navigation
