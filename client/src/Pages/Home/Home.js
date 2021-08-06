import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductList from "../../Components/ProductList/ProductList";
import { useQuery } from "@apollo/client";
import { Get_All_Products, Query_User } from "../../utils/queries";
import { GET_ALL_PRODUCTS } from "../../utils/state/actions";
import { useDispatch, useSelector } from "react-redux";
const images = [
  {
    image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
    caption: "Caption",
    description: "Description Here",
  },
];
function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { loading, data } = useQuery(Get_All_Products);

  useEffect(() => {
    if (loading == false && data) {
      dispatch({ type: GET_ALL_PRODUCTS, payload: data });
    }
  }, [loading, data]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((slide, i) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={slide.image} alt="slider image" />
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Home;
