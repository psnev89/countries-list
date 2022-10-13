import { defineStore } from "pinia";
import CountriesService from "@/modules/countries/services/countries.service";

const initialState = {
  countries: [],
  country: null,
  loading: false,
  error: false,
  filters: {
    name: null,
    continent: null,
  },
};

export const useCountryStore = defineStore("countries", {
  id: "country",
  state: () => ({ ...initialState }),
  getters: {
    allContinents(state) {
      return state.countries.reduce((continents, country) => {
        country.continents.forEach((c) => {
          if (!continents.includes(c)) continents.push(c);
        });
        return continents;
      }, []);
    },
    getFiltersToBeApplied(state) {
      const filterFuncs = [];
      if (state.filters.name) {
        filterFuncs.push((el) => el.name.toLowerCase().includes(state.filters.name.toLowerCase()));
      }
      if (state.filters.continent) {
        filterFuncs.push((el) =>
          el.continents.includes(state.filters.continent)
        );
      }
      return filterFuncs;
    },
    getCountries(state) {
      const filterFuncs = this.getFiltersToBeApplied;
      return state.countries.filter((country) => {
        if (filterFuncs.length) {
          return filterFuncs.every((func) => func(country));
        }
        return country;
      }).sort((a, b) => a.name.localeCompare(b.name));
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
    updateFilters(newFilters) {
      this.filters = { ...newFilters };
    },
  },
});
