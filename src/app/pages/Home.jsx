import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import SearchFilter from "../components/filter/SearchFilter";
import DropdownFilter from "../components/filter/DropdownFilter";
import Card from "../components/Card";
const Home = () => {
  const mode = useSelector((state) => state.darkMode);

  return (
    <>
      <div className={mode ? "home home_bg-dark" : "home home_bg-light"}>
        <Header />
        <div className="container">
          <div className="filters">
            <SearchFilter />
            <DropdownFilter />
          </div>
          <div className="cards">
            <div className="cards_container">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
