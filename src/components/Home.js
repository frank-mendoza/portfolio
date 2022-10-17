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
    <AnimationOnScroll 
      initiallyVisible={true} 
      animateIn="animate__fadeInUp"
      animateOnce={true}
      >

      <div className="home" id='home' ref={location}>
        <div className='home__video'>
          <video src={headerVideo} autoPlay muted loop></video>
        </div>
        <div className="home__container">
          <div className="home__contents">
            <h1 className="home__title ">Frank <br className='br' />Mendoza</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Home