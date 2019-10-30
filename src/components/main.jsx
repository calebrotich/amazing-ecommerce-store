import React from 'react';
import CarouselItems from './carousel';
import NavBar from './navbar';
import '../App.css';

const mainContainer = () => {
  return (
    <div className="Container">
      <NavBar />
      <div className="CarouselHolder">
        <CarouselItems />
      </div>
    </div>
  )
}

export default mainContainer;
