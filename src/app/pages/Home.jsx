import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import SearchFilter from "../components/filter/SearchFilter";
import DropdownFilter from "../components/filter/DropdownFilter";

const Home = () => {
  const mode = useSelector((state) => state.darkMode);

  return (
    <>
      <div className={mode ? "home home_bg-dark" : "home home_bg-light"}>
        <Header />
        <div className="container">
          <SearchFilter/>
          <DropdownFilter/>
        </div>
        
      </div>
    </>
  );
};

export default Home;
