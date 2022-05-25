<template>
  <div :class="`notification ${typeClass}`">
    <button v-if="hasDelete" class="delete"></button>
    <slot></slot>
  </div>
</template>

<script>
const allowedTypes = [
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
];
export default {
  name: "AppNotification",
  props: {
    hasDelete: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
    },
    type: {
      type: String,
      validator: (value) => allowedTypes.includes(value),
      default: "primary",
    },
  },
  computed: {
    typeClass() {
      return allowedTypes.includes(this.type)
        ? `is-${this.type}`
        : "is-primary";
    },
  },
};
</script>

<style scoped></style>
