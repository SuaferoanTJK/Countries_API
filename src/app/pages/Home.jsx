import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../redux/actions/countriesActions";

const Home = () => {
  const mode = useSelector((state) => state.darkMode);

  return (
    <>
      <div className={mode ? "home home_bg-dark" : "home home_bg-light"}>
        <Header />
        <div className="container">Dentro de Home</div>
      </div>
    </>
  );
};

export default Home;
