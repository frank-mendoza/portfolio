import React, { useEffect, useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Button from '../customComponents/Button'

import navlogo from '../img/logo.svg'

const Navbar = ({ scrollToElement, openToggle,openSidebar, ...props }) => {

  const [scroll, setScroll] = useState(0)
  const [colorChange, setColorchange] = useState(false)

  let { works, about, contact } = { ...props }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCal = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = `${scrollCal / height * 100}%`;

      if(window.scrollY >= 80){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }

      setScroll(scrollValue);
      
    })


  }, [])

  return (
    <nav className='navbar' style={{backgroundColor: colorChange ? '#fff' : 'transparent'}}>
      <div className='navbar-nav'>
        <div className='navbar__wrapper'>
          <Link 
            className='navbar__logo' 
            to={'/portfolio' }
            onClick={() => scrollToElement(true)}
          >
            <img src={navlogo} alt="logo" />
          </Link>
          <div className='navbar__link-wrapper'>
            <ul className="navbar__ul">
              <Link 
                to={'/portfolio'} 
                className="navbar__links"
                onClick={() => scrollToElement(true,)}
                style={{color: colorChange || window.location.pathname === '/portfolio/works' ? "#535461" : '#fff'}}
              >Home</Link>
              <Link 
                to={'/portfolio'}
                className="navbar__links"
                onClick={() => scrollToElement(false, works)}
                style={{color: colorChange || window.location.pathname === '/portfolio/works' ? "#535461" : '#fff'}}
              >Works</Link>
              <Link 
                to={'/portfolio'}
                className="navbar__links"
                onClick={() => scrollToElement(false, about)}
                style={{color: colorChange || window.location.pathname === '/portfolio/works' ? "#535461" : '#fff'}}
              >About</Link>
            </ul>
            {
              window.location.pathname === '/portfolio/works' 
              ?
              <Link className='button' to={'/portfolio'}>Send Message</Link> 
              :
              <Button name='Send Message' onClick={() => scrollToElement(false, contact)}
            />
            }
          </div>
          <div className="navbar__icon" onClick={() => openSidebar()}>
            <GiHamburgerMenu color='rgb(247, 185, 71)' size={25} />
          </div>
        </div>
      </div>
      <div className="slider-container" style={{opacity: colorChange ? 1 : 0}}>
        <div className="slider" style={{ width: scroll }}></div>
      </div>
    </nav>
  )
}

export default Navbar