<template>
  <div class="blogWrapper">
    <h3 v-if="isBig">{{ item.title }}</h3>
    <h3 v-else>
      <NuxtLink
        class="title-link"
        :to="{
          name: 'BlockPage',
          params: {
            id: item.id,
          },
          props: true,
          query: { block: createSlug(item.title) },
        }"
      >
        {{ item.title }}
      </NuxtLink>
    </h3>
    <div v-if="isBig" class="text">{{ item.body }}</div>
    <div v-if="isBig" class="tags">
      <NuxtImg src="/img/icon-heart.svg" width="36" height="17" />
      {{ item.reactions }}
    </div>
    <div v-if="item.tags?.length" class="tags">
      <NuxtImg
        src="/img/tag-icon.svg"
        width="40"
        height="30"
        style="transform: rotate(45deg)"
      />
      <div class="tag-wrapper">
        <span v-for="tag in item.tags" :key="tag">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isBig: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.blogWrapper {
  padding: 15px;
  border: 1px solid orchid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: auto;
  div {
    margin-bottom: 15px;
  }
}

.tag-wrapper {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 0 0 0 10px !important;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-style: italic;
}

.tags {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.title-link {
  text-decoration: none;
  text-transform: capitalize;
  color: darkblue;
}
</style>
