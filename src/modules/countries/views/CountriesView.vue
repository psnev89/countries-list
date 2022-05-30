<script setup>
import { useCountryStore } from "@/modules/countries/store/countries.store";
import { storeToRefs } from "pinia";

// components
import AppCard from "@/components/app/card/AppCard";
import AppCardHeader from "@/components/app/card/AppCardHeader";
import AppCardContent from "@/components/app/card/AppCardContent";
import AppIcon from "@/components/app/icon/AppIcon";
import CountryListFilters from "@/modules/countries/components/CountryListFilters";
import CountryList from "@/modules/countries/components/CountryList";

const { countries, loading, error, allContinents } = storeToRefs(
  useCountryStore()
);
const { getAllCountries } = useCountryStore();

getAllCountries();
</script>

<template>
  <AppCard>
    <AppCardHeader>
      <h1 class="card-header-title">
        <AppIcon icon="earth"></AppIcon>
        World Countries
      </h1>
    </AppCardHeader>
    <AppCardContent>
      <CountryListFilters
        :disabled="loading || error"
        :loading="loading"
        :continents="allContinents"
      ></CountryListFilters>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <template v-else-if="countries">
        <CountryList :countries="countries"></CountryList>
      </template>
    </AppCardContent>
  </AppCard>
</template>
