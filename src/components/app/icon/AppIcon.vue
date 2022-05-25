<template>
  <span :class="`mdi mdi-${icon} --is-${sizeModifier}`"></span>
</template>

<script>
const sizeMapper = {
  16: "sm",
  24: "md",
  32: "lg",
  40: "xl",
};
const allowedSizes = Object.keys(sizeMapper);
const sizeValidator = (size) => allowedSizes.includes(`${+size}`);
export default {
  name: "AppIcon",
  props: {
    icon: { type: String, default: "help" },
    size: {
      type: [Number, String],
      default: "24",
      validator: sizeValidator,
    },
  },
  computed: {
    sizeModifier() {
      const _size = sizeValidator(this.size) ? this.size : "24";
      return sizeMapper[_size] || sizeMapper[24];
    },
  },
};
</script>

<style scoped>
.--is-md {
  font-size: 24px;
}
.--is-sm {
  font-size: 16px;
}
.--is-lg {
  font-size: 32px;
}
.--is-xl {
  font-size: 40px;
}
</style>