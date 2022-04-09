import axios from "axios";

const getCountries = async () => {
  let countries = [];
  await axios
    .get("https://restcountries.com/v2/all")
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        data.forEach((country) => {
          countries.push({
            image: country.flag,
            name: country.name,
            population: country.population,
            region: country.region,
            capital: country.capital,
          });
        });
      } else {
        console.log("Status incorrecto");
      }
    })
    .catch((e) => {
      console.log("Fallo");
    });
  return countries;
};

export default getCountries;
