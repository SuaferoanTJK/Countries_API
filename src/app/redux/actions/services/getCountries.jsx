import axios from "axios";
import { Constants } from "../../../Constants";

const getCountries = async (param = "all", word) => {
  let countries = [];
  let url = null;
  if (param === "all") {
    url = Constants.API_ALL;
  } else if (param === "name") {
    url = `${Constants.API_NAME}${word}?fullText=true`;
  } else if (param === "region") {
    url = `${Constants.API_REGION}${word}`;
  }

  await axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        data.forEach((country) => {
          countries.push({
            image: country.flags.svg,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital?.[0] || "-",
            nativeName: country.name.nativeName,
            subregion: country.subregion,
            topLevelDomain: country?.tld || "-",
            currencies: country.currencies,
            languages: country.languages,
            borders: country.borders,
          });
        });
      } else {
        console.log("Incorrect Status");
      }
    })
    .catch((e) => {
      console.log("Fallo");
    });
  return countries;
};

export default getCountries;
