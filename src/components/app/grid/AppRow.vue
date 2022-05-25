<template>
  <div :class="['columns', { 'is-multiline': multiline }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppRow",
  props: {
    multiline: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
