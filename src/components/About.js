import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";

import "swiper/css/pagination";

import collab from "../img/collab.svg"
import frameworks from "../img/frameworks.svg"
import responsive from "../img/responsive.svg"
import { about } from '../data';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = ({ location }) => {

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
    <AnimationOnScroll 
      className="about__container about__container-center" 
      animateIn={data.animateIn}
      animateOnce={true}
      >
      <div className="about__img" style={{ order: data.grid ? 1 : 2 }}>
        <img src={data.src} alt={data.alt} />
      </div>
      <div className="about__description" style={{ order: data.grid ? 2 : 1 }}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </AnimationOnScroll>
  )

  return (
    <>
      <div className="about" id='about' ref={location}>
        <AnimationOnScroll 
          animateIn="animate__slideInUp"
          animateOnce={true}
          >

          <h2 className="title">About</h2>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateOnce={true}
           
          className="about__container " 
          animateIn="animate__bounceInUp">

          <div className="about__item">
            <img src={collab} alt="collab" />
            <p>Collaborative</p>
          </div>
          <div className="about__item">
            <img src={frameworks} alt="frameworks" />
            <p>Frontend Frameworks</p>
          </div>
          <div className="about__item">
            <img src={responsive} alt="responsive" />
            <p>Mobile Responsive</p>
          </div>
        </AnimationOnScroll>

        <Descriptions grid={false} src={collab} animateIn="animate__bounceInRight" alt="collab" title='Collaborative' text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure magni quaerat expedita mollitia enim magnam excepturi praesentium inventore atque totam laborum dicta quibusdam aut molestias, modi eum quisquam fugiat nobis.' />
        <Descriptions grid={true} src={frameworks} animateIn="animate__bounceInLeft" alt="frameworks" title='Frontend Frameworks' text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure magni quaerat expedita mollitia enim magnam excepturi praesentium inventore atque totam laborum dicta quibusdam aut molestias, modi eum quisquam fugiat nobis.' />
        <Descriptions grid={false} src={responsive} animateIn="animate__bounceInRight" alt="responsive " title='Mobile Responsiveness' text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure magni quaerat expedita mollitia enim magnam excepturi praesentium inventore atque totam laborum dicta quibusdam aut molestias, modi eum quisquam fugiat nobis.' />
        
        <AnimationOnScroll 
           
          animateIn="animate__bounceInUp"
          animateOnce={true}
          >
          <div className="about__carousel">
            <h2 className="title">What I Currently Knew?</h2>
            <br />
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                390: {
                  slidesPerView: 3,
                },
                414: {
                  slidesPerView: 3,
                },
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
        </AnimationOnScroll>

      </div>
      <div className="about__wrapper">
        <AnimationOnScroll 
           
          animateIn="animate__bounceInUp" 
          className="about__contents"
          animateOnce={true}
          >
          <h2 className="title">Connect with me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos exercitationem, magni facilis molestias dicta numquam saepe temporibus sunt enim quibusdam tempore consequuntur placeat voluptatem architecto ad ut harum quo.</p>
        </AnimationOnScroll>
      </div>
    </>
  )
}

export default About