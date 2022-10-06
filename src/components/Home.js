import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from "swiper";

import { FaFacebookSquare } from 'react-icons/fa';
import { BsMessenger, BsSkype } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import header01 from '../img/header-01.svg'
import header02 from '../img/header-02.svg'
import header03 from '../img/header-03.svg'
import header04 from '../img/header-04.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = ({ location }) => {

  return (
    <AnimationOnScroll 
      initiallyVisible={true} 
      animateIn="animate__bounceInUp"
      animateOnce={true}
      >

      <div className="home" id='home' ref={location}>
        <div className="home__container home__container-start">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            pagination={true}
            effect="fade"
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={2}
            className='swiper'
          >
            <SwiperSlide >
              <div className="home__carousel">
                <img src={header02} alt="header2" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="home__carousel">
                <img src={header01} alt="header1" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="home__carousel">
                <img src={header03} alt="header3" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="home__carousel">
                <img src={header04} alt="header4" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="home__container home__container-left">
          <div className="home__contents">
            <h1 className="home__title ">Frank <br className='br' />Mendoza</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora iusto soluta molestias omnis magnam eos provident eligendi. Tenetur dolorem maiores in cumque temporibus vitae mollitia adipisci praesentium. Reprehenderit, neque.</p>
            <div className="home__icons">
              <a href="/" target='_blank'>
                <FaFacebookSquare size={25} color='#535461' />
              </a>
              <a href="/" target='_blank'>
                <BsMessenger size={25} color='#535461' />
              </a>
              <a href="/" target='_blank'>
                <BsSkype size={25} color='#535461' />
              </a>
              <a href="/" target='_blank'>
                <SiGmail size={25} color='#535461' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Home