import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const searchFilter = () => {
  const mode = useSelector((state) => state.darkMode);

  return (
    <div className="searchFilter">
      <button
        className={
          mode
            ? "searchFilter_btn searchFilter_btn-dark"
            : "searchFilter_btn searchFilter_btn-light"
        }
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input
        className={
          mode
            ? "searchFilter_input searchFilter_input-dark"
            : "searchFilter_input searchFilter_input-light"
        }
        type="text"
        placeholder="Search for a country"
      />
    </div>
  );
};

export default searchFilter;
