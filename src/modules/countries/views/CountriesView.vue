<script setup>
import { useCountryStore } from "@/modules/countries/store/countries.store";
import { storeToRefs } from "pinia";

// components
import AppCard from "@/components/app/card/AppCard";
import AppCardHeader from "@/components/app/card/AppCardHeader";
import AppCardContent from "@/components/app/card/AppCardContent";
import AppRow from "@/components/app/grid/AppRow";
import AppColumn from "@/components/app/grid/AppColumn";
import CountryListCard from "@/modules/countries/components/CountryListCard";
import AppIcon from "@/components/app/icon/AppIcon";

const { countries, loading, error } = storeToRefs(useCountryStore());
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
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <template v-else-if="countries">
        <AppRow>
          <AppColumn
            :cols="2"
            fluid
            v-for="country in countries"
            :key="country.cca3"
          >
            <CountryListCard :country="country"></CountryListCard>
          </AppColumn>
        </AppRow>
      </template>
    </AppCardContent>
  </AppCard>
</template>
