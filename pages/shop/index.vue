<template>
  <div>
    <h3>Products</h3>
    <div class="products">
      <TheProductCard
        v-for="product of store.getProducts"
        :key="product.id"
        :item="product"
      />
    </div>
    <div class="pagination">
      <ThePaginations
        @change="refetch"
        :total="store.total"
        :currentLimit="options.limit"
        :currentPage="currentPage"
      />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '/stores/products';
definePageMeta({
  layout: 'default',
});
const router = useRouter();
const route = useRoute();
const store = useProductStore();
const options = reactive({ limit: 4, skip: 0 });
const currentPage = ref();

onActivated(initPage());
// $fetch(async () => initPage());
// onMounted(async () => initPage());

async function initPage() {
  if (route.query.page) {
    (currentPage.value = route.query.page),
      (options.skip = route.query.page * options.limit - options.limit);
  }
  await store.fetchProducts(options);
}

function refetch(pageNumber) {
  currentPage.value = pageNumber;
  if (pageNumber === 1) {
    options.skip = 0;
  } else {
    options.skip = options.limit * (pageNumber - 1);
  }
  store.fetchProducts(options);
  router.push({
    path: route.path,
    query: { page: pageNumber },
  });
}
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-gap: 25px;
  margin-bottom: 25px;
  grid-template-columns: repeat(2, 1fr);
}

.pagination {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
