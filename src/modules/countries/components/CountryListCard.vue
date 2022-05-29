<template>
  <AppCard outline>
    <AppCardImage :src="country.flagImage"></AppCardImage>
    <AppCardContent style="border-top: 1px solid #e5e5e5">
      <p class="--country-name --text-truncated">{{ country.name }}</p>
      <p class="--country-continents --text-truncated">{{ continents }}</p>
    </AppCardContent>
  </AppCard>
</template>

<script>
import Country from "@/modules/countries/entities/Country";
import AppCard from "@/components/app/card/AppCard";
import AppCardImage from "@/components/app/card/AppCardImage";
import AppCardContent from "@/components/app/card/AppCardContent";

export default {
  name: "CountryListCard",
  components: { AppCardContent, AppCardImage, AppCard },
  props: {
    country: {
      type: Country,
      required: true,
    },
  },
  computed: {
    continents() {
      return this.country.continents.join(", ");
    },
  },
};
</script>

<style scoped lang="scss">
.--country-name {
  font-size: 12px;
}

.--country-continents {
  color: #bbb;
  font-size: 12px;
}

:deep(img) {
  object-fit: contain;
  object-position: left;
}
</style>
