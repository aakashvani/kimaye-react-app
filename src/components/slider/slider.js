import React from 'react'
import './slider.css'
import { Carousel } from 'react-bootstrap'

function Slider() {
  return (
    <React.Fragment>
  
  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Delhi-launch-banner_1512x.jpg?v=1649917692"
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/mango_bannerArtboard_1_1512x.jpg?v=1648103694"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerArtboard_1_1512x.jpg?v=1650952002"
      alt="Third slide"
    />


  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerWe_serve_you_1_1512x.jpg?v=1650952015"
      alt="Third slide"
    />

  
  </Carousel.Item >
      
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerAssured_safety_1_1512x.jpg?v=1650952014"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
   </React.Fragment>
  )
}

export default Slider

