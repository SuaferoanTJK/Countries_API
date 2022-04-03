import React from "react";
import { useDispatch, useSelector } from "react-redux";

const dropdownFilter = () => {
  const mode = useSelector((state) => state.darkMode);
  const regions = [
    { value: "Africa", label: "Africa" },
    { value: "América", label: "América" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
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
