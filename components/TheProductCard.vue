<template>
  <div class="productWrapper">
    <nuxt-img class="img" :src="item.thumbnail" />
    <h3>{{ item.title }}</h3>
    <div class="row">
      <div>${{ item.price }}</div>
      <div>-{{ item.discountPercentage }}%</div>
    </div>
    <div>{{ item.raiting }}</div>
    <button @click="goToProductPage(item.id, item.title)">See Product</button>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const route = useRoute();

function goToProductPage(id, title) {
  router.push({
    name: 'ProductPage',
    params: { id: id },
    query: { product: createSlug(title) },
  });
}
</script>

<style lang="scss" scoped>
.productWrapper {
  padding: 15px;
  border: 1px solid orchid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-bottom: 15px;
  }
}

.img {
  width: 300px;
  height: 250px;
  object-fit: cover;
}
.row {
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
}
</style>
