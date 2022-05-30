<template>
  <AppRow>
    <AppColumn class="is-half">
      <AppInputField
        v-model="searchInput"
        :disabled="disabled"
        :loading="loading"
        label="Search"
        placeholder="Search by name or CCA3 code"
      ></AppInputField>
    </AppColumn>
    <AppColumn>
      <AppSelectField
        :disabled="disabled"
        :loading="loading"
        :options="continentsOptions"
        label="Continent"
      ></AppSelectField>
    </AppColumn>
    <AppColumn>
      <AppSelectField
        :disabled="disabled"
        :loading="loading"
        :options="sortOptions"
        label="Sort By"
      ></AppSelectField>
    </AppColumn>
  </AppRow>
</template>

<script>
import AppRow from "@/components/app/grid/AppRow";
import AppColumn from "@/components/app/grid/AppColumn";
import AppInputField from "@/components/app/form/AppInputField";
import AppSelectField from "@/components/app/form/AppSelectField";
export default {
  name: "CountryListFilters",
  components: { AppSelectField, AppInputField, AppColumn, AppRow },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    continents: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchInput: "",
      sortOptions: [
        {
          text: "Country name",
          value: "name",
        },
        {
          text: "Continent",
          value: "continent",
        },
        {
          text: "Population",
          value: "population",
        },
      ],
    };
  },
  computed: {
    continentsOptions() {
      let arr = [];
      if (!this.continents?.length) return arr;
      arr.push({ text: "All", value: null });
      return [...arr, ...this.continents.map((c) => ({ text: c, value: c }))];
    },
  },
};
</script>
