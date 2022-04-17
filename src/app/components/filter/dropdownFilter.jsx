import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCountry,
  obtainCountries,
} from "../../redux/actions/countriesActions";

const dropdownFilter = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode);

  const regions = [
    { value: "", label: "All" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "América" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <div className="dropdownFilter">
      <select
        className={
          mode
            ? "dropdownFilter_select dropdownFilter_select-dark"
            : "dropdownFilter_select dropdownFilter_select-light"
        }
        defaultValue=""
        onChange={(region) => {
          if (region.target.value === "") {
            dispatch(filterCountry());
          } else {
            dispatch(filterCountry("region", region.target.value));
          }
        }}
      >
        <option value="" disabled hidden>
          Filter by Region
        </option>
        {regions.map((region, id) => (
          <option key={id} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default dropdownFilter;
