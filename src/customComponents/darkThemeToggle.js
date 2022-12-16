import React from 'react'

const DarkThemeToggle = ({toggleChangeTheme, dark}) => {
  return (
    <label className="custom__switch">
    <input 
      onChange={toggleChangeTheme}
      type="checkbox" 
      name='toggle' 
      value={dark} 
    />
    <span className="round" />
  </label>
  )
}

export default DarkThemeToggle