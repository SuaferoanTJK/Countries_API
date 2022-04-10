import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { obtainCountries } from "../../redux/actions/countriesActions";

const searchFilter = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode);
  const [name, setName] = useState("");

  return (
    <div className="searchFilter">
      <button
        className={
          mode
            ? "searchFilter_btn searchFilter_btn-dark"
            : "searchFilter_btn searchFilter_btn-light"
        }
        onClick={() => {
          dispatch(obtainCountries("name", name));
        }}
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
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(obtainCountries("name", name));
          }
        }}
      />
    </div>
  );
};

export default searchFilter;
