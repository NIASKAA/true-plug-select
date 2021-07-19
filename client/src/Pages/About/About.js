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
                    <h3 class="title text-center" id="aboutTitle">About Us</h3>
                </div>
                <p class="aboutText">
                    The Plug Select was made by 5 passionate individuals that just want a better community to purchase premium goods.
                </p>

                <Container>
                    <Row class="row justify-content-center">
                        <Col className="col-12 col-sm-8 col-lg-6">
                            <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={cardStyle}>
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
                                    <p class="designation">Leader, Designer</p>
                                    <p class="favBrand">Favorite Brand: Off-White</p>
                                    <p class="funFact">Fun Fact: "I collect collectibles"</p>
                                    <a href="https://github.com/NIASKAA" class="btn gitBtns">GITHUB</a>
                                </div>
                            </div>
                        </Col>
                    

                        <Col class="col">
                            <div class="teamMember wow fadeInUp" data-wow-delay="0.2s" style={cardStyle}>
                                <div class="teamInfo">
                                    <h6>Thomas</h6>
                                    <p class="designation">Back-End Developer</p>
                                    <p class="favBrand">Favorite Brand: Kith or Bodega </p>
                                    <p class="funFact">Fun Fact: "At one point in time, my Manga/Anime podcast was top 40 in Ireland" </p>
                                    <a href="https://github.com/thomasbolling87" class="btn gitBtns">GITHUB</a>
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
                                    <a href="https://github.com/smg061" class="btn gitBtns">GITHUB</a>
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
                                    <a href="https://github.com/avmancillas" class="btn gitBtns">GITHUB</a>
                                </div>
                            </div>
                        </Col>

                        <Col class="col-4">
                            <div class="teamMember wow fadeInUp" data-wow-delay="0.2s" style={cardStyle}>
                                <div class="teamInfo">
                                    <h6>Christian</h6>
                                    <p class="designation">Front-End Developer</p>
                                    <p class="favBrand">Favorite Brand: </p>
                                    <p class="funBrand">Fun Fact:</p>
                                    <a href="https://github.com/Clouis12" class="btn gitBtns">GITHUB</a>
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
