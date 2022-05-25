<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  label: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const update = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="field">
    <label v-if="label" class="label">{{ label }}</label>
    <div :class="['control', { 'is-loading': loading }]">
      <input
        class="input"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="modelValue"
        @input="update"
      />
    </div>
  </div>
</template>

<style scoped>
label {
  font-size: 14px;
}
</style>
