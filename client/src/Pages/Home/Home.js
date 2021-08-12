import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch } from "react-redux";
import { GET_ALL_PRODUCTS, GET_USER_INFO } from "../../utils/state/actions";
import { Query_User, Get_All_Products } from '../../utils/queries'
import { useEffect } from "react";
import { useQuery } from "@apollo/client";


const images = [
  {
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628604456/ffd4ed84eb92857add8407aec13990f5_gdclse.jpg"
  },
  {
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628604456/https___hypebeast.com_image_2018_08_masaaki-homma-mastermind-vs-bape-concept-store-interview-14_xknvjn.jpg"
   
  },
  {
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628604455/66f28a36e5445dc6ceb86216c866a38e_y99wjk.jpg"
    
  },
  {
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628604455/offwhite-12.37.23-PM_c0wfc2.jpg"
  },
  {
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628604455/tumblr_pd931lZjZb1qzaqcbo1_1280_ayrxik.jpg"
  },
  {
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628604455/f9837fd5219ab0a510358f07149047b8_jblieh.jpg"
  },
  {
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628604455/ECKq1mtU8AAYBpe_virbfo.jpg"
  },
  {
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628604455/6pVKz0a_zcarsx.jpg"
  },
  {
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628604454/24ea8ce1d72f990b6475a3a89990b6e4_qa2jfo.jpg"
  }
];
function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { loading: userLoading, data: userData } = useQuery(Query_User);
  const { loading: productsLoading, data: productsData } = useQuery(Get_All_Products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!productsLoading && !userLoading && userData && productsData) {
      dispatch({ type: GET_ALL_PRODUCTS, payload: productsData.auctions });
      dispatch({ type: GET_USER_INFO, payload: userData.user });
    }
  }, [productsLoading, userLoading]);

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((slide, i) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100 h-60" src={slide.image} alt="slider" />
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
