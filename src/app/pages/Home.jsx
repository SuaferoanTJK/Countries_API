import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import SearchFilter from "../components/filter/SearchFilter";
import DropdownFilter from "../components/filter/DropdownFilter";
import Card from "../components/Card";
import { obtainCountries } from "../redux/actions/countriesActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtainCountries());
  }, []);

  const mode = useSelector((state) => state.darkMode);
  const countries = useSelector((state) => state.countries);

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
              {countries.length !== 0
                ? countries.map((country, id) => (
                    <div
                      className="card"
                      key={id}
                      onClick={(e) => console.log(country.name)}
                    >
                      <Card
                        key={id}
                        name={country.name}
                        image={country.image}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                      />
                    </div>
                  ))
                : "Not countries found"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
