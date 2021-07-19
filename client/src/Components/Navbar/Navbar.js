import React, {useState} from 'react'
import { Navbar, Container, Nav, NavDropdown, Card, Button, Row, Col} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom'; 
import './styles.css';

const Navigation = () => {
  let history = useHistory()
  const toBrands = () => {
    history.push('/brands')
  }
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
                  <NavDropdown title="Top Brands"id="navbarDropdown" className="navBtns" as={Link} to={'/brands'}>
                    <NavDropdown.Item>  
                      <Card>
                        <Row class="row">
                          <Col class="col">
                              <a class="imgBrand" href="https://www.off---white.com/en-us/?gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQxP9D5xyjhzu6aD-W7nOebdzn6bmekwjT4NqBU2bGLI2DIwiAMztUQaAvLwEALw_wcB&gclsrc=aw.ds">
                                Off-White
                              </a>
                              <a class="imgBrand" href="https://www.supremenewyork.com/">
                                Supreme
                              </a>
                              <a class="imgBrand" href="https://kawsone.com/">
                                KAWS
                              </a>
                          </Col>
                        </Row>
                        <Button onClick={toBrands}>See More!</Button>
                      </Card>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="navBtns" as={Link} to={'/login'}>Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}

export default Navigation
