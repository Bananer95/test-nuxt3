<template>
  <div>
    <h3>Blogs</h3>
    <div class="blogs">
      <TheBlogCard v-for="blog of store.getBlogs" :key="blog.id" :item="blog" />
    </div>
    <ThePaginations
      @change="refetch"
      :total="store.total"
      :currentLimit="options.limit"
      :currentPage="currentPage"
    />
  </div>
</template>

<script setup>
import { useBlogStore } from '/stores/blogs';
definePageMeta({
  layout: 'default',
});
const router = useRouter();
const route = useRoute();
const store = useBlogStore();
const options = reactive({ limit: 15, skip: 0 });
const currentPage = ref();

onActivated(initPage());

async function initPage() {
  if (route.query.page) {
    (currentPage.value = route.query.page),
      (options.skip = route.query.page * options.limit - options.limit);
  }
  await store.fetchBlogs(options);
}

function refetch(pageNumber) {
  currentPage.value = pageNumber;
  if (pageNumber === 1) {
    options.skip = 0;
  } else {
    options.skip = options.limit * (pageNumber - 1);
  }
  store.fetchBlogs(options);
  console.log(route.path);
  router.push({
    path: route.path,
    query: { page: pageNumber || 1 },
  });
}
</script>

<style lang="scss" scoped>
.blogs {
  display: grid;
  grid-gap: 25px;
  margin-bottom: 25px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
