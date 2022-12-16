import React from 'react'
import { Link } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { GrProjects, GrMailOption, GrHomeRounded, GrCatalog } from 'react-icons/gr';
import Button from '../customComponents/Button'

import navlogo from '../img/logo.svg'

const Sidebar = ({ scrollToElement, openToggle, openSidebar, ...props }) => {
  return (
    <div
      className='sidebar'
      style={
        props.toggle
          ?
          { right: '-100%', width: 0 }
          :
          { right: 0, width: '100%' }}
      onClick={() => openSidebar()}
    >
      <div className="sidebar__wrapper">
        <Link className='sidebar__logo'
          to={'/portfolio'}
          onClick={() => openSidebar()}
        >
          <img src={navlogo} alt="logo" />
        </Link>
        <div className="sidebar__links">
          <ul className="sidebar__ul">
            <Link to={'/portfolio'} className="sidebar__links" onClick={() => scrollToElement(true,)}>
              <GrHomeRounded size={20} stroke='#fff' />
            </Link>
            <Link to={'/portfolio'} className="sidebar__links" onClick={() => scrollToElement(false, props.works)}>
              <GrProjects size={20} stroke='#fff' />
            </Link>
            <Link to={'/portfolio'} className="sidebar__links" onClick={() => scrollToElement(false, props.about)}>
              <GrCatalog size={20} stroke='#fff' />
            </Link>
            <Link to={'/portfolio'} className="sidebar__links" onClick={() => scrollToElement(false, props.contact)}>
              <GrMailOption size={20} stroke='#fff' />
            </Link>
          </ul>
        </div>
        {/* <Button name='Send Message' secondary={true} onClick={() => scrollToElement(false, props.contact)}/> */}
        {/* <MdClose  size={20} style={{position: 'absolute', right: 20, top: 20 }}/> */}
      </div>
    </div >
  )
}

export default Sidebar