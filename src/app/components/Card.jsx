import React from 'react'
import Flag from '../../assets/images/Flag.png'

const Card = () => {
  return (
    <div className='card'>
        <div className='card_img'>
            <img src={Flag} alt="Flag Image" />
        </div>
        <div className="card_info">
            <p className="card_title"> Germany </p>
            <p className="card_text"><span>Population:</span> 81.770.900</p>
            <p className="card_text"><span>Europa:</span> Europe</p>
            <p className="card_text"><span>Capital:</span> Berlin</p>
        </div>
    </div>
  )
}

export default Card