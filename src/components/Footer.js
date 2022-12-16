import React from 'react'
import { BsMessenger, BsSkype } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import footerlogo from '../img/logo.svg'

const Footer = ({dark}) => {
  return (
    <footer className='footer '>
      <div className={!dark ? "footer__container" : "footer__container dark"}>
          <div className="footer__logo">
            <img src={footerlogo} alt="logo" />
            <p>Follow and visit my  <br />social media accounts.</p>
          </div>
          <div className="footer__links">
            <a href="/" target='_blank'>
              <FaFacebookSquare size={25} color={!dark ? '#606060' : '#fff'} className='icons' />
            </a>
            <a href="/" target='_blank'>
              <BsMessenger size={25} color={!dark ? '#606060' : '#fff'} className='icons' />
            </a>
            <a href="/" target='_blank'>
              <BsSkype size={25} color={!dark ? '#606060' : '#fff'} className='icons' />
            </a>
            <a href="/" target='_blank'>
              <SiGmail size={25} color={!dark ? '#606060' : '#fff'} className='icons' />
            </a>
          </div>

          <span className="footer__copyright">
            Copyright ©2022 All rights reserved
          </span>
      </div>
    </footer >
  )
}

export default Footer