import React from 'react'

const Button = ({ name, secondary, onClick }) => (
  <button
    className='navbar__button'
    onClick={() =>
      onClick ?
        onClick() : null
    }
    style={secondary ? { backgroundColor: '#fff8d9', color: '#535461' } : { backgroundColor: '#f9d126', color: '#fff' }}
  >{name}</button>
)

export default Button