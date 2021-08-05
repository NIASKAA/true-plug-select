import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

const data = [
    {
     image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
     caption:"Caption",
     description:"Description Here",
     id:1,
    },
    {
     image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
     caption:"Caption",
     description:"Description Here",
     id:2,
     },
     {
     image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
     caption:"Caption",
     description:"Description Here",
     id:3
     } 
]
function Home() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
         {data.map((slide, i) => {
          return (
            <Carousel.Item key={slide.id}>        
          <img
            className="d-block w-100"
            src={slide.image}
            alt="slider image"
          />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
        
      </Carousel>
    );
}

export default Home
