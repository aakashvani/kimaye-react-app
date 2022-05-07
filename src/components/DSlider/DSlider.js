import React from 'react'
import { Carousel } from 'react-bootstrap'
import './DSlider.css'

function DSlider() {
    return (
        <React.Fragment>
  
        <div className='ds__maindiv'>
          <h2 className='kima__head'>JAZZ IT UP WITH FRUITS</h2>
          <div className='ds__div'>
          <Carousel fade>
                <Carousel.Item>
                    <div className='slider__div'>
                        <div className='div__img'>
                        <img
            className="d-block w-30"
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_334275008-2-opt2-1900px_2048x.jpg?v=1627119119"
            alt="First slide"
                    />
                      <div className="bottom-left">Top Fruit Safety Tips</div>
                      <div className="bottom-right">Fruits Rich In Vitamin C</div>
                        </div>
                        <div className='div__img'>
                        <img
            className="d-block w-30"
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_201343750_copy__66kb-1000px_900x.jpg?v=1626676701"
            alt="Second slide"
          />
                        </div>
                  
                    </div>
         
       
                </Carousel.Item>
                
                <Carousel.Item>
                    <div className='slider__div'>
                        <div className='div__img'>
                        <img
            className="d-block w-30"
            src="http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_77286816-min__1625567830_114.143.85.97_900x.jpg?v=1625638895"
            alt="First slide"
          />
                        </div>
                        <div className='div__img'>
                        <img
            className="d-block w-30"
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Blog_-_Benefits_of_fruits_720x.jpg?v=1625147388"
            alt="Second slide"
                    />
                    <div className="bottom-left">How To Remove Harmful Pestisides</div>
                      <div className="bottom-right">Why Should You Eat Fruits More?</div>
                        </div>
                  
                    </div>
         
       
        </Carousel.Item>

        <Carousel.Item>
                    <div className='slider__div'>
                        <div className='div__img'>
                        <img
            className="d-block w-30"
            src="http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Untitled_design_51-min_1080x.png?v=1614341965"
            alt="First slide"
                    />
                    <div className="bottom-left">Grapes: How They Reached India</div>
                      <div className="bottom-right">Make Immunity Your Friend</div>
                        </div>
                        <div className='div__img'>
                        <img
            className="d-block w-30"
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/immune_system_1728x-min_540x.jpg?v=1614342193"
            alt="Second slide"
          />
                        </div>
                  
                    </div>
         
       
        </Carousel.Item>
        
        
      </Carousel>
          </div>
        </div>
         </React.Fragment>
  )
}

export default DSlider
