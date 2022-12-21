import React from 'react'

import headerImg from '../img/pexels-miguel-á-padriñán-1591060.jpg'
import headerWhite from '../img/white.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = ({ location, dark }) => {

  return (
    <div className={dark ? "home" : 'home dark' }id='home' ref={location}>
      <div className='home__img'>
        <img src={!dark ? headerWhite : headerImg} alt="pexels-miguel-á-padriñán-1591060" />
      </div>
      <AnimationOnScroll
        className="home__container"
        initiallyVisible={true}
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={1}>
        <div className="home__contents">
          <h1 className="home__title ">Frank <br />Mendoza</h1>
          <h3 className="home__subtitle">Frontend Developer</h3>
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default Home