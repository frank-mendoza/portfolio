import React from 'react'

const Button = ({ name, dark, onClick }) => (
  <button
    className={!dark ? 'button' : 'button dark'}
    onClick={() =>
      onClick ?
        onClick() : null
    }
    // style={secondary ? { backgroundColor: '#fff8d9', color: '#535461' } : { backgroundColor: 'rgb(247, 185, 71)', color: '#fff' }}
  >{name}</button>
)

export default Button