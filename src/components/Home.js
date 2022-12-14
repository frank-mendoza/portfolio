import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from "swiper";

import { FaFacebookSquare } from 'react-icons/fa';
import { BsMessenger, BsSkype } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

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
          <div className="home__icons">
            <a href="/" target='_blank'>
              <FaFacebookSquare size={25} color='#fff' />
            </a>
            <a href="/" target='_blank'>
              <BsMessenger size={25} color='#fff' />
            </a>
            <a href="/" target='_blank'>
              <BsSkype size={25} color='#fff' />
            </a>
            <a href="/" target='_blank'>
              <SiGmail size={25} color='#fff' />
            </a>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default Home