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
                                Off-White
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.supremenewyork.com/">
                                Supreme
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://kawsone.com/">
                                 KAWS
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://global.mastermindtokyo.com/">
                                 Mastermind
                            </Card.Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col class="col">
                            <Card.Link class="imgBrand" href="https://www.balenciaga.com/en-us?ad=RSA&targetid=kwd-30438560&location=9027583&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQyV1umH0blZSXSktmuzMyq7Sy9TeMLMkv0uzNhxxFG_BwK_VCUmKZoaAiPJEALw_wcB">
                                 Balenciaga
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://vetementswebsite.com/">
                                Vetements
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.adidas.com/us/y_3">
                                 Y-3
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.gucci.com/us/en/?gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzxlypFu5rkT3hOT9-k6rOeq2pBMQlJdfS-Q4SUpob-NrhBTuDyP7saAjwnEALw_wcB">
                                 Gucci
                            </Card.Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.givenchy.com/us/en-US/homepage?cmpid&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQxL4X684dBlnlaYxdBnDpG913KgkBYoE1glZlQTR4GkdZttMQ0DvjgaAgTnEALw_wcB">
                                 Givenchy
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.burberry.com/">
                                Burberry
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.alexanderwang.com/us-en/women-newarrivals?tp=97228&utm_term=newarrivalslp&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQx687cThvyZ30Yc6gFFvy5sLOycWq2VP4nXMzzqgkRUXXIv9aCH4mcaAp9iEALw_wcB">
                                Alexander Wang
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.ysl.com/en-us?ad=standard&targetid=kwd-17728831&location=9027599&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQx4zMdV_cDDe7a7Edc6Ayx7hjO5PXcL1-DxL0F_gQQw6rBTd5Be858aAudJEALw_wcB">
                                 Saint Laurent
                            </Card.Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.boy-london.com/">
                                 Boy London
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.adidas.com/us/yeezy">
                                Yeezy
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://bape.com/">
                                 BAPE
                            </Card.Link>
                        </Col>
                        <Col>
                            <Card.Link class="imgBrand" href="https://www.rickowens.eu/en/US">
                                 Rick Owens
                            </Card.Link>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default TopBrands
