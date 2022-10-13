<template>
  <AppRow>
    <AppColumn>
      <AppInputField
        v-model="inputs.name"
        :disabled="disabled"
        :loading="loading"
        label="Search"
        placeholder="Search by name or CCA3 code"
      ></AppInputField>
    </AppColumn>
    <AppColumn>
      <AppSelectField
        v-model="inputs.continent"
        :disabled="disabled"
        :loading="loading"
        :options="continentsOptions"
        label="Continent"
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
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inputs: {
        name: null,
        continent: null,
      },
    };
  },
  computed: {
    continentsOptions() {
      let arr = [];
      if (!this.continents?.length) return arr;
      arr.push({ text: "All", value: "" });
      return [...arr, ...this.continents.map((c) => ({ text: c, value: c }))];
    },
  },
  mounted() {
    this.inputs.continent = this.value.continent;
    this.inputs.name = this.value.name;
  },
  watch: {
    inputs: {
      deep: true,
      handler(value) {
        this.$emit("filter", value);
      },
    },
  },
};
</script>
