<template>
  <div>
    <h1>Hello Andrei</h1>
    <h3>Most Popular</h3>
    <TheSlider customClass="grid-cards">
      <TheBlogCard
        v-for="item in blogStore?.getMostPoularBlogs"
        :key="item.id"
        :item="item"
      />
    </TheSlider>
    <h3>Most Popular</h3>
    <TheSlider>
      <TheProductCard
        v-for="product in productStore?.getMostPopularProducts"
        :key="product.id"
        :item="product"
      />
    </TheSlider>
  </div>
</template>

<script setup>
import { useProductStore } from '/stores/products';
import { useBlogStore } from '/stores/blogs';

definePageMeta({
  layout: 'default',
});

const blogStore = useBlogStore();
const productStore = useProductStore();

async function fetchBlogs() {
  if (!blogStore.mostPopularBlogs.length) {
    await blogStore.fetchMostPopularBlogs();
  }
}

async function fetchProducts() {
  if (!productStore.mostPopularProducts.length) {
    await productStore.fetchMostPopularProducts();
  }
}

onActivated(fetchBlogs());

onActivated(fetchProducts());
</script>

<style lang="scss" scoped>
// .slider-wrapper {
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   overflow: hidden;
//   box-sizing: border-box;
//   overflow: hidden;
// }
</style>
