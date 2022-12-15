import React from 'react'
import Button from '../customComponents/Button'

const Contact = ({ location, onSubmit, change, onChange }) => {
  return (

    <div className="contact" id='contact' ref={location}>
      <div className='contact__container'>
        <h2 className="title">Contact</h2>
        <form action="" name='submit-to-google-sheet'
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
          }}
          className='contact__form'
        >
          <div className="contact__form-items">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={onChange} 
              value={change.name}
              type="text" 
              name='name' 
              placeholder='Enter name here' 
            />  
          </div>
          <div className="contact__form-items">
            <label htmlFor="email">Email</label>
            <input 
              onChange={onChange}
              value={change.email}
              type="email" 
              name='email'
              placeholder='Enter email here' 
            />
          </div>
          <div className="contact__form-items">
            <label htmlFor="content" className='start'>Contents of Inqury</label>
            <textarea 
              onChange={onChange}
              value={change.content}
              type="text" 
              name='content' 
              placeholder='Enter your contents here' 
              rows={5} 
            />
          </div>
          <div className="contact__button-wrapper">
            <Button name='Submit' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact