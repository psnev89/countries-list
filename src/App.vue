<script setup>
import { useCountryStore } from "@/modules/countries/store/countries.store";
import { storeToRefs } from "pinia";

const { countries, loading, error } = storeToRefs(useCountryStore());
const { getAllCountries } = useCountryStore();

getAllCountries();
</script>

<template>
  <main>
    teste
    <div v-if="loading">Loading</div>
    <div v-else-if="error">{{ error }}</div>
    <template v-else-if="countries">
      <div v-for="country in countries" :key="country.cca3">
        <p>{{ country.name }}</p>
      </div>
    </template>
  </main>
</template>
