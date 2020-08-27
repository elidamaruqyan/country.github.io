import { routes } from "../helpers/routes.helper";
import { doGet } from "../helpers/request.helper";

const url = routes.getAllCountries();

const getCountry = (url) => doGet(url)
  .then((country) => {
    console.log(country);
  });

getCountry(url);
