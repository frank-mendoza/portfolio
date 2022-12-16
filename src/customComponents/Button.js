import React from 'react'

const Button = ({ name, secondary, onClick }) => (
  <button
    className='button'
    onClick={() =>
      onClick ?
        onClick() : null
    }
    // style={secondary ? { backgroundColor: '#fff8d9', color: '#535461' } : { backgroundColor: 'rgb(247, 185, 71)', color: '#fff' }}
  >{name}</button>
)

export default Button