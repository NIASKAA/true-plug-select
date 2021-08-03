import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap';
import './styles.css'
const TopBrands = () => {
    const imgStyle = {
        width: "50px",
        borderRadius: "8%"
    }
    return (
        <>
            <Container className='brandContainer'>
                <Card class="card-content">
                    <Row>
                        <Col>
                            <a class="imgBrand" href="https://www.off---white.com/en-us/?gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQxP9D5xyjhzu6aD-W7nOebdzn6bmekwjT4NqBU2bGLI2DIwiAMztUQaAvLwEALw_wcB&gclsrc=aw.ds">
                                <img style={imgStyle} alt="Off-White Shoe"/> Off-White
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://www.supremenewyork.com/">
                                <img style={imgStyle} alt="Supreme"/> Supreme
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://kawsone.com/">
                                <img style={imgStyle} alt="KAWS"/> KAWS
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://global.mastermindtokyo.com/">
                                <img style={imgStyle} alt="Mastermind"/> Mastermind
                            </a>
                        </Col>
                    </Row>

                    <Row>
                        <Col class="col">
                            <a class="imgBrand" href="https://www.balenciaga.com/en-us?ad=RSA&targetid=kwd-30438560&location=9027583&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQyV1umH0blZSXSktmuzMyq7Sy9TeMLMkv0uzNhxxFG_BwK_VCUmKZoaAiPJEALw_wcB">
                                <img style={imgStyle} alt="Balenciaga"/> Balenciaga
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://vetementswebsite.com/">
                                <img style={imgStyle} alt="Vetements"/> Vetements
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://www.adidas.com/us/y_3">
                                <img style={imgStyle} alt="Y-3"/> Y-3
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://www.gucci.com/us/en/?gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzxlypFu5rkT3hOT9-k6rOeq2pBMQlJdfS-Q4SUpob-NrhBTuDyP7saAjwnEALw_wcB">
                                <img style={imgStyle} alt="Gucci"/> Gucci
                            </a>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <a class="imgBrand" href="https://www.givenchy.com/us/en-US/homepage?cmpid&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQxL4X684dBlnlaYxdBnDpG913KgkBYoE1glZlQTR4GkdZttMQ0DvjgaAgTnEALw_wcB">
                                <img style={imgStyle} alt="Givenchy"/> Givenchy
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://www.burberry.com/">
                                <img style={imgStyle} alt="Burberry"/> Burberry
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://www.alexanderwang.com/us-en/women-newarrivals?tp=97228&utm_term=newarrivalslp&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQx687cThvyZ30Yc6gFFvy5sLOycWq2VP4nXMzzqgkRUXXIv9aCH4mcaAp9iEALw_wcB">
                                <img style={imgStyle} alt="Alexander Wang"/> Alexander Wang
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://www.ysl.com/en-us?ad=standard&targetid=kwd-17728831&location=9027599&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQx4zMdV_cDDe7a7Edc6Ayx7hjO5PXcL1-DxL0F_gQQw6rBTd5Be858aAudJEALw_wcB">
                                <img style={imgStyle} alt="Saint LaurenT"/> Saint LaurenT
                            </a>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <a class="imgBrand" href="https://www.boy-london.com/">
                                <img style={imgStyle} alt="Boy London"/> Boy London
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://www.adidas.com/us/yeezy">
                                <img style={imgStyle} alt="Yeezy"/> Yeezy
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://bape.com/">
                                <img style={imgStyle} alt="BAPE"/> BAPE
                            </a>
                        </Col>
                        <Col>
                            <a class="imgBrand" href="https://www.rickowens.eu/en/US">
                                <img style={imgStyle} alt="Rick Owens"/> Rick Owens
                            </a>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default TopBrands
