import React, {useState, useEffect} from 'react'
import {Container, Card, Row} from 'react-bootstrap'
import './styles.css'
import {useQuery} from '@apollo/client';
import {Get_Sold_Auctions} from '../../utils/queries';
import {GET_SOLD_PRODUCTS} from '../../utils/state/actions';


const RecentlySold = () => {

    const {loading, data} = useQuery(Get_Sold_Auctions);
    const [soldProducts, setSoldProducts] = useState(undefined);
    useEffect(()=> {

        if(!loading && data) {
            setSoldProducts(data.recentlySoldAuctions);
        }
                
    })
    const cardStyle = {
        width: "18rem"
    }

    const imgStyle = {
        width: "18rem",
        maxHeight: "400px"
    }

    return (
       <>
          <Container className="soldContainers">
             <h2 className="font-weight-light">Recently Sold</h2>
             <Row className="justify-content-center">
                {!loading &&
                   soldProducts &&
                   soldProducts.map((product) => (
                      <Card style={cardStyle}>
                         <Card.Img src="" className="card-img-top" style={imgStyle} />
                         <Card.Body>
                            <Row>
                               <Card.Img
                                  src={product.image}
                                  style={{
                                     width: "17.9rem",
                                     height: "230px",
                                     marginBottom: "2%",
                                  }}
                               ></Card.Img>

                               <p class="regularFont">Name: {product.itemName}</p>
                               <p class="regularFont"> Sold for ${product.priceSold} </p>
                               <p class="regularFont">Brand: {product.brand} </p>
                            </Row>
                         </Card.Body>
                      </Card>
                   ))}
             </Row>
          </Container>
       </>
    );
}

export default RecentlySold
