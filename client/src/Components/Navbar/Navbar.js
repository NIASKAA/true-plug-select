import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom'; 
import Auth from '../../utils/auth';
import './styles.css';

const Navigation = () => {

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
                  <NavLink exact activeClassName="active" className="navBtns" as={Link} to={'/'}>Home</NavLink>
                  <NavLink exact activeClassName="active"className="navBtns" as={Link} to={'/bids'}>Bids</NavLink>
                  <NavLink exact activeClassName="active"className="navBtns" as={Link} to={'/about'}>About Us</NavLink>
                  <NavLink exact activeClassName="active"className="navBtns" as={Link} to={'/brands'}>Top Brands</NavLink>
                  {Auth.loggedIn() ? (
                    <>
                      <NavLink exact activeClassName="active"className="navBtns" as={Link} to={"/profile"}>Profile</NavLink>
                      <NavLink exact activeClassName="active"className="navBtns" as={Link} to={"/checkout"}>Checkout</NavLink>
                      <NavLink exact activeClassName="active"className="navBtns" as={Link} to={"/recentlysold"}>Recently Sold</NavLink>
                      <Nav.Link exact activeClassName="active"className="navBtns" onClick={Auth.logout}>Logout</Nav.Link>
                    </>
                  ) : (
                    <Nav.Link exact activeClassName="active" className="navBtns" as={Link} to={'/login'}>Login</Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}

export default Navigation
