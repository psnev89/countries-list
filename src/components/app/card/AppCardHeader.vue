<template>
  <header class="card-header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "AppCardHeader",
};
</script>

<style scoped lang="scss">
.card-header {
  box-shadow: none;
  border-bottom: 1px solid #e5e5e5;
}
</style>
