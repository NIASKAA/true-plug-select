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
                <Card className="bigCard">
                    <Row>
                        <Col>
                            <Card.Link className="imgBrand" href="https://www.off---white.com/en-us/?gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQxP9D5xyjhzu6aD-W7nOebdzn6bmekwjT4NqBU2bGLI2DIwiAMztUQaAvLwEALw_wcB&gclsrc=aw.ds">
                                <Card.Img src='images/offwhite.jpeg' alt="offwhite" style={imgStyle} /> Off-White
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.supremenewyork.com/">
                                <Card.Img  src="images/supreme.png" style={imgStyle} alt="supreme" /> Supreme
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://kawsone.com/">
                                <Card.Img  src="images/kaws.jpeg" style={imgStyle} alt="KAWS"/> KAWS
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://global.mastermindtokyo.com/">
                                <Card.Img src="images/mastermind.jpeg" style={imgStyle} alt="Mastermind"/> Mastermind
                            </Card.Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col class="col">
                            <Card.Link class="imgBrand" href="https://www.balenciaga.com/en-us?ad=RSA&targetid=kwd-30438560&location=9027583&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQyV1umH0blZSXSktmuzMyq7Sy9TeMLMkv0uzNhxxFG_BwK_VCUmKZoaAiPJEALw_wcB">
                                <Card.Img src="images/Balenciaga.png" style={imgStyle} alt="Balenciaga"/> Balenciaga
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://vetementswebsite.com/">
                                <Card.Img src="images/vetements.jpeg" style={imgStyle} alt="Vetements"/> Vetements
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.adidas.com/us/y_3">
                                <Card.Img src="images/y3.jpeg" style={imgStyle} alt="Y-3"/> Y-3
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.gucci.com/us/en/?gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzxlypFu5rkT3hOT9-k6rOeq2pBMQlJdfS-Q4SUpob-NrhBTuDyP7saAjwnEALw_wcB">
                                <Card.Img src="images/gucci.jpg" style={imgStyle} alt="Gucci"/> Gucci
                            </Card.Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.givenchy.com/us/en-US/homepage?cmpid&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQxL4X684dBlnlaYxdBnDpG913KgkBYoE1glZlQTR4GkdZttMQ0DvjgaAgTnEALw_wcB">
                                <Card.Img src="images/Givenchy.png"style={imgStyle} alt="Givenchy"/> Givenchy
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.burberry.com/">
                                <Card.Img src="images/burberry.jpeg" style={imgStyle} alt="Burberry"/> Burberry
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.alexanderwang.com/us-en/women-newarrivals?tp=97228&utm_term=newarrivalslp&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQx687cThvyZ30Yc6gFFvy5sLOycWq2VP4nXMzzqgkRUXXIv9aCH4mcaAp9iEALw_wcB">
                                <Card.Img src="images/wang.png" style={imgStyle} alt="Alexander Wang"/> Alexander Wang
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.ysl.com/en-us?ad=standard&targetid=kwd-17728831&location=9027599&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQx4zMdV_cDDe7a7Edc6Ayx7hjO5PXcL1-DxL0F_gQQw6rBTd5Be858aAudJEALw_wcB">
                                <Card.Img src="images/saintLaurent.jpeg"style={imgStyle} alt="Saint LaurenT"/> Saint LaurenT
                            </Card.Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.boy-london.com/">
                                <Card.Img src="images/boyLondon.jpeg" style={imgStyle} alt="Boy London"/> Boy London
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.adidas.com/us/yeezy">
                                <Card.Img src="images/yeezy.png" style={imgStyle} alt="Yeezy"/> Yeezy
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://bape.com/">
                                <Card.Img src="images/bape.png" style={imgStyle} alt="BAPE"/> BAPE
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.rickowens.eu/en/US">
                                <Card.Img src="images/rick.jpeg" style={imgStyle} alt="Rick Owens"/> Rick Owens
                            </Card.Link>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default TopBrands
