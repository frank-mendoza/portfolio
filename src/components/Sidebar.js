import React from 'react'
import { MdClose } from 'react-icons/md';
import Button from '../customComponents/Button'

import navlogo from '../img/header-01.svg'

const Sidebar = ({ scrollToElement,openToggle, ...props }) => {
  return (
    <div className='sidebar' style={{left: props.toggle ? '100%' : 0 }}>
      <div className='sidebar__logo'
        onClick={() => {

          window.location = '/'
        }}
      >
        <img src={navlogo} alt="logo" />
      </div>
      <div className="sidebar__links">
        <ul className="sidebar__ul">
          <li className="sidebar__links" onClick={() => scrollToElement(true,)}>Home</li>
          <li className="sidebar__links" onClick={() => scrollToElement(false, props.works)}>Works</li>
          <li className="sidebar__links" onClick={() => scrollToElement(false, props.about)}>About</li>
          {/* <li className="sidebar__links" onClick={() => scrollToElement(false, props.contact)}>Contact</li> */}
        </ul>
      </div>
      <Button name='Send Message' secondary={true} onClick={() => scrollToElement(false, props.contact)}/>
      <MdClose onClick={() => openToggle()} size={20} style={{position: 'absolute', right: 20, top: 20 }}/>
    </div >
  )
}

export default Sidebar