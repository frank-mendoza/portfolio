import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { BsMessenger, BsSkype } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import footerlogo from '../img/header-01.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <AnimationOnScroll
          animateIn="animate__bounceInUp"
          animateOnce={true}
        >


          <div className="footer__logo">
            <img src={footerlogo} alt="logo" />
            <p>Follow and visit my  <br />social media accounts.</p>
          </div>
          <div className="footer__links">
            <a href="/" target='_blank'>
              <FaFacebookSquare size={30} color='#606060' className='icons' />
            </a>
            <a href="/" target='_blank'>
              <BsMessenger size={30} color='#606060' className='icons' />
            </a>
            <a href="/" target='_blank'>
              <BsSkype size={30} color='#606060' className='icons' />
            </a>
            <a href="/" target='_blank'>
              <SiGmail size={30} color='#606060' className='icons' />
            </a>
          </div>

          <span className="footer__copyright">
            Copyright ©2022 All rights reserved
          </span>
        </AnimationOnScroll>
      </div>
    </footer >
  )
}

export default Footer