import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <>
    <div className='card_head'>
      <h1 className='card__heading'>KIMAYE RECOMMENDS</h1>
      <h4 className='card_head_des'>A Handpicked and Curated Fruit offering</h4>
    </div>
    <div className='card__container'>
      <div className='card__div'>
      <div className='overflow'>
        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_570x.png?v=1614338437'/>
      </div>
      <div className='card__text'>
        <h4 className='card-title'>ALL FRUITS</h4>
        <p className='card-text text-secondary'>Pick and choose from a wide range of delicious fruits</p>
        <a href='#' className='btn btn-outline-success'>Shop Now</a>
      </div>
      </div>
      
      <div className='card__div'>
      <div className='overflow'>
        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_570x.png?v=1614338730'/>
      </div>
      <div className='card__text'>
        <h4 className='card-title'>FRESH CUT</h4>
        <p className='card-text text-secondary'>We want to spoon-feed you… quite literally</p>
        <a href='#' className='btn btn-outline-success'>Shop Now</a>
      </div>
      </div>
      
      <div className='card__div'>
      <div className='overflow'>
        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_570x.jpg?v=1614339080'/>
      </div>
      <div className='card__text'>
        <h4 className='card-title'>FRUIT COMBO</h4>
        <p className='card-text text-secondary'>Indulge in fruit combinations created by us</p>
        <a href='#' className='btn btn-outline-success'>Shop Now</a>
      </div>
      </div>
      
      <div className='card__div'>
      <div className='overflow'>
        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Untitled_design_6_570x.png?v=1634808861'/>
      </div>
      <div className='card__text'>
        <h4 className='card-title'>GIFTS BY KIMAYE</h4>
        <p className='card-text text-secondary'>Healthy & memorable gifts for your loved ones</p>
        <a href='#' className='btn btn-outline-success'>Shop Now</a>
      </div>
    </div>
      </div>



      <div className='kima'>
        <div className='lh'>
        <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi_570x_2db87855-9260-47c2-a80e-3759af77dbea_570x.png?v=1622009438"/>
        </div>
        <div className='rh'>
        <div>
           <h2 >WE'D LIKE TO SAY <mark className='marks1'>KIMA</mark>HI…</h2>
           <p>Many of us share common safety concerns about the food we eat.</p>
           <p>When it comes to fruits, these concerns are even more serious in 
               terms of the way they are grown and handled throughout their farm-to-home
                journey. We make eating fruits a worry-free and enjoyable experience for 
                you.</p>
            <p>Since 2009, we have set the benchmark for fruit safety and quality in 35
                 countries. Kimaye is now expanding its footprint in India, bringing you
                  multiple varieties of fruit that are grown, packaged, and delivered in 
              the safest and most socially responsible manner.</p>
            <div className='small__div'>
            <span className='spn'>Kimaye is #all<mark className='marks'>Safe</mark>#all<mark className='marks'>Good</mark></span> 
            </div>
                    
            

       </div>
        </div>

      </div>
      </>
  )
}

export default Cards;