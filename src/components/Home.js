import React from 'react'

import headerVideo from '../img/headerVideo.mp4'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = ({ location }) => {


  return (
    <div className="home" id='home' ref={location}>
      <div className='home__video'>
        <video src={headerVideo} autoPlay muted loop></video>
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