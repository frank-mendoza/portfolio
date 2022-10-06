import React, { useEffect, useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Button from '../customComponents/Button'

import navlogo from '../img/header-01.svg'

const Navbar = ({ scrollToElement, openToggle,openSidebar, ...props }) => {

  const [scroll, setScroll] = useState(0)

  let { works, about, contact } = { ...props }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCal = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = `${scrollCal / height * 100}%`;

      setScroll(scrollValue);

    })
  }, [])

  const toggleRoutes = (top, location) => {

    openToggle()
    scrollToElement(top, location)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-nav'>
        <div className='navbar__wrapper'>
          <Link className='navbar__logo' to={'/' } onClick={() => openSidebar()}>
            <img src={navlogo} alt="logo" />
          </Link>
          <div className='navbar__link-wrapper'>
            <ul className="navbar__ul">
              <Link to={'/'} className="navbar__links"
                onClick={() => toggleRoutes(true,)}
              >Home</Link>
              <Link to={'/'}
                className="navbar__links"
                onClick={() => toggleRoutes(false, works)}
              >Works</Link>
              <Link to={'/'}
                className="navbar__links"
                onClick={() => toggleRoutes(false, about)}
              >About</Link>
            </ul>
            <Button name='Send Message' onClick={() => toggleRoutes(false, contact)}/>
          </div>
          <div className="navbar__icon" onClick={() => openToggle()}>
            <GiHamburgerMenu color='#f9d126' size={25} />
          </div>
        </div>
      </div>
      <div className="slider-container">
        <div className="slider" style={{ width: scroll }}></div>
      </div>
    </nav>
  )
}

export default Navbar