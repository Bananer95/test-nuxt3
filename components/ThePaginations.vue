<template>
  <div class="pagination">
    <button
      :class="props.currentPage == pageNumber ? 'selected' : ''"
      @click="$emit('change', pageNumber)"
      v-for="pageNumber in pages"
      :key="pageNumber"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  total: Number,
  currentLimit: Number,
  currentPage: {
    type: Number,
    default: 1,
    required: false,
  },
});
const pages = computed(() => {
  const pageArray = [];
  for (let i = 0; i < props.total / props.currentLimit; i++) {
    pageArray.push(i + 1);
  }
  return pageArray;
});

defineEmits(['change']);
</script>

<style lang="scss" scoped>
.pagination {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.selected {
  background-color: aqua;
  border: none;
  color: black;
}
</style>
