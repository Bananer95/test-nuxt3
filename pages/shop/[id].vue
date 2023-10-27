<template>
  <div>
    <TheProductPage :item="store.getOneProduct" />
  </div>
</template>

<script setup>
import { useProductStore } from '/stores/products';
import { onBeforeRouteLeave } from 'vue-router';
definePageMeta({
  layout: 'default',
  name: 'ProductPage',
});
const store = useProductStore();
const route = useRoute();

onActivated(store.fetchOneProduct(route.params.id));
onBeforeRouteLeave(() => {
  store.resetOneProduct();
});
</script>

<style lang="scss" scoped></style>
