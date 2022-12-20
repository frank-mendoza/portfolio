import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";

import "swiper/css/pagination";

import collab from "../img/collab.svg"
import frameworks from "../img/frameworks.svg"
import responsive from "../img/responsive.svg"
import { about } from '../data';

const About = ({ location, dark }) => {

  const carouselItem = () => {
    return about.map((record) =>
    (
      <SwiperSlide key={record.id}>
        <div className="about__carousel-img">
          <img src={record.src} alt={record.name} />
        </div>
      </SwiperSlide>
    )
    )
  }

  const Descriptions = (data) => (
    <div className="about__container about__container-center" >
      <div className="about__img" style={{ order: data.grid ? 1 : 2 }}>
        <img src={data.src} alt={data.alt} />
      </div>
      <div className={!dark ? "about__description" : "about__description dark"} style={{ order: data.grid ? 2 : 1 }}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  )

  return (
    <div className={!dark ? 'wrapper' : 'wrapper dark'}>
      <div className="about" id='about' ref={location}>
        <h2 className={!dark ? "title" : "title dark"}>About</h2>
        <div className="about__container ">
          <div className={!dark ? 'about__item' : " about__item dark"}>
            <img src={collab} alt="collab" />
            <p>Collaborative</p>
          </div>
          <div className={!dark ? 'about__item' : " about__item dark"}>
            <img src={frameworks} alt="frameworks" />
            <p>Frontend Frameworks</p>
          </div>
          <div className={!dark ? 'about__item' : " about__item dark"}>
            <img src={responsive} alt="responsive" />
            <p>Mobile Responsive</p>
          </div>
        </div>

        <Descriptions 
          grid={false} 
          src={collab} 
          animateIn="animate__bounceInRight" 
          alt="collab" 
          title='Collaborative' 
          text='Collaborative with other developers. Communication is the key for a better result in development. ' />
        <Descriptions 
          grid={true} 
          src={frameworks} 
          animateIn="animate__bounceInLeft" 
          alt="frameworks" 
          title='Frontend Frameworks' 
          text='With the use of new frameworks and tech, development becomes more exciting and fun.' />
        <Descriptions 
          grid={false} 
          src={responsive} 
          animateIn="animate__bounceInRight" 
          alt="responsive " 
          title='Mobile Responsiveness' 
          text='Responsive websites is the key for a better mobile viewing of a website, as frontend developer, this is one of my assets.' />

        <div className="about__carousel">
          <h2 className={!dark ? "title" : "title dark"}>What I Currently Knew?</h2>
          <br />
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            breakpoints={{
                767: {
                  slidesPerView: 6
                },
                1000: {
                  slidesPerView: 10
                }
              }
            }
            pagination={true}
            className='swiper'
          >
            {carouselItem()}
          </Swiper>
        </div>

      </div>
      <div className="about__wrapper">
        <div className="about__contents" >
          <h2 className="title">Connect with me</h2>
          <p>Together let's create a wonderful connection and build websites.
            <br />
            Please  free to contact me.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About