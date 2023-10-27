<template>
  <div>
    <h3>Blog</h3>
    <div class="blog">
      <TheBlogCard
        :key="store.getOneBlog.id"
        :item="store.getOneBlog"
        isBig="true"
      />
    </div>
    <div v-if="store.getBlogComments.length">
      <h3>Comments</h3>
      <TheCommentsBlog
        v-for="item of store.getBlogComments"
        :key="item.id"
        :item="item"
      />
    </div>
    <div v-else>No Comments</div>
  </div>
</template>

<script setup>
import { useBlogStore } from '/stores/blogs';
import { onBeforeRouteLeave } from 'vue-router';
definePageMeta({
  layout: 'default',
  name: 'BlockPage',
});
const route = useRoute();
const store = useBlogStore();

onActivated(
  store.fetchOneBlog(route.params.id),
  store.fetchBlogComments(route.params.id)
);

onBeforeRouteLeave(() => {
  store.resetComments(), store.resetOneBlog();
});
</script>

<style lang="scss" scoped>
.blog {
  margin-bottom: 25px;
}
</style>
