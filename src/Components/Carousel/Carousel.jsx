import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel_section() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
        style={{ backgroundColor:'#ec274a' }}
          className="d-block w-100 carousel-img"
          src="https://www.holagala.in/banner1.png"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://www.holagala.in/banner2.jpg"
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://www.holagala.in/banner3.png"
          alt="Third slide"
        />
     
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_section;