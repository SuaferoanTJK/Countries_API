import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faMoon as faMoonSolid}  from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="header">
        <div className="header-container container">
            <div className="header-logo">
                <h1 className="header-title">Where in the world?</h1>
            </div>
            <div className="header-btn">
                <FontAwesomeIcon icon={faMoon} /> 
                <button className="header-mode"> Dark Mode </button>
            </div>
        </div>
    </div>
  )
}

export default Header