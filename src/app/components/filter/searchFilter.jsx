import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const searchFilter = () => {
  return (
    <div className="searchFilter">
        <button className="searchFilter_btn">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </button>
        <input className="searchFilter_input" type="text" placeholder="Search for a country"/>
    </div>
  )
}

export default searchFilter