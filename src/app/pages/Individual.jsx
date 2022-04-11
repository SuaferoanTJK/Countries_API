import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

const Individual = () => {
  let navigate = useNavigate();
  const mode = useSelector((state) => state.darkMode);
  const country = useSelector((state) => state.country);

  const native = Object.values(country.nativeName)[0].common;
  const currencies = Object.values(country.currencies)[0].name;
  const languages = Object.values(country.languages);

  return (
    <>
      <div className={mode ? "home home_bg-dark" : "home home_bg"}>
        <Header />
        <div className="single container">
          <div className={mode ? "single_btn single_btn-dark" : "single_btn"}>
            <button onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faArrowLeftLong} />
              <span>Back</span>
            </button>
          </div>
          <div
            className={mode ? "single_grid single_grid-dark" : "single_grid"}
          >
            <div className="single_img">
              <img src={country?.image || null} alt="Image" />
            </div>

            <div className="single_data">
              <p className="single_title">{country?.name || "-"}</p>
              <div className="single_dataGrid">
                <div className="single_info">
                  <p className="single_text">
                    <span>Native Name:</span> {native}
                  </p>
                  <p className="single_text">
                    <span>Population:</span> {country?.population || "-"}
                  </p>
                  <p className="single_text">
                    <span>Region:</span> {country?.region || "-"}
                  </p>
                  <p className="single_text">
                    <span>Sub Region:</span> {country?.subregion || "-"}
                  </p>
                  <p className="single_text">
                    <span>Capital:</span> {country?.capital || "-"}
                  </p>
                </div>

                <div className="single_dataGrid_info">
                  <p className="single_text">
                    <span>Top Level Domain:</span>
                    {country?.topLevelDomain || "-"}
                  </p>
                  <p className="single_text">
                    <span>Currencies:</span> {currencies}
                  </p>
                  <p className="single_text">
                    <span>Languages:</span> {`${languages}`}
                  </p>
                </div>
              </div>
              {country.borders ? (
                <div className="single_extraInfo">
                  <p>Border Countries:</p>
                  <div className="single_borderCountries">
                    {country.borders.map((name, id) => {
                      return (
                        <div
                          key={id}
                          className={
                            mode
                              ? "single_country single_country-dark"
                              : "single_country"
                          }
                        >
                          {name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Individual;
