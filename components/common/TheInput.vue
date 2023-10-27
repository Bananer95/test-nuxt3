<template>
  <input
    v-bind="$props"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
    required: false,
  },
});
</script>

<style lang="scss" scoped>
input[type='text'] {
  width: 145px;
  height: 25px;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  padding: 0 33px 0 15px;
  outline: none;
}
</style>
