import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './style.css'

const About = () => {
    const cardStyle = {
        visibility: "visible",
        animationDelay: '0.2s',
        animationName: "fadeInUp"
    }
    return (
        <>
            <article>
                <div class="container-fuild" id="aboutContain">
                    <h3 class="title " id="aboutTitle">About Us</h3>
                </div>
                <p class="aboutText">
                    The Plug Select was made by 4 passionate individuals that just want a better community to purchase premium goods.
                </p>
        
                <Container>
                    <Row class="row justify-content-center">
                        <Col className="col-12 col-sm-8 col-lg-6">
                            <div class="section_heading  wow fadeInUp" data-wow-delay="0.2s" style={cardStyle}>
                                <h3 class="aboutText">Our Team Consists Of:</h3>
                                <div class="line"></div>
                            </div>
                        </Col>
                    </Row>

                    <Row class="row justify-content-center">
                        <Col class="col">
                            <div class="teamMember wow fadeInUp" data-wow-delay="0.2s" style={cardStyle}>
                                <div class="teamInfo">
                                    <h6>Alan</h6>
                                    <p class="designation">Leader, Front and Back-End Developer</p>
                                    <p class="favBrand">Favorite Brand: Off-White</p>
                                    <p class="funFact">Fun Fact: "I love Gundam."</p>
                                    <p class="btn gitBtns" id= ""><a href="https://github.com/NIASKAA">GITHUB </a></p>
                                </div>
                            </div>
                        </Col>
                    

                        <Col class="col">
                            <div class="teamMember wow fadeInUp" data-wow-delay="0.2s" style={cardStyle}>
                                <div class="teamInfo">
                                    <h6>Thomas</h6>
                                    <p class="designation">Back-End Developer</p>
                                    <p class="favBrand">Favorite Brand: Kith or Bodega </p>
                                    <p class="funFact">Fun Fact: "At one point in time, my Manga podcast was top 40 in Ireland" </p>
                                    <p class="btn gitBtns" id= ""><a href="https://github.com/thomasbolling87">GITHUB </a></p>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>

                    <Row class="row justify-content-center">
                        <Col class="col-4">
                            <div class="teamMember wow fadeInUp" data-wow-delay="0.2s" style={cardStyle}>
                                <div class="teamInfo">
                                    <h6>Avi</h6>
                                    <p class="designation">Front-End Developer</p>
                                    <p class="favBrand">Favorite Brand: Chanel</p>
                                    <p class="funFact">Fun Fact: "I can speak some Russian and French"</p>
                                    <p class="btn gitBtns" id= ""><a href="https://github.com/avmancillas">GITHUB </a></p>
                                </div>
                            </div>
                        </Col>
                        <Col class="col">
                            <div class="teamMember wow fadeInUp" data-wow-delay="0.2s" style={cardStyle}>
                                <div class="teamInfo">
                                    <h6>Santos</h6>
                                    <p class="designation">Back-End Developer</p>
                                    <p class="favBrand">Favorite Brand: Gucci </p>
                                    <p class= "funFact">Fun Fact: "I play guitar. My favorite brand is Fender" </p>
                                    <p class="btn gitBtns" id= ""><a href="https://github.com/smg061">GITHUB </a></p>
                                </div>
                            </div>
                        </Col>
                    </Row> 
                </Container>
            </article>    
        </>
    )
}

export default About
