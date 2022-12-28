import React from 'react'

const Button = ({ name, dark, onClick,black, width }) => (
  <button
    className={!dark ? black ? 'button black': 'button' : 'button dark'}
    style={{width: width ? '150px' : ''}}
    onClick={() =>
      onClick ?
        onClick() : null
    }
    // style={secondary ? { backgroundColor: '#fff8d9', color: '#535461' } : { backgroundColor: 'rgb(247, 185, 71)', color: '#fff' }}
  >{name}</button>
)

export default Button