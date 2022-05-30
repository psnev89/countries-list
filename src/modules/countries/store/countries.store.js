import { defineStore } from "pinia";
import CountriesService from "@/modules/countries/services/countries.service";

const initialState = {
  countries: [],
  country: null,
  loading: false,
  error: false,
};

export const useCountryStore = defineStore("countries", {
  id: "country",
  state: () => ({ ...initialState }),
  getters: {
    sortedCountries(state) {
      return state.countries.sort((a, b) => a.name.localeCompare(b.name));
    },
    allContinents(state) {
      return state.countries.reduce((continents, country) => {
        country.continents.forEach((c) => {
          if (!continents.includes(c)) continents.push(c);
        });
        return continents;
      }, []);
    },
  },
  actions: {
    async getAllCountries() {
      this.countries = [];
      this.loading = true;
      const { data, error: apiError } =
        await CountriesService.getAllCountries();
      this.countries = data;
      this.error = apiError;
      this.loading = false;
    },
  },
});
