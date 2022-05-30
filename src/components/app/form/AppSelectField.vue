<template>
  <div class="field">
    <label v-if="label" class="label">{{ label }}</label>
    <div class="control">
      <div :class="['select', { 'is-loading': loading }]">
        <select :disabled="disabled">
          <template v-if="hasOptions">
            <option
              v-for="(option, i) in options"
              :key="i"
              :value="option.value != null ? option.value : option"
            >
              {{ option.text != null ? option.text : option }}
            </option>
          </template>
          <option v-else disabled>No options available</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSelectField",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasOptions() {
      return this.options.length > 0;
    },
  },
};
</script>

<style scoped lang="scss">
label {
  font-size: 14px;
}

select,
.select {
  width: 100%;
}
</style>
