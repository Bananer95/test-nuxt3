<template>
  <div class="commentsBlogWrapper">
    <h4>User: {{ item.user.username }}</h4>
    <div>{{ item.body }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.commentsBlogWrapper {
  padding: 15px;
  border: 1px solid orchid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  div {
    margin-bottom: 15px;
  }
}
h4 {
  text-transform: capitalize;
}
</style>
