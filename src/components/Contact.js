import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Button from '../customComponents/Button'

const Contact = ({ location }) => {
  return (

    <div className="contact" id='contact' ref={location}>
      <AnimationOnScroll 
        className='contact__container' 
        animateIn="animate__fadeInUp"
        animateOnce={true}
        >
        <h2 className="title">Contact</h2>
        <form action="" className='contact__form'>
          <div className="contact__form-items">
            <label htmlFor="name">Full Name</label>
            <input type="text" name='name' placeholder='Enter name here' />
          </div>
          <div className="contact__form-items">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Enter email here' />
          </div>
          <div className="contact__form-items">
            <label htmlFor="content" className='start'>Contents of Inqury</label>
            <textarea type="text" name='content' placeholder='Enter your contents here' rows={5} />
          </div>
          <div className="contact__button-wrapper">
            <Button name='Submit' />
          </div>
        </form>
      </AnimationOnScroll>
    </div>
  )
}

export default Contact