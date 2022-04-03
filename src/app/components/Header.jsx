
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../redux/actions/countriesActions";

const Header = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode);
  const [click, setClick] = useState(mode);

  const changeClick = () => {
    setClick(!click);
    dispatch(changeMode(!click));
  };

  return (
    <div className={click ? "header header_bg-dark" : "header header_bg-light"}>
      <div className="header-container container">
        <div className="header-logo">
          <h1 className="header-title">Where in the world?</h1>
        </div>
        <div className="header-btn">
          {click ? (
            <FontAwesomeIcon icon={faMoonSolid} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
          <button className={click ? "header-mode text-white" : "header-mode text-dark"} onClick={() => changeClick()}>
              {click ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
