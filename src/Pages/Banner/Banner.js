import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../../images/download (1).jpg'
import two from '../../images/download (2).jpg'
import three from '../../images/download.jpg'


const Banner = () => {
    return (
        <div className="mb-5" id="home">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src={three}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src={one}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     
      className="d-block w-50 mx-auto"
      src={two}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
        </div>
    );
};

export default Banner;