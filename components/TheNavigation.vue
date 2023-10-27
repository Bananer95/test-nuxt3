<template>
  <div class="nav">
    <nav>
      <ul>
        <li v-for="(item, index) of nav" :key="index">
          <NuxtLink :to="route.path === item.to ? null : item.to">{{
            item.title
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <TheSearch />
  </div>
</template>

<script setup>
const route = useRoute();
const nav = ref([
  { title: 'Home', to: '/' },
  { title: 'Shop', to: '/shop' },
  { title: 'Blogs', to: '/blog' },
  { title: 'About', to: '/about' },
  { title: 'Contact us', to: '/contact-us' },
]);
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background-color: aqua;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

  ul {
    display: flex;
    flex-direction: row;
    li {
      list-style-type: none;
      margin-right: 15px;
      a {
        text-decoration: none;
        color: black;
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
