import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Flag from "../../assets/images/Flag.png";

const Individual = () => {
  const mode = useSelector((state) => state.darkMode);
  return (
    <>
      <div className={mode ? "home home_bg-dark" : "home home_bg"}>
        <Header />
        <div className="single container">
          <div className={mode ? "single_btn single_btn-dark" : "single_btn"}>
            <button>
              <FontAwesomeIcon icon={faArrowLeftLong} />
              <span>Back</span>
            </button>
          </div>
          <div
            className={mode ? "single_grid single_grid-dark" : "single_grid"}
          >
            <div className="single_img">
              <img src={Flag} alt="Image" />
            </div>

            <div className="single_data">
              <p className="single_title">Belgium</p>
              <div className="single_dataGrid">
                <div className="single_info">
                  <p className="single_text">
                    <span>Native Name:</span> Belgie
                  </p>
                  <p className="single_text">
                    <span>Population:</span> 12.345.678
                  </p>
                  <p className="single_text">
                    <span>Region:</span> Europe
                  </p>
                  <p className="single_text">
                    <span>Sub Region:</span> Western Europe
                  </p>
                  <p className="single_text">
                    <span>Capital:</span> Brussels
                  </p>
                </div>

                <div className="single_dataGrid_info">
                  <p className="single_text">
                    <span>Top Level Domain:</span> .be
                  </p>
                  <p className="single_text">
                    <span>Currencies:</span> Euro
                  </p>
                  <p className="single_text">
                    <span>Languages:</span> Dutch, French, German
                  </p>
                </div>
              </div>
              <div className="single_extraInfo">
                <p>Border Countries:</p>
                <div className="single_borderCountries">
                  <div
                    className={
                      mode
                        ? "single_country single_country-dark"
                        : "single_country"
                    }
                  >
                    France
                  </div>
                  <div
                    className={
                      mode
                        ? "single_country single_country-dark"
                        : "single_country"
                    }
                  >
                    Germany
                  </div>
                  <div
                    className={
                      mode
                        ? "single_country single_country-dark"
                        : "single_country"
                    }
                  >
                    Netherlands
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Individual;
