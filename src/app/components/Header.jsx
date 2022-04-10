import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeMode } from "../redux/actions/countriesActions";

const Header = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode);

  const changeClick = () => {
    dispatch(changeMode(!mode));
  };

  return (
    <div className={mode ? "header header_bg-dark" : "header header_bg-light"}>
      <div className="header-container container">
        <div className="header-logo">
          <h1 className="header-title" onClick={() => navigate("/")}>
            Where in the world?
          </h1>
        </div>
        <div className="header-btn">
          {mode ? (
            <FontAwesomeIcon icon={faMoonSolid} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
          <button
            className={
              mode ? "header-mode text-white" : "header-mode text-dark"
            }
            onClick={() => changeClick()}
          >
            {mode ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
