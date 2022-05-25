<template>
  <div class="card-image">
    <figure :class="`image ${ratioClass}`">
      <img :src="src" :alt="alt" />
    </figure>
  </div>
</template>

<script>
const allowedRatios = [
  "1by1",
  "square",
  "4by3",
  "16by9",
  "5by3",
  "3by1",
  "3by4",
];
const ratioValidator = (value) => {
  return allowedRatios.includes(value);
};
export default {
  name: "AppCardImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
      default: "Card image",
    },
    ratio: {
      type: String,
      required: false,
      default: "4by3",
      validator: ratioValidator,
    },
  },
  computed: {
    ratioClass() {
      return ratioValidator(this.ratio) ? `is-${this.ratio}` : "is-4by3";
    },
  },
};
</script>

<style scoped></style>
