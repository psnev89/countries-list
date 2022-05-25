<template>
  <AppRow>
    <AppColumn :cols="2" fluid v-for="country in countries" :key="country.cca3">
      <CountryListCard :country="country"></CountryListCard>
    </AppColumn>
  </AppRow>
</template>

<script>
import AppRow from "@/components/app/grid/AppRow";
import AppColumn from "@/components/app/grid/AppColumn";
import CountryListCard from "@/modules/countries/components/CountryListCard";
import Country from "@/modules/countries/entities/Country";

const countriesValidator = (countries) => {
  return (
    Array.isArray(countries) && countries.every((c) => c instanceof Country)
  );
};
export default {
  name: "CountryList",
  components: { CountryListCard, AppColumn, AppRow },
  props: {
    countries: {
      type: Array,
      default: () => [],
      validator: countriesValidator,
    },
  },
};
</script>
