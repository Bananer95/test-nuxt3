<template>
  <div class="bigi">
    <TheInput type="text" maxlength="30" v-model="searchField" />
    <NuxtImg
      src="/img/loupe-svgrepo-com.svg"
      width="30"
      height="20"
      class="serach-icon"
      @click="search()"
    />
  </div>
</template>

<script setup>
const router = useRouter();
const searchField = ref('');

function search() {
  if (searchField.value) {
    console.log(searchField.value);
    router.push({
      name: 'Search',
      props: true,
      query: { keyword: searchField.value },
    });
    searchField.value = '';
  }
}
</script>

<style lang="scss" scoped>
.bigi {
  border-start-end-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.serach-icon {
  margin-left: -35px;
  cursor: pointer;
}
</style>
