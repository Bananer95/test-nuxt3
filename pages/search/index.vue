<template>
  <div>
    <h2>Serach:{{ searchTitle }}</h2>
    <div class="header-btn">
      <button :class="{ active: !searchInBlogs }" @click="searchItems(false)">
        In Shop
      </button>
      <button :class="{ active: searchInBlogs }" @click="searchItems(true)">
        In Blogs
      </button>
    </div>
    <div v-if="!searchInBlogs" class="search-list-wrapper">
      <TheProductCard
        v-for="product in productStore.getSearchedProduct"
        :key="product.id"
        :item="product"
      />
    </div>
    <div v-else class="search-list-wrapper">
      <TheBlogCard
        v-for="product in blogStore.getFoundBlogs"
        :key="product.id"
        :item="product"
      />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '/stores/products';
import { useBlogStore } from '/stores/blogs';
definePageMeta({
  layout: 'default',
  name: 'Search',
});
const route = useRoute();
const blogStore = useBlogStore();
const productStore = useProductStore();
const searchTitle = ref('');
const searchInBlogs = ref(false);

onActivated(initPage());

async function initPage() {
  const { query } = route;
  if (query.keyword && !searchInBlogs.value) {
    await productStore.searchProducts(query.keyword);
    searchTitle.value = route.query.keyword;
  } else if (query.keyword && searchInBlogs) {
    await blogStore.searchBlogs(query.keyword);
  }
}

watch(
  () => route.query.keyword,
  (newKeyword, oldKeyword) => {
    console.log(newKeyword);
    console.log(oldKeyword);
    initPage();
  }
);

async function searchItems(value) {
  searchInBlogs.value = value;
  initPage();
}
</script>

<style lang="scss" scoped>
.search-list-wrapper {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 80%;
  gap: 20px;
}
.header-btn {
  display: flex;
  flex-direction: row;

  & button {
    width: 80%;
    margin: auto;
    cursor: pointer;
    height: 25px;
  }
}

.active {
  background-color: aqua;
  border: none;
}
</style>
