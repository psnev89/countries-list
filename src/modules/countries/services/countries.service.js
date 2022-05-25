// service to provide countries from Countries API: https://restcountries.com
const httpClient = require("@/helpers/http.client").default;
const baseApiUrl = "https://restcountries.com/v3.1";

import Country from "@/modules/countries/entities/Country";
const model = Country;

const parse = (apiCountry) => {
  const parsedCountry = {
    name: apiCountry.name.common,
    cca3Code: apiCountry.cca3,
    capitals: apiCountry.capitals,
    continents: apiCountry.continents,
    languages: apiCountry.languages ? Object.values(apiCountry.languages) : [],
    latitude: apiCountry.latlng?.[0],
    longitude: apiCountry.latlng?.[1],
    borders: apiCountry.borders,
    area: apiCountry.area,
    map: apiCountry.maps.googleMaps,
    population: apiCountry.population,
    flag: apiCountry.flags.png,
  };
  return new model(parsedCountry);
};

export default class CountriesService {
  static getAllCountries = async () => {
    let countries, error;
    try {
      const { data } = await httpClient.get(`${baseApiUrl}/all`);
      countries = data.map(parse);
    } catch (e) {
      error = e;
    }
    return {
      data: countries,
      error,
    };
  };
}
