<template>
  <article :class="['card', { 'is-outlined': outline }]">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.is-outlined {
  box-shadow: none;
  border: 1px solid #e5e5e5;
}
</style>
