<template>
  <div :class="['column', colsClass]"><slot></slot></div>
</template>

<script>
const minCols = 1;
const maxCols = 12;
const colsValidator = (value) => value >= minCols && value <= maxCols;
export default {
  name: "AppColumn",
  props: {
    cols: {
      type: Number,
      validator: colsValidator,
    },
  },
  computed: {
    colsClass() {
      return colsValidator ? `is-${this.cols}` : "";
    },
  },
};
</script>
