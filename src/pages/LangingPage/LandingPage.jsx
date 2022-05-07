import React from "react";
import './LandingPage.css';
import Cards from "../../components/card/Cards"
import InstaPosts from '../../components/instPosts/InstaPosts'
import Slider from "../../components/slider/slider"
import DSlider from "../../components/DSlider/DSlider"

const LandingPage = () => {
  return <>
    <React.Fragment>
      <Slider />
      <Cards />
      <DSlider/>
      <InstaPosts />
      
    </React.Fragment>
  </>;
};

export default LandingPage;
