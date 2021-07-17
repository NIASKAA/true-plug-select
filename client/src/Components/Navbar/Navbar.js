import React, {useState} from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import './styles.css';

const Navigation = () => {
    return (
        <>
          <Navbar collapseOnSelect fixed="top" expand="sm" bg='dark' variant="dark">
            <Container>
              <Navbar.Toggle className='navbar-header' aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link className="navBtns" as={Link} to={'/'}>Home</Nav.Link>
                  <Nav.Link className="navBtns" as={Link} to={'/bids'}>Bids</Nav.Link>
                  <Nav.Link className="navBtns" as={Link} to={'/about'}>About</Nav.Link>
                  <Nav.Link className="navBtns" as={Link} to={'/brands'}>Top Brands</Nav.Link>
                  <Nav.Link className="navBtns" as={Link} to={'/login'}>Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}

export default Navigation
